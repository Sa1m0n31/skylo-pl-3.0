"use client";

import React, {useRef} from 'react';
import logo from '../_img/skylo-logo.png';
import Image from "next/image";
import Link from "next/link";
import { offerSubmenu } from "@/app/_content/homepage";

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
        link: '/oferta'
    },
    {
        label: 'Realizacje',
        link: '/portfolio'
    }
]

const SiteHeader = ({menu}: SiteHeaderProps) => {
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuTopRef = useRef<HTMLDivElement>(null);
    const mobileMenuContentRef = useRef<HTMLDivElement>(null);
    const submenuRef = useRef<HTMLDivElement>(null);

    const mobileMenuChildren = [mobileMenuTopRef, mobileMenuContentRef];

    const closeMobileMenu = () => {
        mobileMenuChildren.forEach((item) => {
            if(item.current) {
                item.current.style.opacity = '0';
            }
        });

        setTimeout(() => {
            if(mobileMenuRef.current) {
                mobileMenuRef.current.style.transform = 'scaleY(0)';
            }
        }, 300);
    }

    const openMobileMenu = () => {
        if(mobileMenuRef.current) {
            mobileMenuRef.current.style.transform = 'scaleY(1)';

            setTimeout(() => {
                mobileMenuChildren.forEach((item) => {
                    if(item.current) {
                        item.current.style.opacity = '1';
                    }
                });
            }, 300);
        }
    }

    return <header className={menu === 0 ? 'siteHeader siteHeader--home' : 'siteHeader'}>
        <div className={'mobileMenu d-mobile'} ref={mobileMenuRef}>
            <div className={'mobileMenu__top flex'} ref={mobileMenuTopRef}>
                <Image src={'/logo-mobile.svg'}
                       className={'mobileMenu__top__logo'}
                       width={40}
                       height={28}
                       alt={'logo'} />

                <button className={'btn btn--closeMobileMenu'}
                        onClick={closeMobileMenu}>
                    <Image src={'/close.svg'}
                           width={12}
                           height={12}
                           alt={'zamknij'} />
                </button>
            </div>

            <div className={'mobileMenu__content'} ref={mobileMenuContentRef}>
                <div className={'mobileMenu__content__item'}>
                    <Link className={'mobileMenu__content__item__link'}
                          onClick={closeMobileMenu}
                          href={'/'}>
                        Home
                    </Link>
                </div>
                <div className={'mobileMenu__content__item'}>
                    <Link className={'mobileMenu__content__item__btn flex'}
                          href={'/oferta'}>
                        Oferta
                    </Link>

                    <div className={'mobileMenu__content__item__submenu'} ref={submenuRef}>

                        {offerSubmenu.map((item, index) => {
                            return <Link className={'mobileMenu__content__item__submenu__item'}
                                         onClick={() => {
                                             closeMobileMenu();
                                         }}
                                         key={index}
                                         href={`/oferta/${item.link}`}>
                                {item.title}
                            </Link>
                        })}
                    </div>
                </div>
                <div className={'mobileMenu__content__item'}>
                    <Link className={'mobileMenu__content__item__link'}
                          onClick={closeMobileMenu}
                          href={'/portfolio'}>
                        Realizacje
                    </Link>
                </div>
            </div>
        </div>

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
                       src={'/logo-mobile.svg'}
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

            <button className={'btn btn--mobileMenu d-mobile'}
                    onClick={openMobileMenu}>
                <Image src={'/menu.svg'}
                       width={30}
                       height={12}
                       alt={'menu'} />
            </button>
        </div>
    </header>
};

export default SiteHeader;
