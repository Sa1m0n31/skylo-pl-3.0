import React from 'react';
import PortfolioPageHeader from "@/app/_components/PortfolioPageHeader";
import {brunchbox} from "@/app/_content/projects";
import Image from "next/image";
import PortfolioPageFrames from "@/app/_components/PortfolioPageFrames";

const Page = () => {
    return <>
        <PortfolioPageHeader background={'#DFDFDF40'}
                             textBefore={brunchbox.headerBefore}
                             header={brunchbox.headerTitle}
                             content={brunchbox.headerText} />

        <Image src={brunchbox.mainImage}
               className={'portfolioMainImage w'}
               width={1316}
               height={650}
               alt={'brunchbox'} />

        <PortfolioPageFrames about={brunchbox.about}
                             stack={brunchbox.stack} />

        <div className={'w portfolio'}>
            <h4 className={'portfolio__heading'}>
                Zamawiaj online
            </h4>
            <p className={'portfolio__p'}>
                BrunchBox to platforma do zamawiania cateringu, w której skupiamy się na przekąskach typu finger food. Nasz Klient specjalizuje się w dostarczaniu wyjątkowych dań na różnego rodzaju wydarzenia, włączając w to spotkania, eventy oraz imprezy. Platforma, stworzona z myślą o wygodzie użytkowników, umożliwia błyskawiczne zamawianie cateringu online, uwzględniając wszelkie istotne zmienne, takie jak adres dostawy, data, czy preferowana godzina dostarczenia. Dzięki temu każde wydarzenie staje się smakowitym przeżyciem bez zbędnego stresu organizacyjnego.
            </p>

            <h4 className={'portfolio__heading'}>
                Dedykowane opcje w sklepie i panelu
            </h4>
            <p className={'portfolio__p'}>
                <span>Cena dostawy w zależności od odległości</span>
                Opcja ta pozwala na dostosowanie stawki za dostawę cateringu w oparciu o odległość dostawy. Im dalsza strefa dostawy, tym finalna cena za zamówienie będzie wyższa.
            </p>
            <p className={'portfolio__p'}>
                <span>Wybór dnia i godziny dostarczenia zamówienia</span>
                Użytkownik ma możliwość wyboru konkretnego dnia i godziny, kiedy zamówienie ma być dostarczone. Administrator, dzięki naszemu autorskiemu CMS, ma wpływ na dostępność wyboru poszczególnych terminów.
            </p>
            <p className={'portfolio__p'}>
                <span>Customowa edycja produktu</span>
                Rozbudowany panel edycji produktów dostępnych w sprzedaży pozwala na zaawansowane zarządzanie dedykowanymi opcjami takimi jak wybór alergenów, rozmiarów, rodzajów (a także przypisywania różnych cen w zależności od wyboru). Istnieje także możliwość dodawania osobnych opisów i zdjęć dla konkretnej opcji produktu.
            </p>

            <div className={'flex'}>
                <Image src={'/portfolio/brunchbox/brunchbox1.png'}
                       className={'portfolio__imgFull'}
                       width={650}
                       height={400}
                       alt={'portal-pracy'} />
                <Image src={'/portfolio/brunchbox/brunchbox2.png'}
                       className={'portfolio__imgFull'}
                       width={650}
                       height={400}
                       alt={'portal-pracy'} />
            </div>

            <h4 className={'portfolio__heading'}>
                Cele Klienta to nasza misja
            </h4>
            <p className={'portfolio__p'}>
                BrunchBox zaangażował nas, byśmy pomogli mu osiągnąć swoje ambitne cele biznesowe związane z dostawą cateringu w Warszawie. Nasza misja polegała na zmaterializowaniu wstępnego pomysłu klienta. Bazując na jego precyzyjnych wytycznych, stworzyliśmy nie tylko wyjątkowy design, ale także dopracowaliśmy całą warstwę interfejsu użytkownika (UX), a także skutecznie wdrożyliśmy platformę na docelową domenę.
            </p>
            <p className={'portfolio__p'}>
                Klientowi zależało również na systemie do obsługi zamówień i zarządzania treścią strony internetowej. W odpowiedzi na to stworzyliśmy własny system CMS od podstaw, który zawiera dedykowane funkcje związane z obsługą zamówień, dostawą oraz łatwą edycją produktów specjalnie dostosowaną do potrzeb BrunchBox.
            </p>

            <Image src={'/portfolio/brunchbox/brunchbox3.png'}
                   className={'portfolio__imgFull'}
                   width={1316}
                   height={650}
                   alt={'portal-pracy'} />
        </div>
    </>
};

export default Page;
