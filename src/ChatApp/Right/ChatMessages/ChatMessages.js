import ChatMessage from "./ChatMessage";
import messages from "./messagesList";
import { useState } from "react";
import userData from "./../../../usersData";
function ChatMessages(props) {

    const messsageConvo = userData.find(item => {
            if (item.id === props.currentUser) {
                console.log("fount !!!" + props.currentUser);
                console.log(item.name);
                item.messages.map((message,key) =>
                <ChatMessage msg={message.text} floatValue={message.floatValue} key={key}></ChatMessage>
                );  
            }});


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