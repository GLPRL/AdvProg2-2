import profilePic3 from '../../../../../images/profilePic3.jpg'
import monkeyPic from '../../../../../images/monkeyprofilepic.jpg'
import usersData from '../../../../../usersData'
import '../../../../../stylesheets/chatWindow.css'
import Contact from './Contact';
import { useState } from 'react';
import { useEffect } from 'react';

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