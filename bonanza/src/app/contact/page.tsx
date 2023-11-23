import React from 'react';

const Page = () => {
    return (
        <main>
            <section className="section section-other">
                <div className="container__explained">
                    <div className="explanation__first">
                        <h1>I'm available! Let's talk</h1>
                        <p>Reach out and I'll get back to you within 24 hours.</p>
                    </div>
                </div>

                <form action="/submit-form" method="post">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your name here" required>
                    </input>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your email here" required>
                        </input>


                            <label htmlFor="subject">What is this about:</label>
                            <select id="subject" name="subject" required>
                                <option value="" disabled selected>Select one...</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>


                            <label htmlFor="message">Tell me more:</label>
                            <textarea id="message" name="message"
                                      placeholder="Feel free to message me any questions, or thoughts."
                                      ></textarea>


                            <button type="submit">Submit</button>
                </form>

            </section>
        </main>
    );
};

export default Page;
