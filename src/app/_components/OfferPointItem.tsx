import React from 'react';
import Image from "next/image";

interface OfferPointItemProps {
    icon: string,
    header: string,
    text: string
}

const OfferPointItem = ({icon, header, text}: OfferPointItemProps) => {
    return <div className={'offerPagePoints__item flex'}>
        <Image src={icon}
               className={'img'}
               width={35}
               height={35}
               alt={header} />

        <h4 className={'offerPagePoints__item__header'}>
            {header}
        </h4>
        <p className={'offerPagePoints__item__text'}>
            {text}
        </p>
    </div>
};

export default OfferPointItem;
