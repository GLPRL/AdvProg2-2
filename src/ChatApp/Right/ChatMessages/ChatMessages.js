import ChatMessage from "./ChatMessage";
import messages from "./messagesList";

function ChatMessages() {
    const messsageConvo = messages.map((message,key) =>
        <ChatMessage msg={message.text} floatValue={message.floatValue} key={key}></ChatMessage>
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