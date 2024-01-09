import React from 'react';

interface SectionHeaderProps {
    textBefore: string,
    header: string
}

const SectionHeaderH1 = ({textBefore, header}: SectionHeaderProps) => {
    return <div className={'sectionHeader'}>
        <span className={'sectionHeader__before'}>
            {textBefore}
        </span>
        <h1 className={'sectionHeader__header'}>
            {header}
        </h1>
    </div>
};

export default SectionHeaderH1;
