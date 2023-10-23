import React from 'react';
import OfferPageHeader from "@/app/_components/OfferPageHeader";
import OfferPageContent from "@/app/_components/OfferPageContent";
import { mobileApps } from "@/app/_content/offer";
import OfferPagePoints from "@/app/_components/OfferPagePoints";

const Page = () => {
    return <>
        <OfferPageHeader textBefore={mobileApps.textBefore}
                         content={mobileApps.headerText}>
            Przyciągnij użytkowników za pomocą nowoczesnych <span className={'blue'}>aplikacji mobilnych</span>
        </OfferPageHeader>

        <OfferPageContent content={mobileApps.content}
                          image={mobileApps.image} />

        <OfferPagePoints text={mobileApps.pointsText}
                         points={mobileApps.points}>
            Szybkie i niezawodne <span className={'blue'}>aplikacje mobilne</span> dla Twojego biznesu
        </OfferPagePoints>
    </>
};

export default Page;
