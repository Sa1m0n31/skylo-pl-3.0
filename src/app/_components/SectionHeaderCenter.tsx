import React from 'react';

interface SectionHeaderCenterProps {
    textBefore: string,
    header: string
}

const SectionHeaderCenter = ({textBefore, header}: SectionHeaderCenterProps) => {
    return <div className={'sectionHeader sectionHeader--center'}>
        <span className={'sectionHeader__before'}>
            {textBefore}
        </span>
        <h3 className={'sectionHeader__header'}>
            {header}
        </h3>
    </div>
};

export default SectionHeaderCenter;
