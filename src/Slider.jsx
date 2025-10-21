import React from "react";

export default function RightSlideNav({
  sections = [
    { id: "start", label: "Start" },
    { id: "sec-01", label: "01" },
    { id: "sec-02", label: "02" },
    { id: "sec-03", label: "03" },
  ],
  active = 0,
  onSelect = () => {},
}) {
  const handleJump = (i, id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    onSelect(i);
  };

  const pct =    sections.length > 1 ? (active / (sections.length - 1)) * 100 : 0;
  const onTrackClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top; 
    const ratio = y / rect.height;
    const idx = Math.round(ratio * (sections.length - 1));
    const clamped = Math.max(0, Math.min(idx, sections.length - 1));
    handleJump(clamped, sections[clamped].id);
  };

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 text-white z-50">
      <nav aria-label="Section navigation">
        <div className="flex items-center gap-3">
          <ul className="flex flex-col justify-between h-48 text-xs tracking-wider">
            {sections.map(({ label, id }, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleJump(i, id);
                  }}
                  className={`uppercase opacity-80 hover:opacity-100 transition focus:outline-none focus:ring-2 focus:ring-white/70 rounded-sm ${
                    i === active ? "font-semibold opacity-100" : ""
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="relative h-48 w-2 bg-white/25 rounded-full cursor-pointer select-none"
            onClick={onTrackClick}
            role="slider"
            aria-orientation="vertical"
            aria-valuemin={0}
            aria-valuemax={sections.length - 1}
            aria-valuenow={active}
            aria-label="Section scroller"
            title="Scroll between sections"
          >
            <div
              className="absolute left-0 bottom-0 w-full bg-white/40 rounded-b-full transition-all duration-300"
              style={{ height: `${pct}%` }}
              aria-hidden="true"
            />
            <div
              className="absolute left-0 w-full rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300"
              style={{
                height: "22px",
                top: `${pct}%`,
                transform: "translateY(-50%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </nav>
    </aside>
  );
}
