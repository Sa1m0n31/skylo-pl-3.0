"use client";

import React, {useState} from 'react';
import Image from "next/image";
import useActionOnEscapePress from "@/app/_hooks/useActionOnEscapePress";
import useActionOnOutsideClick from "@/app/_hooks/useActionOnOutsideClick";

interface SelectProps {
    label: string,
    options: string[],
    value: number,
    setValue: any
}

const Select = ({label, options, value, setValue}: SelectProps) => {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const closeOptions = () => {
        setOptionsVisible(false);
    }

    useActionOnEscapePress(closeOptions);
    useActionOnOutsideClick('.selectOptions', closeOptions);

    const toggleOptions = (e: any) => {
        e.preventDefault();

        setOptionsVisible(p => !p);
    }

    const selectOption = (i: number) => {
        setValue(i);
    }

    return <label className={'label'}>
        {label}
        <button className={'selectBtn'}
                onClick={toggleOptions}>
            {options[value]}

            <Image className={'selectBtn__img'}
                   width={5}
                   height={5}
                   src={'./form-arrow.svg'}
                   alt={'rozwiń'} />
        </button>

        {optionsVisible ? <span className={'selectOptions'}>
            {options.map((item, index) => {
                return <span className={'selectOptions__item'}
                             key={index}
                             onClick={() => { selectOption(index); }}>
                    {item}
                </span>
            })}
        </span> : ''}
    </label>
};

export default Select;
