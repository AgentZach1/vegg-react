import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './SignUpSection.css';
import '../App.css';

function SignUpSection() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, {
        from_name: `${firstName} ${lastName}`,
        to_name: 'Zachary',
        message: message,
        reply_to: email,
      }, process.env.REACT_APP_EMAILJS_USER_ID)
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
  
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    }
  
    return (
      <div className='sign-up-form'>
            <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <ul>
                <input className='first-name' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                <input className='last-name' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            </ul>
            <ul>
                <input className='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </ul>
            <ul>
                <textarea className='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
            </ul>
            <ul>
                <input className='submit' type="submit" value="Submit" />
            </ul>
        </form>
      </div>
      
    )
}

export default SignUpSection;