"use client";

import React, {ReactNode} from 'react';
import FreeOfferBtn from "@/app/_components/FreeOfferBtn";

interface OfferPageHeaderProps {
    textBefore: string,
    children: ReactNode,
    content: string,
}

const OfferPageHeader = ({textBefore, children, content} : OfferPageHeaderProps) => {
    return <section className={'offerPageHeader center'}>
        <span className={'offerPageHeader__textBefore'}>
            {textBefore}
        </span>
        <h1 className={'offerPageHeader__header'}>
            {children}
        </h1>
        <p className={'offerPageHeader__text'}>
            {content}
        </p>

        <FreeOfferBtn />
    </section>
};

export default OfferPageHeader;
