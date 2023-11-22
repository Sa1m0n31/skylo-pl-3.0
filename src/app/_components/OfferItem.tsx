"use client";

import React, {useEffect, useRef} from 'react';
import Image, {ImageProps} from "next/image";
import arrowIcon from "@/app/_img/arrow-blue.svg";

interface OfferItemProps {
    icon: ImageProps
    title: string,
    text: string,
    link: string
}

const OfferItem = ({icon, title, text, link}: OfferItemProps) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const linkRef = useRef<HTMLAnchorElement>(null);

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

        if(linkRef.current) {
            linkRef.current.style.opacity = '1';
            linkRef.current.style.transform = 'translateY(0)';
        }
    }

    return <div className={'offer__grid__item'}>
        <Image {...icon} />
        <h4 className={'offer__grid__item__title animation'} ref={titleRef}>
            {title}
        </h4>
        <p className={'offer__grid__item__text animation'} ref={textRef}>
            {text}
        </p>

        <a className={'offer__grid__item__link animation'}
           ref={linkRef}
           href={link}>
            Więcej informacji
            <Image src={arrowIcon}
                   className={'img d-desktop'}
                   width={5}
                   height={5}
                   alt={'wiecej-informacji'} />
        </a>
    </div>
};

export default OfferItem;
