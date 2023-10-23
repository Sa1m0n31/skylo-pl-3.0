import React from 'react';
import PortfolioPageHeader from "@/app/_components/PortfolioPageHeader";
import {draft4u} from "@/app/_content/projects";
import Image from "next/image";
import PortfolioPageFrames from "@/app/_components/PortfolioPageFrames";

const Page = () => {
    return <>
        <PortfolioPageHeader background={'#D3905A26'}
                             textBefore={draft4u.headerBefore}
                             header={draft4u.headerTitle}
                             content={draft4u.headerText} />

        <Image src={draft4u.mainImage}
               className={'portfolioMainImage w'}
               width={1316}
               height={789}
               alt={'draft4u'} />

        <PortfolioPageFrames about={draft4u.about}
                             stack={draft4u.stack} />

        <div className={'w portfolio'}>
            <h4 className={'portfolio__heading'}>
                Show yourself!
            </h4>
            <p className={'portfolio__p'}>
                Aplikacja wyposażona jest w system rejestracji zawodników, którzy mogą zakładać profile zarówno lokalnie, jak i za pomocą swoich kont na Facebooku i Google. Po pomyślnym przejściu procesu rejestracji użytkownicy mają możliwość uzupełnienia swojego profilu o niezbędne informacje (pozycja na boisku, wzrost, waga, zasięg w ataku, wyskok dosiężny i inne) oraz dodawania filmów, na których prezentują swoje umiejętności.
            </p>
            <p className={'portfolio__p'}>
                Po rejestracji użytkownik otrzymuje 14 dni darmowego okresu próbnego, po tym czasie konieczne jest opłacenie abonamentu, dlatego aplikacja wyposażona została w system płatności obsługujący przelewy internetowe, płatności PayPal oraz BLIK.
            </p>

            <Image src={'/portfolio/draft4u/Draft4U1.png'}
                   className={'portfolio__imgFull'}
                   width={1316}
                   height={650}
                   alt={'portal-pracy'} />

            <h4 className={'portfolio__heading'}>
                Rewolucja dla właścicieli klubów
            </h4>
            <p className={'portfolio__p'}>
                Portal Draft4U to prawdziwa rewolucja nie tylko dla zawodników dostępnych na siatkarskim rynku transferowym, ale także właścicieli klubów szukających nowych talentów do swojego zespołu. Stworzona przez nas aplikacja umożliwia nie tylko przeglądanie profili zawodników i ich siatkarskich popisów zamieszczonych na materiałach wideo, ale także porównywanie zawodników w specjalnej porównywarce, tworzenie wirtualnych składów oraz kontaktowanie się z siatkarzami bezpośrednio za pomocą czatu w aplikacji.
            </p>

            <div className={'flex'}>
                <Image src={'/portfolio/draft4u/Draft4U2.png'}
                       className={'portfolio__imgFull'}
                       width={650}
                       height={400}
                       alt={'portal-pracy'} />
                <Image src={'/portfolio/draft4u/Draft4U3.png'}
                       className={'portfolio__imgFull'}
                       width={650}
                       height={400}
                       alt={'portal-pracy'} />
            </div>

            <h4 className={'portfolio__heading'}>
                Najwyższa wydajność i najnowsze technologie
            </h4>
            <p className={'portfolio__p'}>
                Stworzenie tego typu projektu wymagało od nas doboru odpowiednich technologii, zapewniających maksymalną wydajność aplikacji. Frontend projektu wykonany został w bibliotece React, natomiast na backendzie rządziła inna technologia z ekosystemu javascript - NodeJS. Jeśli chodzi o system bazodanowy, wybór padł tu na relacyjną bazę danych PostgreSQL.
            </p>

            <h4 className={'portfolio__heading'}>
                Od pomysłu, przez wdrożenie, aż do dalszego rozwoju
            </h4>
            <p className={'portfolio__p'}>
                Prace nad aplikacją rozpoczęły się we wrześniu 2021r., natomiast pierwsi użytkownicy mogli zarejestrować się w serwisie 1 stycznia 2022r. Przez długi proces programowania, testowania i wdrażania aplikacji towarzyszyliśmy naszemu Klientowi, doradzając w często niełatwych kwestiach takich jak dobór najbardziej optymalnych rozwiązań pod kątem UX czy wybór odpowiedniego dla tego typu projektu pakietu hostingowego. Od stycznia 2022r. kontynuujemy udaną współpracę z naszym Klientem, pracując nad dalszym rozwojem oraz utrzymaniem aplikacji.
            </p>
        </div>
    </>
};

export default Page;
