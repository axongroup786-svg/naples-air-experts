"use client";

import { useEffect } from "react";

/** Adds `reveal-ready` to <html> once JS is alive, then reveals [data-reveal] nodes. */
export default function MotionInit() {
  useEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!("IntersectionObserver" in window) || nodes.length === 0) {
      root.classList.add("reveal-ready");
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const vh = window.innerHeight || 0;
    const pending: HTMLElement[] = [];

    // Anything already in (or above) the first screen is shown immediately so
    // the reveal class never causes a visible flash on load.
    nodes.forEach((n) => {
      const top = n.getBoundingClientRect().top;
      if (top < vh * 0.96) {
        n.classList.add("is-in");
      } else {
        pending.push(n);
      }
    });

    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );

    pending.forEach((n, i) => {
      const parent = n.parentElement;
      const sib = parent ? Array.from(parent.children).indexOf(n) : i;
      n.style.setProperty("--reveal-delay", `${Math.min(sib, 6) * 45}ms`);
      io.observe(n);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
