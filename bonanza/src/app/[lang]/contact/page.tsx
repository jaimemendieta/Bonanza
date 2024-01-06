'use client'
import React, {FormEvent, useState} from 'react';

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

const Page = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!formData.name.trim()) {
            alert('Please enter your name.');
            return;
        }

        if (!formData.subject) {
            alert('Please select a subject.');
            return;
        }

        if (!formData.message.trim()) {
            alert('Please enter a message.');
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
                setModalMessage('Message sent successfully.');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setShowModal(true);
            } else {
                // error
                setModalMessage('Failed to send message. Please try again.');
                setShowModal(true);
            }

            setIsLoading(false);

        } catch (error) {
            setModalMessage('Failed to send message. Please refresh page and try again.');
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
                        <h1>I&apos;m available! Let&apos;s talk</h1>
                        <h3>Reach out and I&apos;ll get back to you within 3 days.</h3>
                    </div>
                </div>

                <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <legend className="screen_reader_title">
                            Contact Form
                        </legend>
                        <div className="field_container name-field-wrapper">
                            <div className="t-container">
                                <div className="t-cell">
                                    <div className="el-group el-form-hide_label">
                                        <div className="el-input--content">
                                            <input onChange={handleChange} className="el-form-control" type="text" id="name" name="name" placeholder="What's your name?" value={formData.name} required>
                                            </input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="el-group el-form-hide_label">
                            <div className="el-input--content">
                                <input onChange={handleChange} className="el-form-control" type="email" id="email" name="email" placeholder="Your email address?" value={formData.email} required>
                                </input>
                            </div>
                        </div>

                        <div className="el-group el-form-hide_label">
                            <div className="el-input--content">
                                <select onChange={handleChange} className="el-form-control" id="subject" name="subject" required defaultValue="">
                                    <option value="" disabled>What is this about?</option>
                                    <option value="General Question">General Question</option>
                                    <option value="Insurance">Insurance</option>
                                    <option value="Personalized Payments">Personalized Payments</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="el-group el-form-hide_label">
                            <div className="el-input--content">
                                <textarea
                                    onChange={handleChange}
                                    className="el-form-control"
                                    id="message"
                                    name="message"
                                    placeholder="Feel free to message me any questions, or thoughts."
                                    value={formData.message}
                                    rows={9}
                                    required
                                >
                                </textarea>
                            </div>
                        </div>

                        <button className=" el-group minimal-button" type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>

            </section>
            <Modal show={showModal} message={modalMessage} onClose={handleCloseModal} />
        </main>
    );
};

export default Page;
