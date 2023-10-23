import React from 'react';
import PortfolioPageHeader from "@/app/_components/PortfolioPageHeader";
import {jobPortal} from "@/app/_content/projects";
import Image from "next/image";
import PortfolioPageFrames from "@/app/_components/PortfolioPageFrames";

const Page = () => {
    return <>
        <PortfolioPageHeader background={'#F8FAFD'}
                             textBefore={jobPortal.headerBefore}
                             header={jobPortal.headerTitle}
                             content={jobPortal.headerText} />

        <Image src={jobPortal.mainImage}
               className={'portfolioMainImage w'}
               width={1316}
               height={498}
               alt={'job-portal'} />

        <PortfolioPageFrames about={jobPortal.about}
                             stack={jobPortal.stack} />

        <div className={'w'}>
            <h4 className={'portfolio__heading'}>
                Cele portalu
            </h4>
            <p className={'portfolio__p'}>
                Portal łączy w sobie wszystko, czego użytkownik potrzebuje w procesie poszukiwania pracy lub idealnego kandydata. Jooob.eu chciało stworzyć środowisko, które przekracza granice konwencjonalnych platform rekrutacyjnych. Oferty pracy i kandydaci są zgromadzeni w jednym miejscu, umożliwiając szybkie i skuteczne dopasowanie wymagań stanowiska z umiejętnościami oraz kompetencjami potencjalnego pracownika.
            </p>
            <p className={'portfolio__p'}>
                Dla naszego Klienta liczyła się przede wszystkim prostota. Celem było stworzenie jak najbardziej przejrzystego procesu rekrutacyjnego. Stworzyliśmy narzędzia, które umożliwiają kandydatom łatwe i klarowne przedstawienie swoich umiejętności i kompetencji. Również pracodawcy mają tu swoje miejsce do prezentacji. Dzięki intuicyjnemu interfejsowi, firmy mogą w prosty sposób opisać swoją ofertę pracy oraz pokazać swoją kulturę i wartości.
            </p>

            <h4 className={'portfolio__heading'}>
                Strefa pracownika i pracodawcy
            </h4>
            <p className={'portfolio__p'}>
                W celu zapewnienia użytkownikom płynnej nawigacji i wysoką użyteczność, platforma została podzielona na dwie główne strefy dedykowane zarówno pracownikom, jak i pracodawcom. Ta struktura pozwala na skoncentrowanie się na istotnych aspektach w zależności od typu konta użytkownika.
            </p>
            <p className={'portfolio__p'}>
                Logując się do strefy pracownika, osoby poszukujące pracy (kandydaci) mają dostęp do aktywnych ofert pracy, mogą swobodnie składać swoje aplikacje oraz przeglądać inspirujące profile pracodawców. Ta część portalu skupia się na dostarczaniu niezawodnych narzędzi, które wspierają kandydatów w ich poszukiwaniach zawodowych. Natomiast w obszarze dedykowanym pracodawcom, ich priorytetem jest dostęp do zaawansowanych opcji. Tu pracodawcy mogą łatwo dodawać nowe oferty pracy, w pełni przeglądać i analizować zgłoszenia kandydatów oraz efektywnie zarządzać procesem rekrutacji.
            </p>

            <h4 className={'portfolio__heading'}>
                Spersonalizowane powiadomienia o ofertach pracy
            </h4>
            <p className={'portfolio__p'}>
                Nie tylko pracodawcy, ale także kandydaci mają możliwość korzystania z dedykowanych funkcji. Stworzyliśmy opcję, dzięki której kandydaci mogą otrzymywać spersonalizowane powiadomienia o aktywnych ofertach pracy. Są one dostosowane do informacji zawartych w profilu kandydata, takich jak branża, kwalifikacje, umiejętności i inne istotne dane.
            </p>
            <p className={'portfolio__p'}>
                Ta funkcja daje kandydatom szansę bycia na bieżąco z najnowszymi ofertami pracy, bez potrzeby ręcznego przeszukiwania dziesiątek ogłoszeń. Dzięki temu, pracownik może poświęcić mniej czasu na poszukiwania i więcej na skoncentrowanie się na aplikowaniu do ofert, które naprawdę odpowiadają ich profilowi. To krok w kierunku jeszcze bardziej efektywnego i ukierunkowanego procesu rekrutacyjnego - na tym bardzo zależało naszemu Klientowi.
            </p>

            <Image src={'/portfolio/job-portal/jobportal2.png'}
                   className={'portfolio__imgFull'}
                   width={1316}
                   height={650}
                   alt={'portal-pracy'} />

            <h4 className={'portfolio__heading'}>
                Wyszukiwania pracownika na podstawie filtrów
            </h4>
            <p className={'portfolio__p'}>
                Priorytetem Klienta było zapewnienie maksymalnej dostępności, dlatego stworzyliśmy funkcję wyszukiwania kandydatów, opartą na precyzyjnych filtrach. Ta opcja umożliwia pracodawcom dokładne określenie preferencji, takich jak branża, lokalizacja, poziom kwalifikacji czy oczekiwana pensja. To narzędzie zapewnia natychmiastowy dostęp do kandydatów, spełniających ściśle określone kryteria.
            </p>
            <p className={'portfolio__p'}>
                Dzięki tej opcji, pracodawcy mogą oszczędzić cenny czas, skracając proces wyszukiwania odpowiednich pracowników do minimum.
            </p>

            <Image src={'/portfolio/job-portal/jobportal3.png'}
                   className={'portfolio__imgFull'}
                   width={1316}
                   height={650}
                   alt={'portal-pracy'} />

            <Image src={'/portfolio/job-portal/jobportal4.png'}
                   className={'portfolio__imgFull'}
                   width={1316}
                   height={650}
                   alt={'portal-pracy'} />
        </div>
    </>
};

export default Page;
