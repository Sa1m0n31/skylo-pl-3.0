import React from 'react';
import Image from "next/image";

const stack = [
    'mysql.png', 'react.png', 'adobe.png', 'expressjs.png',
    'nest.png', 'nextjs.png', 'node-js.png', 'postgresql.png'
]

const TechStack = () => {
    return <div className={'techStack w'}>
        <div className={'techStack__track'}>
            {stack.map((item, index) => {
                return <figure className={'techStack__item center'}
                               id={item.replace('.png', '')}
                               key={index}>
                    <Image src={`/stack/${item}`}
                           className={'img'}
                           width={222}
                           height={45}
                           alt={item} />
                </figure>
            })}
        </div>
    </div>
};

export default TechStack;
