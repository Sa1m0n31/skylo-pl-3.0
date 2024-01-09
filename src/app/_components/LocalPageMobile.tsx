import React from 'react';
import OfferSection from "@/app/_components/OfferSection";
import PortfolioSection from "@/app/_components/PortfolioSection";

interface LocalPageMobileProps {
    city: string;
    cityFrom: string;
}

const LocalPageMobile = ({city, cityFrom}: LocalPageMobileProps) => {
    return <>
        <div className={'main main--localPage w'}>
            <div className={'sectionHeader'}>
                <h1 className={'sectionHeader__header'}>
                    Aplikacje mobilne {city}
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
                    Tworzenie aplikacji mobilnych {city} - dlaczego my?
                </h2>
            </div>

            <p className={'main__text'}>
                Posiadamy ponad trzy lata doświadczenia w tworzeniu aplikacji mobilnych. Jesteśmy zespołem profesjonalistów,
                którzy doskonale znają specyfikę branży i pomogą Ci stworzyć aplikację mobilną na miarę Twoich oczekiwań.
                Dostosujemy naszą ofertę do Twoich unikalnych potrzeb i celów biznesowych. Razem stworzymy stronę,
                która w pełni odzwierciedli charakter Twojej działalności.
            </p>

            <div className={'sectionHeader sectionHeader--marginTop'}>
                <h2 className={'sectionHeader__header'}>
                    Aplikacje mobilne {city} - rodzaje
                </h2>
            </div>

            <p className={'main__text'}>
                Dla naszych Klientów z {cityFrom} i okolic realizujemy różnego rodzaju projekty, do których zaliczyć
                możemy m.in:
                <ul>
                    <li>aplikacje mobilne dla firm</li>
                    <li>aplikacje mobilne jako model biznesowy</li>
                    <li>aplikacje mobilne wspomagające biznes</li>
                </ul>
            </p>

            <div className={'sectionHeader sectionHeader--marginTop'}>
                <h2 className={'sectionHeader__header'}>
                    Aplikacje mobilne {city} - najbardziej wydajne technologie
                </h2>
            </div>

            <p className={'main__text'}>
                Jeszcze niedawno dominującym sposobem tworzenia aplikacji mobilnych było tworzenie osobnych wersji aplikacji na systemy iOS oraz Android. Wymagało to tworzenia dwóch wersji kodu w dwóch różnych językach programowania, co generowało spore koszty, jakie musiał ponosić zamawiający aplikację. W Skylo Software House proponujemy równie wydajne, a przy tym bardziej ekonomiczne i przyszłościowe rozwiązanie, jakim jest aplikacja wieloplatformowa z użyciem technologii React Native. Od strony użytkownika nie różni się ona niczym, a dla twórcy aplikacji pozwala zaoszczędzić czas i pieniądze.
            </p>
        </div>

        <PortfolioSection page={false} />
    </>
};

export default LocalPageMobile;
