import {useState} from 'react';

const Message =()=> {

    const [message,setMessage]=useState('welcome home')
    return (
        <div>
        <h1>{message}</h1>
        <button onClick={()=> setMessage('Thankyou for subscribing')}>Subscribe</button>
        </div>
    )
}
export default Message;