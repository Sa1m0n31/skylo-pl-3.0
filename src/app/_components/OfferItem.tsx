import React from 'react';
import Image, {ImageProps} from "next/image";
import MoreInfoBtn from "@/app/_components/MoreInfoBtn";

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

        <MoreInfoBtn link={link} />
    </div>
};

export default OfferItem;
