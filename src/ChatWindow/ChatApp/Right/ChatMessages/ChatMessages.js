import ChatMessage from "./ChatMessage";
import messages from "./messagesList";
import { useState } from "react";
import userData from "./../../../usersData";
function ChatMessages(props) {
    const [currentMessages, setCurrentMessages] = useState([]);
    const [firstPrint, setfirstPrint] = useState(true);

let messageArray = [];
let msgsConvo;
if (firstPrint) {
    setfirstPrint(false);
    msgsConvo = userData.find(item => {
        if (item.id === 1) {
            messageArray = item.messages;
            console.log(messageArray[1]);
        }});
} else {
    msgsConvo = userData.find(item => {
        if (item.id === props.currentUser) {
            messageArray = item.messages; 
        }});
}

const messageConversation = messageArray.map((message,key) => {
    //console.log(message.text + " " + message.floatValue);
<p className="bg-warning  p-2 border  rounded-pill  shadow-lg mb-3  float-right "> {message.text} </p>});


    return(
        <div className="msgScroll">
            <table className="table table-borderless ">
            <tbody>
                {messageConversation}
                </tbody>
            </table>
        </div>
    );
  
}
export default ChatMessages;