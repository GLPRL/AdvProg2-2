import profilePic3 from '../../../../profilePic3.jpg'
import ContactItem from '../ContactItem/ContactItem';
import monkeyPic from '../../../../monkeyprofilepic.jpg'
import contacts from '../../../../contactList';
import '../../../../chatWindow.css'





/* Fetch usernames pics and dates */
function ContactsList() {
    
        const allContacts = contacts.map(contact => 
            <li key={contact.id} className='contacts'>
            <tr className="table-info">
                <td><img src={ profilePic3 } alt="" className="chat-profile-image rounded-circle"></img></td>
                <td>{contact.name}</td>
                <td><small>some date</small></td>
            </tr>
            </li>
            );

        return(
        <ul className='contactUl'>{allContacts}</ul>
        )
}
export default ContactsList;