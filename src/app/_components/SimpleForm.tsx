"use client";

import React, {useState} from 'react';
import Image from "next/image";
import axios from 'axios';

const SimpleForm = () => {
    const [value, setValue] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(value) {
            const form = new FormData();
            form.append('email', value);

            axios.post(`https://skylo.pl/send-email/`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res: any) => {
                    console.log(res);
                    setValue('');
                    setSuccess(true);
                })
                .catch((e: any) => {
                    console.log(e);
                });
        }
    }

    return <section className={'section section--simpleForm'}>
        <span className={'anchor'}
              id={'darmowa-wycena'}></span>

        <div className={'w center'}>
            <h4 className={'simpleForm__header'}>
                Umów się na bezpłatną konsultację i&nbsp;pozwól nam zrozumieć Twoje potrzeby
            </h4>
            <p className={'simpleForm__text'}>
                Przedstaw nam swoje cele i pomysły, a my zaproponujemy Ci najkorzystniejsze rozwiązanie,
                dostosowane także do Twojego budżetu.
            </p>

            {!success ? <form className={'simpleForm__form flex'}>
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

                <p className={'privacyPolicyCheck privacyPolicyCheck--simpleForm'}>
                    Wysyłając formularz potwierdzasz akceptację naszej <a target={"_blank"}
                                                                          rel={'noreferrer'}
                                                                          href={'/polityka-prywatnosci'}>Polityki prywatności</a>
                </p>
            </form> : <span className={'success success--simpleForm'}>
                Dziękujemy za wiadomość! Skontaktujemy się najszybciej, jak to możliwe.
            </span>}
        </div>
    </section>
};

export default SimpleForm;
