import React from 'react';
import Image, {ImageProps} from "next/image";
import arrowIcon from '../_img/arrow-blue.svg';

interface OfferItemProps {
    icon: ImageProps
    title: string,
    text: string,
    link: string
}

const OfferItem = ({icon, title, text, link}: OfferItemProps) => {
    return <div className={'offer__grid__item'}>
        <Image {...icon} />
        <h4 className={'offer__grid__item__title'}>
            {title}
        </h4>
        <p className={'offer__grid__item__text'}>
            {text}
        </p>
        <a className={'offer__grid__item__link'}
           href={link}>
            Więcej informacji
            <Image src={arrowIcon}
                   className={'img'}
                   width={5}
                   height={5}
                   alt={'wiecej-informacji'} />
        </a>
    </div>
};

export default OfferItem;
