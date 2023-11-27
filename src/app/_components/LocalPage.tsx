import React from 'react';
import SectionHeader from "@/app/_components/SectionHeader";

interface LocalPageProps {
    city: string;
}

const LocalPage = ({city}: LocalPageProps) => {
    return <div className={'main main--localPage w'}>
        <SectionHeader textBefore={'Nasza oferta'}
                       header={`Tworzenie stron i sklepów internetowych ${city}`} />

        <p className={'main__text'}>
            Działamy aktywnie na rynku lokalnym i oferujemy kompleksową usługę dla firm w miejscowości {city} i całym województwie kujawsko-pomorskim. Możemy umówić się na spotkanie, aby przybliżyć Twoje cele i oczekiwania, by później jak najlepiej dostosować dla Ciebie naszą ofertę. Oferujemy dojazd do klienta na terenie miasta Toruń i w okolicach. Wybierając agencję interaktywną Skylo.pl stawiasz na lokalną firmę, która gwarantuje jakość i rzetelność. Pomożemy Ci zaistnieć w sieci.
        </p>
    </div>
};

export default LocalPage;
