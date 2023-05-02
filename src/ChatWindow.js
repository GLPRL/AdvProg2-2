import AddContactModal from "./AddContactModal/AddContactModal";
import ChatApp from "./ChatApp/ChatApp";

function ChatWindow() {
    return(
        <>
            <button className="btn-sm btn-danger logoutbutton text"> Logout</button>
            <ChatApp />
            <AddContactModal />
        </>
    )
}
export default ChatWindow;