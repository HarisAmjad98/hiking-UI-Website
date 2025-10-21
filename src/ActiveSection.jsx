import { useEffect, useState } from "react";

export default function ActiveSection(sectionIds, opts = {}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    // Focus around viewport center to decide "active"
    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const idx = sectionIds.indexOf(visible.target.id);
          if (idx !== -1) setActive(idx);
        }
      },
      {
        root: null,
        // top/bottom offsets so a section becomes active near mid-screen
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
        ...opts,
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds.join("|")]); // stable dep

  return { active, setActive };
}
