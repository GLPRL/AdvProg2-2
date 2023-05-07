import ContactTab from "./ContactTab/ContactTab";
import ChatMessages from "./ChatMessages/ChatMessages";
import ChatInteraction from "./ChatInteraction/ChatInteraction";

function Right(props) {
    
    return(
        <div className="contactBox border-right col-8">
            <ContactTab />
            <ChatMessages currentUser={props.currentUser}/>
            <ChatInteraction />
        </div>
    );
}
export default Right;