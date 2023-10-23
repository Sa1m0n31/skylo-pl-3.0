import React from 'react';
import OfferPageHeader from "@/app/_components/OfferPageHeader";
import OfferPageContent from "@/app/_components/OfferPageContent";
import { eCommerce } from "@/app/_content/offer";
import OfferPageSimplePoints from "@/app/_components/OfferPageSimplePoints";

const Page = () => {
    return <>
        <OfferPageHeader textBefore={eCommerce.textBefore}
                         content={eCommerce.headerText}>
            Skuteczne <span className={'blue'}>platformy eCommerce</span>, które pozwolą Ci zwiększyć sprzedaż
        </OfferPageHeader>

        <OfferPageContent content={eCommerce.content}
                          image={eCommerce.image} />

        <OfferPageSimplePoints text={eCommerce.pointsText}
                               points={eCommerce.points}>
            Dlaczego warto <span className={'blue'}>sprzedawać online</span>?
        </OfferPageSimplePoints>
    </>
};

export default Page;
