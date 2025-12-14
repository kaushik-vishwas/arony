
import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import leafgrn from "../assets/leaf-grn.png";
import leafwht from "../assets/NewChanges/whiteLeave.png";


export const useInViewTrigger = (options = {}) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.2, ...options }
        );

        const el = ref.current;
        if (el) observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [options]);

    return [ref, isInView];
};

export const useCountUp = (end, start = 0, duration = 1) => {
    const [value, setValue] = useState(start);

    useEffect(() => {
        const controls = animate(start, end, {
            duration,
            onUpdate(val) {
                setValue(Math.floor(val));
            },
        });

        return () => controls.stop();
    }, [end, start, duration]);

    return value;
};


export const GreenButton = ({ label, className = "", onClick }) => {
    return (
        <button onClick={onClick} className={`text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base w-fit rounded-full flex items-center gap-2 mt-2 ${className}`}>
            <img src={leafwht} alt="Leaf Icon" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
            {label}
        </button>
    );
};

export const Badge = ({ label, className = "" }) => {
    return (
        <div className={`flex items-center w-full mb-2 ${className}`}>
            <div
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white hover:border-green-500 transition-colors"
            >
                <img src={leafgrn} alt={`${label} icon`} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />

                <span className="text-black text-sm sm:text-base font-medium">
                    {label}
                </span>
            </div>
        </div>
    );
};

export const Heading = ({ children, className = "" }) => {
    return (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-snug md:leading-tight lg:leading-tight font-semibold ${className}`}>
            {children}
        </h2>
    );
};

export const Description = ({ children, className = "" }) => {
    return (
        <p className={`text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed ${className}`}>
            {children}
        </p>
    );
};

export const Section = ({ children, className = "" }) => {
    return (
        <section className={`py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </section>
    );
};

export const SectionCol = ({ children, className = "" }) => {
    return (
        <section className={`flex flex-col gap-4 sm:gap-6 md:gap-8 w-full ${className}`}>
            {children}
        </section>
    );
};