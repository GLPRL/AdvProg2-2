import profilePic3 from '../../../../profilePic3.jpg'
import { useState } from 'react';


function Contact(props) {


    const [clientUsername, setClientUsername] = useState('');

    function handleContactClick() {
        console.log("logged" + props.id)
    }


    const contact =
    <>
        <td><img src={ profilePic3 } alt="" className="chat-profile-image rounded-circle"></img></td>
        <td>{props.name}</td>
        <td><small>{props.id}</small></td>
    </>

    return (
        <tr className="table-info" onClick={()=>handleContactClick(props.id)}>
        {contact}
        </tr>
    )
}


export default Contact;