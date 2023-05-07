import ChatMessage from "./ChatMessage";
import messages from "./messagesList";
import { useState } from "react";
import userData from "./../../../usersData";
function ChatMessages(props) {
    const [currentMessages, setCurrentMessages] = useState([]);
    const [firstPrint, setfirstPrint] = useState(true);

let msgsConvo;
if (firstPrint) {
    setfirstPrint(false);
    msgsConvo = userData.find(item => {
        if (item.id === 1) {
            item.messages.map((message,key) => {
                console.log(message.text);
                <ChatMessage msg={message.text} floatValue={message.floatValue} key={key}></ChatMessage>
            }); 
        }});
} else {
    msgsConvo = userData.find(item => {
        if (item.id === props.currentUser) {
            item.messages.map((message,key) => {
                console.log(message.text);
                <ChatMessage msg={message.text} floatValue={message.floatValue} key={key}></ChatMessage>
            }); 
        }});
}

    return(
        <div className="msgScroll">
            <table className="table table-borderless ">
            <tbody>
                {msgsConvo}
                </tbody>
            </table>
        </div>
    );

    
}
export default ChatMessages;