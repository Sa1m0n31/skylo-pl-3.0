import React from 'react';

interface UspItemProps {
    title: string,
    text: string
}

const UspItem = ({title, text}: UspItemProps) => {
    return <div className={'usp__grid__item'}>
        <h5 className={'usp__grid__item__title'}>
            {title}
        </h5>
        <p className={'usp__grid__item__text'}>
            {text}
        </p>
    </div>
};

export default UspItem;
