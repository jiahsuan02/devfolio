import { useEffect, useRef, useState } from "react";

/**
 * useScrollSpy
 * ids: array of section ids (string[])
 * options: { rootMargin, threshold, debounceMs }
 * 回傳: [ activeId, handleNavClick ]
 */
export default function useScrollSpy(ids = [], options = {}) {
  const {
    rootMargin = "0px 0px -40% 0px",
    threshold = [0, 0.25, 0.5, 0.75],
    debounceMs = 120,
  } = options;

  const [activeId, setActiveId] = useState(ids[0] || null);
  const sectionsRef = useRef({});
  const ioRef = useRef(null);
  const debounceRef = useRef(null);
  const activeRef = useRef(activeId);

  useEffect(() => {
    // collect elements
    ids.forEach((id) => {
      sectionsRef.current[id] = document.getElementById(id);
    });

    const targets = Object.values(sectionsRef.current).filter(Boolean);
    if (targets.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      // fallback: pick first
      setActiveId(ids[0] || null);
      return;
    }

    ioRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        let candidate = null;

        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const top = visible[0];
          if (top.intersectionRatio >= 0.25) candidate = top.target.id;
        } else {
          // fallback: nearest to viewport top
          let nearest = null;
          let minTop = Infinity;
          entries.forEach((e) => {
            const top = Math.abs(e.boundingClientRect.top);
            if (top < minTop) {
              minTop = top;
              nearest = e.target.id;
            }
          });
          candidate = nearest;
        }

        if (!candidate) return;
        if (candidate === activeRef.current) return;

        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = window.setTimeout(() => {
          activeRef.current = candidate;
          setActiveId(candidate);
        }, debounceMs);
      },
      { root: null, rootMargin, threshold }
    );

    targets.forEach((el) => ioRef.current.observe(el));

    // init from hash
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionsRef.current[hash]) {
      setActiveId(hash);
      // 不自動滾動，讓使用者決定，若需要可呼叫 scrollIntoView
    }

    return () => {
      if (ioRef.current) ioRef.current.disconnect();
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ids.join("|")); // 只有 ids 變動才重跑

  // click handler for nav links
  const handleNavClick = (e, id) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    const el = sectionsRef.current[id] || document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window && window.history && typeof window.history.replaceState === "function") {
        window.history.replaceState(null, "", `#${id}`);
      }
      activeRef.current = id;
      setActiveId(id);
    }
    // remove focus to avoid :focus keeping styles
    if (e && e.currentTarget && typeof e.currentTarget.blur === "function") {
      e.currentTarget.blur();
    }
  };

  return [activeId, handleNavClick];
}
