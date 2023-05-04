import ChatMessage from "./ChatMessage";
import messages from "./messagesList";

function ChatMessages() {
    const messsageConvo = messages.map(message =>
        <ChatMessage msg={message.text} floatValue={message.floatValue}></ChatMessage>
        );


    return(
        <div className="msgScroll">
            <table className="table table-borderless ">
            <tbody>
                {messsageConvo}
                </tbody>
            </table>
        </div>
    );
}
export default ChatMessages;