import logoSvg from "../assets/logo-primary.svg?raw";

export default function LogoInteractive({ onHover, onLeave }) {
  const handleInteract = (e) => {
    const el = e.target.closest?.("[data-mode]");
    if (!el) return;
    onHover?.(el.getAttribute("data-mode"));
  };

  return (
    <div
      className="w-full h-auto select-none [&_svg]:w-full [&_svg]:h-auto"
      onMouseMove={handleInteract}   // desktop hover
      onTouchStart={handleInteract}  // mobile tap
      onMouseLeave={onLeave}         // reset when leaving on desktop
      dangerouslySetInnerHTML={{ __html: logoSvg }}
    />
  );
}
