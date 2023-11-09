import React from 'react';
import SectionHeader from "@/app/_components/SectionHeader";
import OfferItem from "@/app/_components/OfferItem";
import { offerGridItems } from "@/app/_content/homepage";

const OfferSection = () => {
    return <div className={'section section--offer w'}>
        <span className={'anchor'}
              id={'oferta'}></span>

        <SectionHeader textBefore={'Software house - Oferta'}
                       header={'Jakie usługi wykonujemy?'} />

        <div className={'offer__grid'}>
            {offerGridItems.map((item, index) => {
                const { icon, title, text, link } = item;

                return <OfferItem icon={icon}
                                  title={title}
                                  text={text}
                                  link={`/oferta/${link}`} />
            })}
        </div>
    </div>
};

export default OfferSection;
