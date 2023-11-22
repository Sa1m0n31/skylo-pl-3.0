"use client";

import React, {useEffect, useRef} from 'react';
import Image from "next/image";

interface ReferencesItemProps {
    logo: string,
    title: string,
    content: string[]
}

const ReferencesItem = ({logo, title, content}: ReferencesItemProps) => {
    const titleRef = useRef<HTMLDivElement>(null);

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
    }

    return <div className={'references__item animation'} ref={titleRef}>
        <div className={'references__item__header flex'}>
            <figure className={'references__item__header__logo center'}>
                <Image src={logo}
                       className={'img'}
                       width={70}
                       height={70}
                       alt={'logo'} />
            </figure>
            <h5 className={'references__item__header__title'}>
                {title}
            </h5>
        </div>

        <div className={'references__item__content'}>
            {content.map((item, index) => {
                return <p className={'references__item__content__p'}
                          key={index}>
                    {item}
                </p>
            })}
        </div>
    </div>
};

export default ReferencesItem;
