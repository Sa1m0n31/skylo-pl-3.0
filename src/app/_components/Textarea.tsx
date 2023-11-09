import React from 'react';

interface TextareaProps {
    label: string,
    placeholder: string,
    value: string,
    setValue: any
}

const Textarea = ({label, placeholder, value, setValue}: TextareaProps) => {
    return <label className={'label label--textarea'}>
        {label}
        <textarea className={'input input--contactForm input--textarea'}
                  value={value}
                  onChange={setValue}
                  placeholder={placeholder} />
    </label>
};

export default Textarea;
