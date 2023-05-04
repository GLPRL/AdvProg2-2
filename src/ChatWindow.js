import AddContactModal from "./AddContactModal/AddContactModal";
import ChatApp from "./ChatApp/ChatApp"

function ChatWindow() {
    return(
        <>
        <head>
            <link rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                  crossOrigin="anonymous"></link>
            <link rel="stylesheet"
            href="/stylesheets/chatWindow.css"></link>
        </head>

            <button className="btn-sm btn-danger logoutbutton text"> Logout</button>
            <ChatApp />
            <AddContactModal />
        </>
    )
}
export default ChatWindow;