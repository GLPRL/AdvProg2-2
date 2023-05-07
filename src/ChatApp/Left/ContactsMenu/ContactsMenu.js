
import ContactsList from "./ContactsList/ContactsList";
import { useState } from "react";
import { useEffect } from "react";

function ContactsMenu() {
    const [currentUser, setCurrentUser] = useState('');
        useEffect(()=>{
            console.log("noticed a change in usestate its now " + currentUser);
        },[currentUser]);

    return(
        <div className="contactScroll">
            <table className="table table-hover test ">
                <ContactsList setCurrentUser={setCurrentUser}/>
            </table>
        </div>
    );
}
export default ContactsMenu;