import Left from "./Left/Left";
import Right from "./Right/Right";
import usersData from "../usersData";
import { useState } from "react";
function ChatApp() {

    return (
        <div className="container content row no-gutters text">
            <Left/>
            <Right />
        </div>
    );
}
export default ChatApp;