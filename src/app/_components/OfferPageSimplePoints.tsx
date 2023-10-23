import React, {ReactNode} from 'react';
import OfferPointItem from "@/app/_components/OfferPointItem";

interface OfferPagePointsProps {
    children: ReactNode,
    text: string,
    points: string[]
}

const OfferPageSimplePoints = ({children, text, points}: OfferPagePointsProps) => {
    return <section className={'offerPagePoints offerPagePoints--simple w flex'}>
        <h3 className={'offerPagePoints__header'}>
            {children}
        </h3>
        <p className={'offerPagePoints__text'}>
            {text}
        </p>

        <div className={'offerPagePoints__simplePoints'}>
            {points.map((item, index) => {
                return <p key={index}
                          className={'offerPagePoints__simplePoints__item'}>
                    {item}
                </p>
            })}
        </div>
    </section>
};

export default OfferPageSimplePoints;
