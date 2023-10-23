import React from 'react';
import OfferPageHeader from "@/app/_components/OfferPageHeader";
import OfferPageContent from "@/app/_components/OfferPageContent";
import { ux } from "@/app/_content/offer";
import OfferPagePoints from "@/app/_components/OfferPagePoints";

const Page = () => {
    return <>
        <OfferPageHeader textBefore={ux.textBefore}
                         content={ux.headerText}>
            Intuicyjne <span className={'blue'}>interfejsy użytkownika</span>, które podnoszą
            jakość Twojej platformy
        </OfferPageHeader>

        <OfferPageContent content={ux.content}
                          image={ux.image} />

        <OfferPagePoints text={ux.pointsText}
                         points={ux.points}>
            Co cechuje nasze <span className={'blue'}>intuicyjne interfejsy</span>
        </OfferPagePoints>
    </>
};

export default Page;
