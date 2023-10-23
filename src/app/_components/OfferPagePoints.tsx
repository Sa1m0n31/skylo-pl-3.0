import React, {ReactNode} from 'react';
import OfferPointItem from "@/app/_components/OfferPointItem";

interface Point {
    icon: string,
    header: string,
    text: string
}

interface OfferPagePointsProps {
    children: ReactNode,
    text: string,
    points: Point[]
}

const OfferPagePoints = ({children, text, points}: OfferPagePointsProps) => {
    return <section className={'offerPagePoints flex'}>
        <h3 className={'offerPagePoints__header'}>
            {children}
        </h3>
        <p className={'offerPagePoints__text'}>
            {text}
        </p>

        <div className={'offerPagePoints__points w flex'}>
            {points.map((item, index) => {
                const { icon, header, text } = item;

                return <OfferPointItem icon={icon}
                                       header={header}
                                       text={text} />
            })}
        </div>
    </section>
};

export default OfferPagePoints;
