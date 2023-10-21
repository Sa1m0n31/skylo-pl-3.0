import React from 'react';
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
    return <div className={'portfolio__item flex'}>
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
            <figure className={'portfolio__item__right__img portfolio__item__right__img--2'}>
                <Image src={image2}
                       className={'img'}
                       width={454}
                       height={255}
                       alt={'portfolio'} />
            </figure>
            <figure className={'portfolio__item__right__img portfolio__item__right__img--3'}>
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
