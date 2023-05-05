import AddContactModal from "../AddContactModal/AddContactModal";
import ChatApp from "./ChatApp/ChatApp"
import {Link, Navigate} from "react-router-dom";
import React from "react";
import {isLoggedIn} from "../login/Login"
function ChatWindow() {
    console.log(isLoggedIn.value);
    if(!isLoggedIn.value) {
        return(<Navigate to="/" />)
    }
    return (
        <>
            <head>
                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous"></link>
                <link rel="stylesheet"
                      href="/src/stylesheets/chatWindow.css"></link>
            </head>

            <Link to="/" role="button" className="btn-sm btn-danger logoutbutton text">Logout</Link>
            <ChatApp/>
            <AddContactModal/>
        </>
    )
}
export default ChatWindow;