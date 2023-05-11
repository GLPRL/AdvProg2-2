import '../../../../stylesheets/chatWindow.css'
import defaultProfilePic from '../../../../images/default.jpg'
function ContactTab() {
    return(
        <div className="userTab">
            <img src= { defaultProfilePic } alt="" className="user-tab-right-image rounded-circle" id="contactImage"></img>
            <span className="userName userTopLeft" id="contactUser"></span>
        </div>
    );
}
export default ContactTab;