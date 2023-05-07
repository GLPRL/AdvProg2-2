import UserTab from "./UserTab/UserTab";
import ContactsMenu from "./ContactsMenu/ContactsMenu";
import { useState } from "react";
import { useEffect } from "react";

function Left(props) {
    const [currentUser, setCurrentUser] = useState('');
    useEffect(()=>{
        console.log("noticed a change in usestate its now " + currentUser);
    },[currentUser]);

    return(
        <div className="contactBox  col-sm-4">
            <UserTab />
            <ContactsMenu setCurrentUser={setCurrentUser}/>
        </div>
    );
}
export default Left;