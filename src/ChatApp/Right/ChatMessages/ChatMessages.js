import ChatMessage from "./ChatMessage";

function ChatMessages() {
    return(
        <div className="msgScroll">
            <table className="table table-borderless ">
            <tbody>
                <ChatMessage msg="hedadado" floatValue={"float-right"}/>
                <ChatMessage msg="hedadado" floatValue={"float-right"}/>
                <ChatMessage msg="hedadado" floatValue={"float-right"}/>
                <ChatMessage msg="hedadado" floatValue={"float-right"}/>
                <ChatMessage msg="hedadado" floatValue={"float-left"}/>
                <ChatMessage msg="hedadado" floatValue={"float-right"}/>
                <ChatMessage msg="hedadado" floatValue={"float-right"}/>
                <ChatMessage msg="hedadado" floatValue={"float-right"}/>
                <ChatMessage msg="hedadado" floatValue={"float-right"}/>
                <ChatMessage msg="hedadado" floatValue={"float-right"}/>
                <ChatMessage msg="hedadado" floatValue={"float-right"}/>
                <ChatMessage msg="hedadado" floatValue={"float-right"}/>
                </tbody>
            </table>
        </div>
    );
}
export default ChatMessages;