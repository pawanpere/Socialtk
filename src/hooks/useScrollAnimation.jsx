import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using IntersectionObserver.
 * Returns [ref, isVisible] - attach ref to the element, isVisible toggles once when element enters viewport.
 */
export function useScrollAnimation(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element); // Only trigger once
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
                ...options,
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
}

/**
 * ScrollReveal wrapper component.
 * Wraps children with a div that fades in and slides up when scrolled into view.
 */
export function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
    const [ref, isVisible] = useScrollAnimation();

    const directionStyles = {
        up: { transform: isVisible ? 'translateY(0)' : 'translateY(40px)' },
        down: { transform: isVisible ? 'translateY(0)' : 'translateY(-40px)' },
        left: { transform: isVisible ? 'translateX(0)' : 'translateX(-40px)' },
        right: { transform: isVisible ? 'translateX(0)' : 'translateX(40px)' },
        none: { transform: 'none' },
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                ...directionStyles[direction],
                transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}
