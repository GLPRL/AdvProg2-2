import Left from "./Left/Left";
import Right from "./Right/Right";
import usersData from "../../usersData";
import { useState } from "react";
import { useEffect } from "react";

function ChatApp() {
    const [currentUser, setCurrentUser] = useState(1);
    useEffect(()=>{
        console.log("noticed a change in usestate its now " + currentUser);
    },[currentUser]);

    return (
        <div className="container content row no-gutters text">
            <Left setCurrentUser={setCurrentUser}/>
            <Right currentUser={currentUser}/>
        </div>
    );
}
export default ChatApp;