import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { offerSubmenu } from "@/app/_content/homepage";

const Footer = () => {
    return <footer className={'footer flex w'}>
        <div className={'footer__col footer__col--1'}>
            <Link href={'/'}>
                <Image src={'/skylo-logo.png'}
                       width={206}
                       height={39}
                       alt={'software-house-torun'} />
            </Link>

            <p className={'footer__col__text'}>
                Skylo.pl to polski software house z Torunia, specjalizujący się
                w tworzeniu platform internetowych i aplikacji mobilnych.
            </p>
        </div>

        <div className={'footer__colGroup flex'}>
            <div className={'footer__colGroup__item'}>
                <h5 className={'footer__colGroup__item__header'}>
                    Nawigacja strony
                </h5>
                <Link href={'/'}
                      className={'footer__colGroup__item__link'}>
                    Strona główna
                </Link>
                <Link href={'/oferta'}
                      className={'footer__colGroup__item__link'}>
                    Oferta
                </Link>
                <Link href={'/portfolio'}
                      className={'footer__colGroup__item__link'}>
                    Portfolio
                </Link>
                <Link href={'/kontakt'}
                      className={'footer__colGroup__item__link'}>
                    Kontakt
                </Link>
                <Link href={'/polityka-prywatnosci'}
                      className={'footer__colGroup__item__link'}>
                    Polityka prywatności
                </Link>
            </div>

            <div className={'footer__colGroup__item'}>
                <h5 className={'footer__colGroup__item__header'}>
                    Usługi
                </h5>

                {offerSubmenu.map((item, index) => {
                    return <Link href={`/oferta/${item.link}`}
                                 className={'footer__colGroup__item__link'}>
                        {item.title}
                    </Link>
                })}
            </div>

            <div className={'footer__colGroup__item'}>
                <h5 className={'footer__colGroup__item__header'}>
                    Kontakt i dane firmy
                </h5>

                <div className={'footer__colGroup__item__text'}>
                    <span>Skylo.pl - Software House</span>
                    <span>
                        NIP: <span className={'grey'}>5030084949</span>
                    </span>
                    <span>
                        REGON: <span className={'grey'}>387829738</span>
                    </span>
                    <Link className={'footer__colGroup__item__text__marginTop'}
                          href={'tel:+48697099402'}>
                        tel. 697 099 402
                    </Link>
                    <Link href={'tel:+48600179174'}>
                        tel. 600 179 174
                    </Link>

                    <Link className={'footer__colGroup__item__text__marginTop'}
                          href={'mailto:kontakt@skylo.pl'}>
                        kontakt@skylo.pl
                    </Link>

                    <div className={'bottomBar__social flex d-mobile-flex'}>
                        <Link href={'https://www.facebook.com/skylopl'} rel={'noreferrer'} target={'_blank'}>
                            <Image src={'/facebook.svg'}
                                   className={'img'}
                                   width={20}
                                   height={20}
                                   alt={'facebook'} />
                        </Link>
                        <Link href={'https://www.instagram.com/skylopl/'} rel={'noreferrer'} target={'_blank'}>
                            <Image src={'/instagram.svg'}
                                   className={'img'}
                                   width={20}
                                   height={20}
                                   alt={'instagram'} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
};

export default Footer;
