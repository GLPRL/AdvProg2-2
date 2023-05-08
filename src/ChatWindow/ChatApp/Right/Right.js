import ContactTab from "./ContactTab/ContactTab";
import ChatMessages from "./ChatMessages/ChatMessages";
import ChatInteraction from "./ChatInteraction/ChatInteraction";
import { useState } from "react";

function Right(props) {
    

    return(
        <div className="contactBox border-right col-8">
            <ContactTab />
            <ChatMessages currentUser={props.currentUser} firstPrint={props.firstPrint} setfirstPrint={props.setfirstPrint}/>
            <ChatInteraction currentUser={props.currentUser} firstPrint={props.firstPrint} setfirstPrint={props.setfirstPrint} msgChangeHandler={props.msgChangeHandler}/>
        </div>
    );
}
export default Right;