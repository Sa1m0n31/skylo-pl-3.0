import React from 'react';
import mainImage from '../_img/main.png';
import arrowIcon from '../_img/arrow-white.svg';
import Image from "next/image";

const HeroSection = () => {
    return <main className={'hero w flex'}>
        <div className={'hero__left'}>
            <span className={'hero__left__aboveHeader'}>
                Software House Toruń i cała Polska
            </span>
            <h1 className={'hero__left__header'}>
                Tworzymy aplikacje, które
                napędzą Twój biznes i&nbsp;pomogą osiągnąć sukces
            </h1>
            <p className={'hero__left__text'}>
                Oferujemy dedykowane rozwiązania dostosowane do potrzeb oraz budżetu Klienta.
                Niezależnie od branży, w której działasz, stworzymy dla Ciebie platformę,
                która pomoże Ci osiągnąć Twoje cele.
            </p>
            <a className={'hero__left__btn center'}
               href={'#darmowa-wycena'}>
                Darmowa wycena projektu
                <Image className={'img img--heroLeftBtn'}
                       width={3}
                       height={5}
                       src={arrowIcon}
                       alt={'darmowa-wycena'} />
            </a>
        </div>
        <figure className={'hero__right'}>
            <Image className={'img img--heroRight'}
                   src={mainImage}
                   width={569}
                   height={548}
                   alt={'software-house-torun'} />
        </figure>
    </main>
};

export default HeroSection;
