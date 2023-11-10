"use client";

import React, {useState} from 'react';
import Image from "next/image";

const SimpleForm = () => {
    const [value, setValue] = useState('');

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return <section className={'section section--simpleForm'}>
        <span className={'anchor'}
              id={'darmowa-wycena'}></span>

        <div className={'w center'}>
            <h4 className={'simpleForm__header'}>
                Umów się na bezpłatną konsultację i&nbsp;pozwól nam zrozumieć Twoje potrzeby
            </h4>
            <p className={'simpleForm__text'}>
                Przedstaw nam swoje cele i pomysły, a my zaproponujemy Ci najkorzystniejsze rozwiązanie, dostosowane także do Twojego budżetu.
            </p>

            <form className={'simpleForm__form flex'}>
                <label className={'simpleForm__form__label'}>
                    <input className={'input input--simpleForm'}
                           placeholder={'Twój adres e-mail'}
                           onChange={handleChange}
                           value={value} />
                </label>
                <button className={'btn btn--simpleFormSubmit'}
                        onClick={handleSubmit}>
                    <span className={'d-desktop'}>Wyślij</span>
                    <Image src={'/send.svg'}
                           className={'d-mobile'}
                           width={10}
                           height={10}
                           alt={'wyślij'} />
                </button>
            </form>
        </div>
    </section>
};

export default SimpleForm;
