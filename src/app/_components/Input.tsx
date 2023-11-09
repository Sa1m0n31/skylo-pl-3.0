import React from 'react';

interface InputProps {
    label: string,
    required: boolean,
    placeholder: string,
    value: string,
    setValue: any
}

const Input = ({label, required, placeholder, value, setValue}: InputProps) => {
    return <label className={'label'}>
        {label} {required ? <span className={'red'}>*</span> : ''}
        <input className={'input input--contactForm'}
               value={value}
               onChange={setValue}
               placeholder={placeholder} />
    </label>
};

export default Input;
