import React from 'react';

const Page = () => {
    return (
        <main>
            <section className="section section-other section-contact">
                <div className="container__explained">
                    <div className="explanation__first">
                        <h1>I'm available! Let's talk</h1>
                        <h3>Reach out and I'll get back to you within 24 hours.</h3>
                    </div>
                </div>

                <div className="form-wrapper">
                    <form action="/submit-form" method="post">
                        <legend className="screen_reader_title">
                            Contact Form
                        </legend>
                        <div className="field_container name-field-wrapper">
                            <div className="t-container">
                                <div className="t-cell">
                                    <div className="el-group el-form-hide_label">
                                        <div className="el-input--content">
                                            <input className="el-form-control" type="text" id="name" name="name" placeholder="What's your name?" required>
                                            </input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="el-group el-form-hide_label">
                            <div className="el-input--content">
                                <input className="el-form-control" type="email" id="email" name="email" placeholder="Your email address?" required>
                                </input>
                            </div>
                        </div>

                        <div className="el-group el-form-hide_label">
                            <div className="el-input--content">
                                <select className="el-form-control" id="subject" name="subject" required defaultValue="">
                                    <option value="" disabled>What is this about?</option>
                                    <option value="option1">General Question</option>
                                    <option value="option2">Insurance</option>
                                    <option value="option3">Personalized Payments</option>
                                    <option value="option4">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="el-group el-form-hide_label">
                            <div className="el-input--content">
                                <textarea className="el-form-control" id="message" name="message" placeholder="Feel free to message me any questions, or thoughts." required>
                                </textarea>
                            </div>
                        </div>

                        <button className=" el-group header-button" type="submit">Submit</button>
                    </form>
                </div>

            </section>
        </main>
    );
};

export default Page;
