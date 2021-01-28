import { useEffect, useState } from "react";

function useObserver(options) {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);
  // const ref = useRef(null);
  // const element = ref.current;

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, visible];
}

export default useObserver;
