import ContactsList from "./ContactsList/ContactsList";
import { useState } from "react";
import { useEffect } from "react";

function ContactsMenu(props) {
    return(
        <div className="contactScroll">
            <table className="table table-hover test ">
                <ContactsList setCurrentUser={props.setCurrentUser}/>
            </table>
        </div>
    );
}

export default ContactsMenu;