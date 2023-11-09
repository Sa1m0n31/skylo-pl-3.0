import React from 'react';
import logo from '../_img/skylo-logo.png';
import Image from "next/image";
import Link from "next/link";

interface SiteHeaderProps {
    menu: number
}

const menuItems = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'Oferta',
        link: '/#oferta'
    },
    {
        label: 'Realizacje',
        link: '/#realizacje'
    }
]

const SiteHeader = ({menu}: SiteHeaderProps) => {
    return <header className={'siteHeader'}>
        <div className={'w'}>
            <Link href="/" className={'siteHeader__logo'}>
                <Image className={'img d-over-1200'}
                       width={206}
                       height={38}
                       src={logo}
                       alt={'skylo-logo'} />
                <Image className={'img d-under-1200'}
                       width={40}
                       height={28}
                       src={'/logo-mobile.png'}
                       alt={'skylo-logo'} />
            </Link>

            <div className={'siteHeader__menu flex d-desktop'}>
                {menuItems.map((item, index) => {
                    return <Link className={menu === index ? 'siteHeader__menu__item siteHeader__menu__item--current' : 'siteHeader__menu__item'}
                                 key={index}
                                 href={item.link}>
                        {item.label}
                    </Link>
                })}
            </div>

            <Link className={'siteHeader__btn center d-desktop'}
               href={'/kontakt'}>
                Bezpłatna konsultacja
            </Link>

            <button className={'btn btn--mobileMenu d-mobile'}>
                <Image src={'/menu.svg'}
                       width={30}
                       height={12}
                       alt={'menu'} />
            </button>
        </div>
    </header>
};

export default SiteHeader;
