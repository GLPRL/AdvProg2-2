import UserTab from "./UserTab/UserTab";
import ContactsMenu from "./ContactsMenu/ContactsMenu";
import { useState } from "react";
import { useEffect } from "react";

function Left(props) {
    return(
        <div className="contactBox  col-sm-4">
            <UserTab />
            <ContactsMenu/>
        </div>
    );
}
export default Left;