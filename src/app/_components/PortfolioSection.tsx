import React from 'react';
import SectionHeader from "@/app/_components/SectionHeader";
import {portfolio} from "@/app/_content/homepage";
import PortfolioSectionItem from "@/app/_components/PortfolioSectionItem";

interface PortfolioSectionProps {
    page: undefined | boolean;
}

const PortfolioSection = ({page}: PortfolioSectionProps) => {
    return <div className={page ? 'section section--portfolio section--page w' : 'section section--portfolio w'}>
        <span className={'anchor'}
              id={'realizacje'}></span>

        <SectionHeader textBefore={'Showcase'}
                       header={'Zobacz jak wykorzystujemy swoje umiejętności w projektach dla Klientów'} />

        {portfolio.map((item, index) => {
            const { textBefore, title, text, image1, image2, image3, link } = item;

            return <PortfolioSectionItem textBefore={textBefore}
                                         title={title}
                                         text={text}
                                         image1={image1}
                                         image2={image2}
                                         image3={image3}
                                         link={link} />
        })}
    </div>
};

export default PortfolioSection;
