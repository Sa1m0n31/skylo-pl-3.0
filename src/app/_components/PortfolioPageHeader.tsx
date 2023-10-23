"use client";

import React, {ReactNode} from 'react';
import FreeOfferBtn from "@/app/_components/FreeOfferBtn";

interface PortfolioPageHeaderProps {
    textBefore: string,
    header: string,
    content: string,
    background: string
}

const PortfolioPageHeader = ({textBefore, header, content, background} : PortfolioPageHeaderProps) => {
    return <section className={'offerPageHeader offerPageHeader--portfolio center'} style={{
        background: background
    }}>
        <span className={'offerPageHeader__textBefore'}>
            {textBefore}
        </span>
        <h1 className={'offerPageHeader__header'}>
            {header}
        </h1>
        <p className={'offerPageHeader__text'}>
            {content}
        </p>
    </section>
};

export default PortfolioPageHeader;
