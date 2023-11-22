"use client";

import React, {useEffect, useRef} from 'react';

interface UspItemProps {
    title: string,
    text: string
}

const UspItem = ({title, text}: UspItemProps) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if(titleRef.current) {
                const element: any = titleRef.current;
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    animate();
                }
            }
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const animate = () => {
        if(titleRef.current) {
            titleRef.current.style.opacity = '1';
            titleRef.current.style.transform = 'translateY(0)';
        }

        if(textRef.current) {
            textRef.current.style.opacity = '1';
            textRef.current.style.transform = 'translateY(0)';
        }
    }

    return <div className={'usp__grid__item'}>
        <h5 className={'usp__grid__item__title animation'} ref={titleRef}>
            {title}
        </h5>
        <p className={'usp__grid__item__text animation'} ref={textRef}>
            {text}
        </p>
    </div>
};

export default UspItem;
