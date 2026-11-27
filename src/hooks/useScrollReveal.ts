import { useEffect, useRef } from "react";

export default function useScrollReveal(
  items: readonly unknown[],
  selector: string,
  pendingClass: string
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window) || !containerRef.current) {
      return;
    }

    const elements = containerRef.current.querySelectorAll<HTMLElement>(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(pendingClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.classList.add(pendingClass);
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove(pendingClass));
    };
  }, [items, selector, pendingClass]);

  return containerRef;
}
