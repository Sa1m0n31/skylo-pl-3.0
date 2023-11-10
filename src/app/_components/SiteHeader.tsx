"use client";

import React, {useRef, useState} from 'react';
import logo from '../_img/skylo-logo.png';
import Image from "next/image";
import Link from "next/link";

interface SiteHeaderProps {
    menu: number
}

const submenu = [
    {
        title: 'Dedykowane aplikacje webowe',
        link: '/aplikacje-webowe'
    },
    {
        title: 'Aplikacje mobilne',
        link: '/aplikacje-mobilne'
    },
    {
        title: 'Platformy i serwisy internetowe',
        link: '/platformy-internetowe'
    },
    {
        title: 'Platformy e-commerce',
        link: '/e-commerce'
    },
    {
        title: 'UI/UX Design',
        link: '/ui-ux-design'
    },
    {
        title: 'Web development',
        link: '/web-development'
    }
]

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
    const [submenuVisible, setSubmenuVisible] = useState(false);

    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuTopRef = useRef<HTMLDivElement>(null);
    const mobileMenuContentRef = useRef<HTMLDivElement>(null);
    const submenuRef = useRef<HTMLDivElement>(null);
    const submenuArrowRef = useRef<HTMLImageElement>(null);

    const mobileMenuChildren = [mobileMenuTopRef, mobileMenuContentRef];

    const closeMobileMenu = () => {
        mobileMenuChildren.forEach((item) => {
            if(item.current) {
                item.current.style.opacity = '0';
            }
        });

        setTimeout(() => {
            if(mobileMenuRef.current) {
                mobileMenuRef.current.style.transform = 'scaleX(0)';
            }
        }, 300);
    }

    const openMobileMenu = () => {
        if(mobileMenuRef.current) {
            mobileMenuRef.current.style.transform = 'scaleX(1)';

            setTimeout(() => {
                mobileMenuChildren.forEach((item) => {
                    if(item.current) {
                        item.current.style.opacity = '1';
                    }
                });
            }, 300);
        }
    }

    const toggleSubmenu = () => {
        if(submenuRef.current && submenuArrowRef.current) {
            if(submenuVisible) {
                submenuRef.current.style.opacity = '0';
                submenuArrowRef.current.style.transform = 'rotateX(0)';

                setTimeout(() => {
                    if(submenuRef.current) {
                        submenuRef.current.style.height = '0';
                    }
                }, 300);
            }
            else {
                submenuRef.current.style.height = 'auto';
                submenuArrowRef.current.style.transform = 'rotateX(180deg)';

                setTimeout(() => {
                    if(submenuRef.current) {
                        submenuRef.current.style.opacity = '1';
                    }
                }, 300);
            }

            setSubmenuVisible(p => !p);
        }
    }

    return <header className={'siteHeader'}>
        <div className={'mobileMenu d-mobile'} ref={mobileMenuRef}>
            <div className={'mobileMenu__top flex'} ref={mobileMenuTopRef}>
                <Image src={'/logo-mobile.png'}
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
                          href={'/'}>
                        Home
                    </Link>
                </div>
                <div className={'mobileMenu__content__item'}>
                    <button className={'mobileMenu__content__item__btn flex'}
                            onClick={toggleSubmenu}>
                        Oferta

                        <Image src={'/arrow-down.svg'}
                               ref={submenuArrowRef}
                               width={8}
                               height={5}
                               alt={'zwiń/rozwiń'} />
                    </button>

                    <div className={'mobileMenu__content__item__submenu'} ref={submenuRef}>

                        {submenu.map((item, index) => {
                            return <Link className={'mobileMenu__content__item__submenu__item'}
                                         key={index}
                                         href={item.link}>
                                {item.title}
                            </Link>
                        })}
                    </div>
                </div>
                <div className={'mobileMenu__content__item'}>
                    <Link className={'mobileMenu__content__item__link'}
                          href={'/#realizacje'}>
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
