import React, {useState} from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // handle form submission here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };


    //automatically checks if valid email
    return (
        <div id='contact-form'>
            <h2>Contact</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Message:
                    <textarea value={message} onChange={e => setMessage(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact