import { useEffect, useRef } from "react";

function ScrollReveal({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className="scroll-reveal">
      {children}
    </div>
  );
}

export default ScrollReveal;