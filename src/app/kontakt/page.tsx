"use client";

import React, {useEffect, useRef, useState} from 'react';
import SectionHeader from "@/app/_components/SectionHeader";
import Input from "@/app/_components/Input";
import Textarea from "@/app/_components/Textarea";
import Select from "@/app/_components/Select";
import { typesOfServices, budgetList } from "@/app/_content/contact";
import Loading from "@/app/loading";

const Page = () => {
    const submitBtn = useRef<(HTMLButtonElement | null)>(null);

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [typeOfService, setTypeOfService] = useState(0);
    const [budget, setBudget] = useState(0);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setError(false);
    }, [name, email]);

    useEffect(() => {
        if(loading) {

        }
        else {

        }
    }, [loading]);

    const resetForm = () => {
        setName('');
        setCompany('');
        setEmail('');
        setPhoneNumber('');
        setTypeOfService(0);
        setBudget(0);
        setMessage('');
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(name && email) {
            setLoading(true);

            // TODO: send form

            setTimeout(() => {
                setLoading(false);
                setSuccess(true);
                resetForm();
            }, 2000);
        }
        else {
            setError(true);
        }
    }

    return <div className={'contact w'}>
        <SectionHeader textBefore={'Formularz kontaktowy'}
                       header={'Co możemy dla Ciebie zrobić?'} />

        <form className={'contactForm'}>
            <Input label={'Twoje imię'}
                   required={true}
                   placeholder={'Twoje imię'}
                   value={name}
                   setValue={(e: any) => { setName(e.target.value); }} />
            <Input label={'Nazwa firmy'}
                   required={false}
                   placeholder={'Nazwa firmy'}
                   value={company}
                   setValue={(e: any) => { setCompany(e.target.value); }} />
            <Input label={'Twój e-mail'}
                   required={true}
                   placeholder={'Twój e-mail'}
                   value={email}
                   setValue={(e: any) => { setEmail(e.target.value); }} />
            <Input label={'Numer telefonu'}
                   required={false}
                   placeholder={'Numer telefonu'}
                   value={phoneNumber}
                   setValue={(e: any) => { setPhoneNumber(e.target.value); }} />

            <Select label={'Co Cię interesuję?'}
                    options={typesOfServices}
                    value={typeOfService}
                    setValue={setTypeOfService} />
            <Select label={'Szacowany budżet'}
                    options={budgetList}
                    value={budget}
                    setValue={setBudget} />

            <Textarea label={'Twoja wiadomość'}
                      placeholder={'Twoja wiadomość'}
                      value={message}
                      setValue={(e: any) => { setMessage(e.target.value); }} />

            {!loading ? <button className={'btn btn--submitContactForm'}
                              ref={submitBtn}
                              onClick={(e) => { handleSubmit(e); }}>
                Wyślij formularz
            </button> : <Loading />}

            {error ? <span className={'error red error--contactForm'}>
                Uzupełnij wymagane pola
            </span> : ''}

            {success ? <span className={'success success--contactForm'}>
                Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 24 godzin.
            </span> : ''}
        </form>
    </div>
};

export default Page;
