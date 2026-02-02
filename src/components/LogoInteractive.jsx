import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useRef, useState } from "react";
import logoSvg from "../assets/logo-primary.svg?raw";

export default function LogoInteractive({ onHover, onLeave }) {
  const { t } = useTranslation();
  const rootRef = useRef(null);

  const [hoverMode, setHoverMode] = useState(null);
  const [activeMode, setActiveMode] = useState(null);
  const [anchor, setAnchor] = useState(null);

  const mode = useMemo(() => activeMode ?? hoverMode, [activeMode, hoverMode]);

  const info = useMemo(() => {
    if (!mode) return null;
    return {
      title: t(`logo.meanings.${mode}.title`),
      desc: t(`logo.meanings.${mode}.desc`),
    };
  }, [mode, t]);

  const findModeEl = (e) => {
    const root = rootRef.current;
    if (!root) return null;
    return e.target?.closest?.("[data-mode]") || null;
  };

  const computeScreenAnchor = (modeEl) => {
    const root = rootRef.current;
    if (!root || !modeEl) return null;

    const svg = root.querySelector("svg");
    if (!svg) return null;

    let box;
    try {
      box = modeEl.getBBox();
    } catch {
      return null;
    }

    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;

    const pt = svg.createSVGPoint();
    pt.x = cx;
    pt.y = cy;

    const ctm = modeEl.getScreenCTM?.() || svg.getScreenCTM?.();
    if (!ctm) return null;

    const screen = pt.matrixTransform(ctm);
    return { x: screen.x, y: screen.y };
  };

  const clearHover = () => {
    setHoverMode(null);
    if (!activeMode) setAnchor(null);
    onLeave?.();
  };

  // Desktop hover + fix sticky
  const handleMouseMove = (e) => {
    const el = findModeEl(e);

    if (!el) {
      if (hoverMode !== null) clearHover();
      return;
    }

    const m = el.getAttribute("data-mode");
    if (!m) return;

    if (hoverMode !== m) {
      setHoverMode(m);
      onHover?.(m);
    }

    const a = computeScreenAnchor(el);
    if (a) setAnchor(a);
  };

  const handleMouseLeave = () => clearHover();

  // Mobile tap toggle (ONLY shapes)
  const handleTouchStart = (e) => {
    const el = findModeEl(e);

    // tap outside shapes -> do nothing 
    if (!el) return;

    e.preventDefault();
    e.stopPropagation();

    const m = el.getAttribute("data-mode");
    if (!m) return;

    setActiveMode((prev) => (prev === m ? null : m));
    onHover?.(m);

    const a = computeScreenAnchor(el);
    if (a) setAnchor(a);
  };

  // Close card when tapping anywhere else on the page (mobile)
  useEffect(() => {
    if (!activeMode) return;
    const close = () => setActiveMode(null);
    window.addEventListener("touchstart", close, { passive: true });
    return () => window.removeEventListener("touchstart", close);
  }, [activeMode]);

  // Recompute on resize/scroll
  useEffect(() => {
    if (!mode) return;
    const root = rootRef.current;
    if (!root) return;

    const modeEl = root.querySelector(`[data-mode="${mode}"]`);
    if (!modeEl) return;

    const recalc = () => {
      const a = computeScreenAnchor(modeEl);
      if (a) setAnchor(a);
    };

    recalc();
    window.addEventListener("resize", recalc);
    window.addEventListener("scroll", recalc, true);
    return () => {
      window.removeEventListener("resize", recalc);
      window.removeEventListener("scroll", recalc, true);
    };
  }, [mode]);

  // Detect mobile 
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Desktop tooltip placement
  const tooltip = useMemo(() => {
    if (!anchor || isMobile) return null;

    const w = 280;
    const h = 90;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const offsetX = 70; // push out
    const offsetY = 90;

    let left = anchor.x + offsetX;
    let top = anchor.y + offsetY;

    left = Math.max(10, Math.min(left, vw - w - 10));
    top = Math.max(10, Math.min(top, vh - h - 10));

    const x2 = left - 12;
    const y2 = top + 22;

    return { left, top, w, h, x2, y2 };
  }, [anchor, isMobile]);

  const showDesktopOverlay = !isMobile && mode && info && anchor && tooltip;

  return (
    <div className="w-full">
      <div className="relative w-full h-auto select-none">
        <style>{`
          @keyframes dscIn {
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>

        <div
          ref={rootRef}
          className="w-full h-auto [&_svg]:w-full [&_svg]:h-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          dangerouslySetInnerHTML={{ __html: logoSvg }}
        />

        {/* Desktop: leader line + floating label */}
        {showDesktopOverlay && (
          <>
            <svg className="pointer-events-none fixed inset-0" width="100%" height="100%">
              <line
                x1={anchor.x}
                y1={anchor.y}
                x2={tooltip.x2}
                y2={tooltip.y2}
                stroke="color-mix(in srgb, var(--accent) 85%, white)"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <circle
                cx={anchor.x}
                cy={anchor.y}
                r="4.4"
                fill="color-mix(in srgb, var(--accent) 80%, white)"
              />
            </svg>

            <div
              className="pointer-events-none fixed rounded-2xl bg-black/70 px-4 py-3 backdrop-blur-md
                         translate-y-1 opacity-0"
              style={{
                left: `${tooltip.left}px`,
                top: `${tooltip.top}px`,
                width: `${tooltip.w}px`,
                border: "1px solid color-mix(in srgb, var(--accent) 55%, transparent)",
                boxShadow:
                  "0 12px 34px rgba(0,0,0,0.35), 0 0 0 1px color-mix(in srgb, var(--accent) 22%, transparent)",
                animation: "dscIn .18s ease forwards",
              }}
            >
              <div
                className="text-sm font-semibold"
                style={{ color: "color-mix(in srgb, var(--accent) 90%, white)" }}
              >
                {info.title}
              </div>
              <div className="mt-1 text-xs leading-relaxed text-white/80">{info.desc}</div>
            </div>
          </>
        )}
      </div>

      {/* Mobile: clean card UNDER the logo */}
      {isMobile && mode && info && (
        <div
          className="mt-4 rounded-2xl bg-black/60 px-4 py-3 backdrop-blur-md"
          style={{
            border: "1px solid color-mix(in srgb, var(--accent) 55%, transparent)",
            boxShadow:
              "0 12px 34px rgba(0,0,0,0.25), 0 0 0 1px color-mix(in srgb, var(--accent) 18%, transparent)",
          }}
        >
          <div
            className="text-sm font-semibold"
            style={{ color: "color-mix(in srgb, var(--accent) 90%, white)" }}
          >
            {info.title}
          </div>
          <div className="mt-1 text-xs leading-relaxed text-white/80">{info.desc}</div>
          <div className="mt-2 text-[11px] text-white/50">Tap a shape again to close.</div>
        </div>
      )}
    </div>
  );
}
