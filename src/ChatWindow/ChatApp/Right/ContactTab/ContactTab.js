import profilepic3 from "../../../../images/profilePic3.jpg";
import '../../../../stylesheets/chatWindow.css'
function ContactTab() {
    return(
        <div className="userTab">
            <img src= { profilepic3 } alt="" className="user-tab-right-image rounded-circle"></img>
            <span className="userName userTopLeft">User Name</span>
        </div>
    );
}
export default ContactTab;