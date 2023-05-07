import profilePic3 from '../../../../profilePic3.jpg'
import monkeyPic from '../../../../monkeyprofilepic.jpg'
import contacts from '../../../../contactList';
import usersData from '../../../../usersData.js'
import '../../../../chatWindow.css'
import Contact from './Contact';
import { useState } from 'react';
import { useEffect } from 'react';

/* Fetch usernames pics and dates */
function ContactsList(props) { 
        const allContacts = usersData.map((contact, key) =>
            
            <>
                <Contact name={contact.name} id={contact.id} key={key} setCurrentUser={props.setCurrentUser}></Contact>
            </>
            );

        return(
            <tbody>{allContacts}</tbody>
        )
}
export default ContactsList;