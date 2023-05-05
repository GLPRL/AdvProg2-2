import profilePic3 from '../../../../profilePic3.jpg'
import monkeyPic from '../../../../monkeyprofilepic.jpg'
import contacts from '../../../../contactList';
import usersData from '../../../../usersData.js'
import '../../../../chatWindow.css'
import Contact from './Contact';





/* Fetch usernames pics and dates */
function ContactsList() { 
        const allContacts = usersData.map((contact, key) =>
            
            <>
                <Contact name={contact.name} uname={contact.username} key={key}></Contact>
            </>
            );

        return(
            <tbody>{allContacts}</tbody>
        )
}
export default ContactsList;