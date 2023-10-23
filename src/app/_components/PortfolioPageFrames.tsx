import React from 'react';

interface PortfolioPageFramesProps {
    about: string,
    stack: string[]
}

const PortfolioPageFrames = ({about, stack}: PortfolioPageFramesProps) => {
    return <section className={'portfolioFrames w flex'}>
        <div className={'portfolioFrames__left'}>
            <h2 className={'portfolioFrames__header'}>
                O projekcie
            </h2>
            <p className={'portfolioFrames__left__text'}>
                {about}
            </p>
        </div>
        <div className={'portfolioFrames__right'}>
            <h3 className={'portfolioFrames__header'}>
                Użyte technologie
            </h3>

            <div className={'portfolioFrames__right__stack'}>
                {stack.map((item, index) => {
                    return <div className={'portfolioFrames__right__stack__item'}
                                 key={index}>
                        {item}
                    </div>
                })}
            </div>
        </div>
    </section>
};

export default PortfolioPageFrames;
