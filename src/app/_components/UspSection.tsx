import React from 'react';
import SectionHeader from "@/app/_components/SectionHeader";
import {usp} from "@/app/_content/homepage";
import UspItem from "@/app/_components/UspItem";

const UspSection = () => {
    return <section className={'section section--usp w'}>
        <SectionHeader textBefore={'Krótko o Skylo.pl'}
                       header={'Dlaczego warto nam zaufać?'} />

        <div className={'usp__grid'}>
            {usp.map((item, index) => {
                return <UspItem title={item.title}
                                text={item.text} />
            })}
        </div>
    </section>
};

export default UspSection;
