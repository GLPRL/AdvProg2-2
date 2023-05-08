import usersData from '../../../../../usersData'
import '../../../../../stylesheets/chatWindow.css'
import Contact from './Contact';

/* Fetch usernames pics and dates */
function ContactsList(props) { 
        const allContacts = usersData.map((contact, key) =>
                <Contact name={contact.name} id={contact.id} key={key} setCurrentUser={props.setCurrentUser}></Contact>
            );

        return(
            <tbody id="contactTable">{allContacts}</tbody>
        )
}
export default ContactsList;