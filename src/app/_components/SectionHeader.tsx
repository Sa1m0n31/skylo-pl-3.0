import React from 'react';

interface SectionHeaderProps {
    textBefore: string,
    header: string
}

const SectionHeader = ({textBefore, header}: SectionHeaderProps) => {
    return <div className={'sectionHeader'}>
        <span className={'sectionHeader__before'}>
            {textBefore}
        </span>
        <h3 className={'sectionHeader__header'}>
            {header}
        </h3>
    </div>
};

export default SectionHeader;
