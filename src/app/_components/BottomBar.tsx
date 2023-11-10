import React from 'react';
import Link from "next/link";
import Image from "next/image";

const BottomBar = () => {
    return <aside className={'bottomBar w flex'}>
        <h6 className={'bottomBar__header'}>
            &copy; {new Date().getFullYear()} Skylo.pl - Software House
        </h6>

        <div className={'bottomBar__social flex d-desktop'}>
            <Link href={'https://www.facebook.com/skylopl'} rel={'noreferrer'} target={'_blank'}>
                <Image src={'/facebook.svg'}
                       className={'img'}
                       width={20}
                       height={20}
                       alt={'facebook'} />
            </Link>
            <Link href={'https://www.instagram.com/skylopl/'} rel={'noreferrer'} target={'_blank'}>
                <Image src={'/instagram.svg'}
                       className={'img'}
                       width={20}
                       height={20}
                       alt={'instagram'} />
            </Link>
        </div>
    </aside>
};

export default BottomBar;
