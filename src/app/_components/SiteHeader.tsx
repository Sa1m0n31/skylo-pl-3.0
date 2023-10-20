import React from 'react';
import logo from '../_img/skylo-logo.png';
import Image from "next/image";

const SiteHeader = () => {
    return <header className={'siteHeader w'}>
        <a href="/" className={'siteHeader__logo'}>
            <Image className={'img'}
                   width={206}
                   height={38}
                   src={logo}
                   alt={'skylo-logo'} />
        </a>

        <div className={'siteHeader__menu flex'}>
            <a className={'siteHeader__menu__item'}
               href={'/'}>
                Home
            </a>
            <a className={'siteHeader__menu__item'}
               href={'/'}>
                Oferta
            </a>
            <a className={'siteHeader__menu__item'}
               href={'/'}>
                Realizacje
            </a>
        </div>

        <a className={'siteHeader__btn center'}
           href={'#konsultacja'}>
            Bezpłatna konsultacja
        </a>
    </header>
};

export default SiteHeader;
