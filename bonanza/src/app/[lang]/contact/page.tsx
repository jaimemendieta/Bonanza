'use client'
import React, {FormEvent, useRef, useState} from 'react';
import {dictionary} from "@/content";

interface ModalProps {
    show: boolean;
    message: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, message, onClose }) => {
    if (!show) return null;

    return (

            <div className="modal">
                <div className="modal-content">
                    <p>{message}</p>
                    <div className="menu-icon-wrapper" onClick={onClose}>
                        <div className="line-horizontal _03"></div>
                        <div className="line-horizontal _04"></div>
                    </div>
                </div>
            </div>
    )
}

const Page = ( { params }: { params: { lang: string } } ) => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLSelectElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        e.target.setCustomValidity("");
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            if (emailRef.current) {
                emailRef.current.setCustomValidity(dictionary[params.lang]?.alertMessage1);
                emailRef.current.reportValidity();
            } else {
                alert(dictionary[params.lang]?.alertMessage1);
            }
            setIsLoading(false);
            return;
        }

        if (!formData.name.trim()) {
            if (nameRef.current) {
                nameRef.current.setCustomValidity(dictionary[params.lang]?.alertMessage2);
                nameRef.current.reportValidity();
            } else {
                alert(dictionary[params.lang]?.alertMessage2);
            }
            setIsLoading(false);
            return;
        }

        if (!formData.subject) {
            if (subjectRef.current) {
                subjectRef.current.setCustomValidity(dictionary[params.lang]?.alertMessage3);
                subjectRef.current.reportValidity();
            } else {
                alert(dictionary[params.lang]?.alertMessage3);
            }
            setIsLoading(false);
            return;
        }

        if (!formData.message.trim()) {
            if (messageRef.current) {
                messageRef.current.setCustomValidity(dictionary[params.lang]?.alertMessage4);
                messageRef.current.reportValidity();
            } else {
                alert(dictionary[params.lang]?.alertMessage4);
            }
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            if (response.ok) {
                // success
                setModalMessage(dictionary[params.lang]?.modalSuccess);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setShowModal(true);
            } else {
                // error
                setModalMessage(dictionary[params.lang]?.modalFailure);
                setShowModal(true);
            }

            setIsLoading(false);

        } catch (error) {
            setModalMessage(dictionary[params.lang]?.modalError);
            setShowModal(true);
            setIsLoading(false);
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <main>
            <section className="section section-other section-contact">
                <div className="container__explained">
                    <div className="explanation__first">
                        <h1>{dictionary[params.lang]?.contactTitle}</h1>
                        <h3>{dictionary[params.lang]?.contactSubtitle}</h3>
                    </div>
                </div>

                <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <legend className="screen_reader_title">
                            {dictionary[params.lang]?.contactFormLegend}
                        </legend>
                        <div className="field_container name-field-wrapper">
                            <div className="t-container">
                                <div className="t-cell">
                                    <div className="el-group el-form-hide_label">
                                        <div className="el-input--content">
                                            <input ref={nameRef} onChange={handleChange} className="el-form-control" type="text" id="name" name="name" placeholder={dictionary[params.lang]?.nameFieldPlaceholder} value={formData.name}>
                                            </input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="el-group el-form-hide_label">
                            <div className="el-input--content">
                                <input ref={emailRef} onChange={handleChange} className="el-form-control" type="email" id="email" name="email" placeholder={dictionary[params.lang]?.emailFieldPlaceholder} value={formData.email}>
                                </input>
                            </div>
                        </div>

                        <div className="el-group el-form-hide_label">
                            <div className="el-input--content">
                                <select ref={subjectRef} onChange={handleChange} className="el-form-control" id="subject" name="subject" defaultValue="">
                                    <option value="" disabled>{dictionary[params.lang]?.subjectFieldDefaultOption}</option>
                                    <option value={dictionary[params.lang]?.subjectFieldOption1}>{dictionary[params.lang]?.subjectFieldOption1}</option>
                                    <option value={dictionary[params.lang]?.subjectFieldOption2}>{dictionary[params.lang]?.subjectFieldOption2}</option>
                                    <option value={dictionary[params.lang]?.subjectFieldOption3}>{dictionary[params.lang]?.subjectFieldOption3}</option>
                                    <option value={dictionary[params.lang]?.subjectFieldOption4}>{dictionary[params.lang]?.subjectFieldOption4}</option>
                                </select>
                            </div>
                        </div>

                        <div className="el-group el-form-hide_label">
                            <div className="el-input--content">
                                <textarea
                                    ref={messageRef}
                                    onChange={handleChange}
                                    className="el-form-control"
                                    id="message"
                                    name="message"
                                    placeholder={dictionary[params.lang]?.messageFieldPlaceholder}
                                    value={formData.message}
                                    rows={9}
                                >
                                </textarea>
                            </div>
                        </div>

                        <button className=" el-group minimal-button" type="submit" disabled={isLoading}>
                            {isLoading ? dictionary[params.lang]?.submitButtonLoading : dictionary[params.lang]?.submitButtonDefault}
                        </button>
                    </form>
                </div>

            </section>
            <Modal show={showModal} message={modalMessage} onClose={handleCloseModal} />

            <section className="section section-other section-contact">
                <div className="container__explained">
                    <div className="explanation__first">
                        <h1>{dictionary[params.lang]?.myContactTitle}</h1>
                        <h3>{dictionary[params.lang]?.contact1}</h3>
                        <h3>{dictionary[params.lang]?.contact2}</h3>
                        <h3>{dictionary[params.lang]?.contact3}</h3>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
