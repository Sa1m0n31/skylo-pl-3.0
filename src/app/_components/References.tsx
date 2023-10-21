import React from 'react';
import SectionHeader from "@/app/_components/SectionHeader";
import {references} from "@/app/_content/homepage";
import ReferencesItem from "@/app/_components/ReferencesItem";
import Image from "next/image";
import Link from "next/link";

const References = () => {
    return <div className={'section section--references w'}>
        <SectionHeader textBefore={'Opinie'}
                       header={'Dołącz do grona zadowolonych Klientów'} />

        <section className={'references__text'}>
            Przyłącz się do naszej rosnącej społeczności zadowolonych klientów.
            Doświadcz doskonałej obsługi i&nbsp;osiągaj świetne rezultaty.
        </section>

        <div className={'references__inner flex'}>
            {references.map((item, index) => {
                const { logo, title, content } = item;

                return <ReferencesItem logo={logo}
                                       title={title}
                                       content={content} />
            })}
        </div>

        <div className={'references__stars flex'}>
            <Image src={'/stars.svg'}
                   className={'img'}
                   width={86}
                   height={15}
                   alt={'gwiazdki'} />

            <span className={'references__stars__text'}>
                5.0 / 5.0
            </span>
        </div>

        <Link href={'https://www.google.com/search?q=agencja+interaktywna+skylo&sca_esv=575473620&sxsrf=AM9HkKlEGbObERp285lJqq1jF3l59aqkyA%3A1697909161821&source=hp&ei=qQk0ZdrHL6rjxc8Pme24uA8&iflsig=AO6bgOgAAAAAZTQXuXB3thYywX18dFcYW8JNTAeXwdSV&oq=agencja+&gs_lp=Egdnd3Mtd2l6IghhZ2VuY2phICoCCAAyBBAjGCcyDhAuGMcBGLEDGNEDGIAEMhEQLhiABBixAxiDARjHARjRAzIFEAAYgAQyBRAAGIAEMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMggQABiABBixAzIFEAAYgARI1ghQAFixBXAAeACQAQCYAdsBoAGYCaoBBTIuNC4yuAEDyAEA-AEBwgILEC4YgAQYsQMYgwHCAgsQABiKBRixAxiDAcICCxAAGIAEGLEDGIMBwgILEC4YigUYsQMYgwHCAggQLhiABBixA8ICBRAuGIAEwgILEC4YgAQYxwEY0QPCAg4QLhiABBixAxjHARjRA8ICBBAAGAM&sclient=gws-wiz#lrd=0x471cdb52a9ea6221:0x2c2fa9a86aa3f03,1,,,,'}
              className={'btn btn--references center'}
              rel={'noreferrer'}
              target={'_blank'}>
            Zobacz wszystkie opinie

            <Image src={'/google.svg'}
                   className={'img'}
                   width={32}
                   height={32}
                   alt={'google'} />
        </Link>
    </div>
};

export default References;
