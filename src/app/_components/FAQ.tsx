"use client";

import React, {useRef, useState} from 'react';
import SectionHeader from "@/app/_components/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import {faq} from "@/app/_content/homepage";

const Faq = () => {
    const [currentAnswer, setCurrentAnswer] = useState(-1);

    const plusRefs = useRef<(HTMLDivElement | null)[]>([]);
    const minusRefs = useRef<(HTMLDivElement | null)[]>([]);
    const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

    const updatePlusRefs = (index: number, ref: HTMLDivElement | null) => {
        plusRefs.current[index] = ref;
    }

    const updateMinusRefs = (index: number, ref: HTMLDivElement | null) => {
        minusRefs.current[index] = ref;
    }

    const updateAnswerRefs = (index: number, ref: HTMLDivElement | null) => {
        answerRefs.current[index] = ref;
    }

    const toggleQuestion = (i: number) => {
        if(currentAnswer === i) {
            hideQuestion(i);
        }
        else {
            showQuestion(i);
        }
    }

    const showQuestion = (i: number) => {
        if(currentAnswer >= 0) {
            hideQuestion(currentAnswer);
        }

        setTimeout(() => {
            // @ts-ignore
            plusRefs.current[i].style.opacity = '0';
            // @ts-ignore
            minusRefs.current[i].style.opacity = '1';

            // @ts-ignore
            answerRefs.current[i].style.transform = 'scaleY(1)';
            // @ts-ignore
            answerRefs.current[i].style.height = 'auto';
            // @ts-ignore
            answerRefs.current[i].style.padding = window.innerWidth > 768 ? '15px 0' : '10px 0';
            setTimeout(() => {
                // @ts-ignore
                answerRefs.current[i].style.opacity = '1';
            }, 1);
        }, 1);

        setCurrentAnswer(i);
    }

    const hideQuestion = (i: number) => {
        setCurrentAnswer(-1);

        // @ts-ignore
        plusRefs.current[i].style.opacity = '1';
        // @ts-ignore
        minusRefs.current[i].style.opacity = '0';

        // @ts-ignore
        // answerRefs.current[i].style.opacity = '0';
        setTimeout(() => {
            // @ts-ignore
            answerRefs.current[i].style.transform = 'scaleY(0)';
            // @ts-ignore
            answerRefs.current[i].style.height = '0';
            // @ts-ignore
            answerRefs.current[i].style.padding = '0';
        }, 1);
    }

    return <section className={'section section--faq flex w'}>
        <div className={'faq__left'}>
            <SectionHeader textBefore={'FAQ - Najczęściej zadawane pytania'}
                           header={'Masz pytania? Pozwól nam na nie odpowiedzieć!'} />

            <Link className={'btn btn--faq flex d-desktop'}
                  href={'/kontakt'}>
                Chcesz wiedzieć więcej? Skontaktuj się!

                <Image src={'/arrow-blue.svg'}
                       className={'img'}
                       width={5}
                       height={7}
                       alt={'wiecej'} />
            </Link>
        </div>

        <div className={'faq__right'}>
            {faq.map((item, index) => {
               const { question, answer } = item;

               return <div className={'faq__item'}
                           key={index}>
                   <button className={'faq__item__header flex'}
                           onClick={() => { toggleQuestion(index); }}>
                       <h4 className={'faq__item__header__title'}>
                           {question}
                       </h4>

                        <span className={'faq__item__header__icon'}>
                            <Image src={'/plus.svg'}
                                   ref={(ref) => { updatePlusRefs(index, ref); }}
                                   className={'img img--plus'}
                                   width={15}
                                   height={15}
                                   alt={'plus'} />
                            <Image src={'/minus.svg'}
                                   ref={(ref) => { updateMinusRefs(index, ref); }}
                                   className={'img img--minus'}
                                   width={15}
                                   height={15}
                                   alt={'minus'} />
                        </span>
                   </button>

                   <div className={'faq__item__content'}
                        dangerouslySetInnerHTML={{
                            __html: answer
                        }}
                        ref={(ref) => { updateAnswerRefs(index, ref); }}>

                   </div>
               </div>
            })}
        </div>
    </section>
};

export default Faq;
