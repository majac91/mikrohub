import { useState, useEffect } from "react";

export function useOnIntersection(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const options = { treshold: 0 };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(ref.current);

        const currentRef = ref.current;
        return () => observer.unobserve(currentRef);
    }, [ref]);

    return isIntersecting;
}
