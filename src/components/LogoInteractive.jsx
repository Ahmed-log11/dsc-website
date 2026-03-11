import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useRef, useState } from "react";
import logoSvg from "../assets/logo-Primary.svg?raw";

export default function LogoInteractive({ onHover, onLeave }) {
  const { t } = useTranslation();
  const rootRef = useRef(null);

  // 1. "activeMode" remembers the shape for the color
  const [activeMode, setActiveMode] = useState(null);
  
  // 2. "showTooltip" controls ONLY the visibility of the pop-out card
  const [showTooltip, setShowTooltip] = useState(false);
  
  const [anchor, setAnchor] = useState(null);

  const info = useMemo(() => {
    if (!activeMode) return null;
    return {
      title: t(`logo.meanings.${activeMode}.title`),
      desc: t(`logo.meanings.${activeMode}.desc`),
    };
  }, [activeMode, t]);

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

  // Desktop hover
  const handleMouseMove = (e) => {
    const el = findModeEl(e);

    if (!el) {
      setShowTooltip(false);
      return;
    }

    const m = el.getAttribute("data-mode");
    if (!m) return;

    if (activeMode !== m) {
      setActiveMode(m);
      onHover?.(m);
    }
    
    setShowTooltip(true);

    const a = computeScreenAnchor(el);
    if (a) setAnchor(a);
  };

  // Hide tooltip when leaving the SVG
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  // Mobile tap
  const handleTouchStart = (e) => {
    const el = findModeEl(e);

    if (!el) {
      setShowTooltip(false);
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const m = el.getAttribute("data-mode");
    if (!m) return;

    if (activeMode === m) {
      setShowTooltip(!showTooltip);
    } else {
      setActiveMode(m);
      setShowTooltip(true);
      onHover?.(m); 
    }

    const a = computeScreenAnchor(el);
    if (a) setAnchor(a);
  };

  // Close tooltip when tapping anywhere else on the page (mobile)
  useEffect(() => {
    if (!showTooltip) return;
    const close = () => setShowTooltip(false);
    window.addEventListener("touchstart", close, { passive: true });
    return () => window.removeEventListener("touchstart", close);
  }, [showTooltip]);

  // Keep anchor accurate on resize, and HIDE tooltip on scroll!
  useEffect(() => {
    if (!activeMode) return;
    const root = rootRef.current;
    if (!root) return;

    const modeEl = root.querySelector(`[data-mode="${activeMode}"]`);
    if (!modeEl) return;

    const handleResize = () => {
      const a = computeScreenAnchor(modeEl);
      if (a) setAnchor(a);
    };

    const handleScroll = () => {
      // Instantly hide the tooltip when the user starts scrolling
      setShowTooltip(false);
      const a = computeScreenAnchor(modeEl);
      if (a) setAnchor(a);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeMode]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const tooltip = useMemo(() => {
    if (!anchor || isMobile) return null;

    const w = 280;
    const h = 90;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const offsetX = 70; 
    const offsetY = 90;

    let left = anchor.x + offsetX;
    let top = anchor.y + offsetY;

    left = Math.max(10, Math.min(left, vw - w - 10));
    top = Math.max(10, Math.min(top, vh - h - 10));

    const x2 = left - 12;
    const y2 = top + 22;

    return { left, top, w, h, x2, y2 };
  }, [anchor, isMobile]);

  const showDesktopOverlay = !isMobile && showTooltip && info && anchor && tooltip;

  return (
    <div className="w-full">
      <div className="relative w-full h-auto select-none">
        <style>{`
          @keyframes dscIn {
            from { transform: translateY(8px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>

        <div
          ref={rootRef}
          className="w-full h-auto [&_svg]:w-full [&_svg]:h-auto transition-transform duration-300"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          dangerouslySetInnerHTML={{ __html: logoSvg }}
        />

        {showDesktopOverlay && (
          <>
            <svg className="pointer-events-none fixed inset-0 z-50" width="100%" height="100%">
              <line
                x1={anchor.x}
                y1={anchor.y}
                x2={tooltip.x2}
                y2={tooltip.y2}
                stroke="var(--accent)"
                strokeWidth="4"
                strokeLinecap="round"
                className="opacity-30 blur-[4px]"
              />
              <line
                x1={anchor.x}
                y1={anchor.y}
                x2={tooltip.x2}
                y2={tooltip.y2}
                stroke="color-mix(in srgb, var(--accent) 90%, white)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx={anchor.x}
                cy={anchor.y}
                r="4.4"
                fill="color-mix(in srgb, var(--accent) 90%, white)"
                className="shadow-lg"
              />
            </svg>

            <div
              className="pointer-events-none fixed z-50 rounded-2xl bg-[#0B1121]/85 px-5 py-4 backdrop-blur-xl translate-y-1 opacity-0"
              style={{
                left: `${tooltip.left}px`,
                top: `${tooltip.top}px`,
                width: `${tooltip.w}px`,
                border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
                boxShadow:
                  "0 20px 40px -10px color-mix(in srgb, var(--accent) 25%, transparent), 0 0 0 1px color-mix(in srgb, var(--accent) 20%, transparent)",
                animation: "dscIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            >
              <div
                className="text-sm font-bold tracking-wide"
                style={{ color: "color-mix(in srgb, var(--accent) 90%, white)" }}
              >
                {info.title}
              </div>
              <div className="mt-1.5 text-xs leading-relaxed text-white/80">{info.desc}</div>
            </div>
          </>
        )}
      </div>

      {isMobile && showTooltip && info && (
        <div
          className="mt-6 rounded-2xl bg-[#0B1121]/85 px-5 py-4 backdrop-blur-xl opacity-0 translate-y-2"
          style={{
            border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
            boxShadow:
              "0 16px 32px -8px color-mix(in srgb, var(--accent) 20%, transparent), 0 0 0 1px color-mix(in srgb, var(--accent) 20%, transparent)",
            animation: "dscIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          <div
            className="text-sm font-bold tracking-wide"
            style={{ color: "color-mix(in srgb, var(--accent) 90%, white)" }}
          >
            {info.title}
          </div>
          <div className="mt-1.5 text-xs leading-relaxed text-white/80">{info.desc}</div>
        </div>
      )}
    </div>
  );
}