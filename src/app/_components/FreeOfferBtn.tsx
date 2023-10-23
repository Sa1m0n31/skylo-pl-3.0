import React from 'react';
import Image from "next/image";
import arrowIcon from "@/app/_img/arrow-white.svg";
import Link from "next/link";

const FreeOfferBtn = () => {
    return <Link className={'hero__left__btn hero__left__btn--offer center'}
                 href={'#darmowa-wycena'}>
        Darmowa wycena projektu
        <Image className={'img img--heroLeftBtn'}
               width={3}
               height={5}
               src={arrowIcon}
               alt={'darmowa-wycena'} />
    </Link>
};

export default FreeOfferBtn;
