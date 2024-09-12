import * as React from "react";

const useInView = <T extends HTMLElement>(threshold = 0.5) => {
  const [isInView, setIsInView] = React.useState<boolean>(false);
  const elementRef = React.useRef<T | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return { isInView, elementRef };
};

export default useInView;
