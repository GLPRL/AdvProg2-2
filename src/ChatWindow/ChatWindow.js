import LogoutButton from "../LogoutButton/LogoutButton";
import AddContactModal from "../AddContactModal/AddContactModal";
import ChatApp from "../ChatApp/ChatApp";

function ChatWindow() {
    return(
        <>
        <LogoutButton />
            <ChatApp />
        <AddContactModal />
        </>
    )
}
export default ChatWindow;