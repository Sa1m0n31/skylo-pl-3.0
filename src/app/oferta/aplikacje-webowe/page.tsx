import React from 'react';
import OfferPageHeader from "@/app/_components/OfferPageHeader";
import OfferPageContent from "@/app/_components/OfferPageContent";
import { webApps } from "@/app/_content/offer";
import OfferPagePoints from "@/app/_components/OfferPagePoints";

const Page = () => {
    return <>
        <OfferPageHeader textBefore={webApps.textBefore}
                         content={webApps.headerText}>
            Innowacyjne <span className={'blue'}>aplikacje webowe</span> na miarę Twoich potrzeb
        </OfferPageHeader>

        <OfferPageContent content={webApps.content}
                          image={webApps.image} />

        <OfferPagePoints text={webApps.pointsText}
                         points={webApps.points}>
            Dostarczamy <span className={'blue'}>jakościowe aplikacje webowe</span>
        </OfferPagePoints>
    </>
};

export default Page;
