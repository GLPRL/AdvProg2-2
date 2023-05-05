import profilePic3 from '../../../../profilePic3.jpg'
import { useState } from 'react';
function Contact({name}, {username}) {


    const [clientUsername, setClientUsername] = useState('');

    function handleContactClick() {
        setClientUsername({username})
        console.log("got clicked by " + {clientUsername});
    }   


    const contact = 
    <>
        <td><img src={ profilePic3 } alt="" className="chat-profile-image rounded-circle"></img></td>
        <td>{name}</td>
        <td><small>some date</small></td>
    </>

    return (
        <tr className="table-info" onClick={handleContactClick}>
        {contact}
        </tr>
    )
}


export default Contact;