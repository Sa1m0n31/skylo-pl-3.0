import React from 'react';
import OfferPageHeader from "@/app/_components/OfferPageHeader";
import OfferPageContent from "@/app/_components/OfferPageContent";
import { webDevelopment } from "@/app/_content/offer";
import OfferPageSimplePoints from "@/app/_components/OfferPageSimplePoints";

const Page = () => {
    return <>
        <OfferPageHeader textBefore={webDevelopment.textBefore}
                         content={webDevelopment.headerText}>
            Wysokiej jakości usługi <span className={'blue'}>web development</span>,
            abyś mógł rozwijać swoją markę w sieci
        </OfferPageHeader>

        <OfferPageContent content={webDevelopment.content}
                          image={webDevelopment.image} />

        <OfferPageSimplePoints text={webDevelopment.pointsText}
                               points={webDevelopment.points}>
            Dlaczego <span className={'blue'}>strona internetowa</span> jest istotna?
        </OfferPageSimplePoints>
    </>
};

export default Page;
