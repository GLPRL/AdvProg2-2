import AddContactModal from "../AddContactModal/AddContactModal";
import ChatApp from "./ChatApp/ChatApp"
import {Link} from "react-router-dom";
import login, {isLoggedIn} from "../login/Login"

function handleLogout() {
    login.isLoggedIn = false;
}
function ChatWindow() {
    return(
        <>
        <head>
            <link rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                  crossOrigin="anonymous"></link>
            <link rel="stylesheet"
            href="/src/stylesheets/chatWindow.css"></link>
        </head>

            <Link to="/" role="button" onClick={handleLogout} className="btn-sm btn-danger logoutbutton text"> Logout</Link>
            <ChatApp />
            <AddContactModal />
        </>
    )
}
export default ChatWindow;