import React from 'react';
import Image from "next/image";

interface ReferencesItemProps {
    logo: string,
    title: string,
    content: string[]
}

const ReferencesItem = ({logo, title, content}: ReferencesItemProps) => {
    return <div className={'references__item'}>
        <div className={'references__item__header flex'}>
            <figure className={'references__item__header__logo center'}>
                <Image src={logo}
                       className={'img'}
                       width={70}
                       height={70}
                       alt={'logo'} />
            </figure>
            <h5 className={'references__item__header__title'}>
                {title}
            </h5>
        </div>

        <div className={'references__item__content'}>
            {content.map((item, index) => {
                return <p className={'references__item__content__p'}
                          key={index}>
                    {item}
                </p>
            })}
        </div>
    </div>
};

export default ReferencesItem;
