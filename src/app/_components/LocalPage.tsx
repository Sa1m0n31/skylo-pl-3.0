import React from 'react';
import OfferSection from "@/app/_components/OfferSection";
import PortfolioSection from "@/app/_components/PortfolioSection";

interface LocalPageProps {
    city: string;
    cityFrom: string;
}

const LocalPage = ({city, cityFrom}: LocalPageProps) => {
    return <>
        <div className={'main main--localPage w'}>
            <div className={'sectionHeader'}>
                <h1 className={'sectionHeader__header'}>
                    Strony internetowe {city}
                </h1>
            </div>

            <p className={'main__text'}>
                Działamy aktywnie na rynku lokalnym i oferujemy kompleksową usługę dla firm w miejscowości <b>{city}</b> i całym
                województwie kujawsko-pomorskim. Możemy umówić się na spotkanie, aby przybliżyć Twoje cele i oczekiwania,
                by później jak najlepiej dostosować dla Ciebie naszą ofertę. Oferujemy dojazd do klienta na terenie miasta
                <b> {city}</b> i w okolicach. Wybierając nasz software house stawiasz na lokalną firmę, która gwarantuje
                jakość i rzetelność. Pomożemy Ci zaistnieć w sieci.
            </p>
        </div>

        <OfferSection page={true} />

        <div className={'main main--localPage w'}>
            <div className={'sectionHeader'}>
                <h2 className={'sectionHeader__header'}>
                    Tworzenie stron www {city} - dlaczego my?
                </h2>
            </div>

            <p className={'main__text'}>
                Posiadamy ponad trzy lata doświadczenia w tworzeniu stron internetowych. Jesteśmy zespołem profesjonalistów,
                którzy doskonale znają specyfikę branży i pomogą Ci stworzyć stronę internetową na miarę Twoich oczekiwań.
                Dostosujemy naszą ofertę do Twoich unikalnych potrzeb i celów biznesowych. Razem stworzymy stronę,
                która w pełni odzwierciedli charakter Twojej działalności.
            </p>

            <div className={'sectionHeader sectionHeader--marginTop'}>
                <h2 className={'sectionHeader__header'}>
                    Strony internetowe {city} - rodzaje
                </h2>
            </div>

            <p className={'main__text'}>
                Dla naszych Klientów z {cityFrom} i okolic realizujemy różnego rodzaju projekty, do których zaliczyć
                możemy m.in:
                <ul>
                    <li>strony internetowe typu one-page</li>
                    <li>landing page</li>
                    <li>firmowe strony internetowe</li>
                    <li>sklepy internetowe</li>
                </ul>
            </p>

            <div className={'sectionHeader sectionHeader--marginTop'}>
                <h2 className={'sectionHeader__header'}>
                    Tworzenie stron internetowych {city} - wdrożenie i optymalizacja
                </h2>
            </div>

            <p className={'main__text'}>
                Stworzenie projektu graficznego i wdrożenie strony internetowej to główny, ale nie końcowy efekt naszych prac.
                Po stworzeniu Twojej strony zoptymalizujemy ją pod kątem SEO (pozycjonowanie w wyszukiwarce Google), wydajności
                (szybkość ładowania), dostępności (dostępność dla osób z niepełnosprawnościami) oraz najlepszych praktyk
                programistycznych (odpowiednie rozmiary i formaty obrazów, struktura kodu). Współpraca z nami to gwarancja
                otrzymania projektu, który w stu procentach spełni Twoje oczekiwania. Przygotujemy Ci platformę, z którą będziesz
                mógł podbijać internet i swoją branżę.
            </p>
        </div>

        <PortfolioSection page={false} />
    </>
};

export default LocalPage;
