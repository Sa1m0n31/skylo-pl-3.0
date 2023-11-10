import React from 'react';
import Image from "next/image";
import arrowIcon from "@/app/_img/arrow-blue.svg";

interface MoreInfoBtnProps {
    link: string
}

const MoreInfoBtn = ({link}: MoreInfoBtnProps) => {
    return <a className={'offer__grid__item__link'}
              href={link}>
        Więcej informacji
        <Image src={arrowIcon}
               className={'img d-desktop'}
               width={5}
               height={5}
               alt={'wiecej-informacji'} />
    </a>
};

export default MoreInfoBtn;
