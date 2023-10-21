"use client";

import React, {useEffect, useRef} from 'react';
import {portfolio} from "@/app/_content/homepage";
import MoreInfoBtn from "@/app/_components/MoreInfoBtn";
import Image from "next/image";

interface PortfolioSectionItemProps {
    textBefore: string,
    title: string,
    text: string,
    image1: string,
    image2: string,
    image3: string,
    link: string
}

const PortfolioSectionItem = ({textBefore, title, text, image1, image2, image3, link}:
                                  PortfolioSectionItemProps) => {
    const itemRef = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if(itemRef.current) {
                const element: any = itemRef.current;
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
        // @ts-ignore
        img2Ref.current.style.transform = 'translateY(0)';

        setTimeout(() => {
            // @ts-ignore
            img3Ref.current.style.transform = 'translateY(0)';
        }, 400);
    }

    return <div className={'portfolio__item flex'}
                ref={itemRef}>
        <div className={'portfolio__item__left'}>
            <span className={'portfolio__item__left__textBefore'}>
                {textBefore}
            </span>
            <h5 className={'portfolio__item__left__title'}>
                {title}
            </h5>
            <p className={'portfolio__item__left__text'}>
                {text}
            </p>

            <MoreInfoBtn link={link} />
        </div>

        <div className={'portfolio__item__right'}>
            <figure className={'portfolio__item__right__img portfolio__item__right__img--1'}>
                <Image src={image1}
                       className={'img'}
                       width={427}
                       height={252}
                       alt={'portfolio'} />
            </figure>
            <figure className={'portfolio__item__right__img portfolio__item__right__img--2'} ref={img2Ref}>
                <Image src={image2}
                       className={'img'}
                       width={454}
                       height={255}
                       alt={'portfolio'} />
            </figure>
            <figure className={'portfolio__item__right__img portfolio__item__right__img--3'} ref={img3Ref}>
                <Image src={image3}
                       className={'img'}
                       width={173}
                       height={356}
                       alt={'portfolio'} />
            </figure>
        </div>
    </div>
};

export default PortfolioSectionItem;
