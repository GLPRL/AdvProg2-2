import profilePic3 from '../../../../profilePic3.jpg'
import monkeyPic from '../../../../monkeyprofilepic.jpg'
import contacts from '../../../../contactList';
import '../../../../chatWindow.css'





/* Fetch usernames pics and dates */
function ContactsList() { 
        const allContacts = contacts.map(contact =>
            
            <tr className="table-info">
                <td><img src={ profilePic3 } alt="" className="chat-profile-image rounded-circle"></img></td>
                <td>{contact.name}</td>
                <td><small>some date</small></td>
            </tr>
            );

        return(
            <tbody>{allContacts}</tbody>
        )
}
export default ContactsList;