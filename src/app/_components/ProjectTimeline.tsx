"use client";

import React, {useEffect, useRef} from 'react';
import SectionHeaderCenter from "@/app/_components/SectionHeaderCenter";
import Image from "next/image";
import arrowIcon from "@/app/_img/arrow-white.svg";
import {project} from "@/app/_content/homepage";

const ProjectTimeline = () => {
    const projectItemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const lineRef = useRef(null);

    const updateProjectItemRefs = (i: number, ref: HTMLDivElement | null) => {
        projectItemRefs.current[i] = ref;
    }

    useEffect(() => {
        const handleScroll = () => {
            if(lineRef.current) {
                const element: any = lineRef.current;
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    animate();
                }
            }
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const animate = () => {
        // @ts-ignore
        lineRef.current.style.transform = 'scaleX(1)';

        for(let i=0; i<=3; i++) {
            setTimeout(() => {
                // @ts-ignore
                projectItemRefs.current[i].style.opacity = '1';
            }, (i+1) * 800);
        }
    }

    return <div className={'section section--projectTimeline'}>
        <SectionHeaderCenter textBefore={'Etapy współpracy'}
                             header={'Twój projekt gotowy nawet w 14 dni!*'} />

        <p className={'section__text'}>
            Prosty i przejrzysty proces tworzenia Twojego wymarzonego projektu. Na każdym etapie współpracy
            konsultujemy zmiany oraz działania, dzięki czemu masz nad wszystkim kontrolę.
        </p>

        <p className={'section__disclaimer'}>
            * - na przykładzie strony www w formie wizytówki firmowej
        </p>

        <a className={'hero__left__btn hero__left__btn--projectTimeline center'}
           href={'#darmowa-wycena'}>
            Dowiedz się więcej
            <Image className={'img img--heroLeftBtn d-desktop'}
                   width={3}
                   height={5}
                   src={arrowIcon}
                   alt={'darmowa-wycena'} />
        </a>

        <div className={'project'}>
            <span className={'project__line'} ref={lineRef}></span>

            <div className={'w'}>
                {project.map((item, index) => {
                    const { title, text } = item;

                    return <div className={'project__item'}
                                ref={(ref) => { updateProjectItemRefs(index, ref); }}
                                key={index}>
                        <h5 className={'project__item__header'}>
                            {title}
                        </h5>

                        <span className={'project__item__point'}>

                    </span>

                        <p className={'project__item__text'}>
                            {text}
                        </p>
                    </div>
                })}
            </div>
        </div>
    </div>
};

export default ProjectTimeline;
