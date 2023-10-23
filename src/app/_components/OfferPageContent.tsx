import React from 'react';
import Image from "next/image";

interface Content {
    header: string,
    text: string
}

interface OfferPageContentProps {
    content: Content[],
    image: string
}

const OfferPageContent = ({content, image}: OfferPageContentProps) => {
    return <main className={'offerPageContent flex w'}>
        <Image src={image}
               className={'offerPageContent__image'}
               width={631}
               height={548}
               alt={'skylo-oferta'} />

        <div className={'offerPageContent__content'}>
            {content.map((item, index) => {
                return <div key={index}
                            className={'offerPageContent__content__block'}>
                    <h2 className={'offerPageContent__content__block__header'}>
                        {item.header}
                    </h2>
                    <p className={'offerPageContent__content__block__text'}>
                        {item.text}
                    </p>
                </div>
            })}
        </div>
    </main>
};

export default OfferPageContent;
