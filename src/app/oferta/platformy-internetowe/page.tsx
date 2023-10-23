import React from 'react';
import OfferPageHeader from "@/app/_components/OfferPageHeader";
import OfferPageContent from "@/app/_components/OfferPageContent";
import { platforms } from "@/app/_content/offer";
import OfferPagePoints from "@/app/_components/OfferPagePoints";

const Page = () => {
    return <>
        <OfferPageHeader textBefore={platforms.textBefore}
                         content={platforms.headerText}>
            Generuj ruch i poszerzaj zasięgi dzięki <span className={'blue'}>platformom internetowym</span>
        </OfferPageHeader>

        <OfferPageContent content={platforms.content}
                          image={platforms.image} />

        <OfferPagePoints text={platforms.pointsText}
                         points={platforms.points}>
            Skuteczne <span className={'blue'}>platformy internetowe</span> generujące zasięgi
        </OfferPagePoints>
    </>
};

export default Page;
