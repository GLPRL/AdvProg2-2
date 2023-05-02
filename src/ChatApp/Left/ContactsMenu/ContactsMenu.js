import ContactItem from "./ContactItem/ContactItem";
import monkeyprofilepic from "../../../monkeyprofilepic.jpg";
import profilepic3 from '../../../profilePic3.jpg'
import ContactsList from "./ContactsList/ContactsList";

function ContactsMenu() {
    return(
        <div className="contactScroll">
            <table className="table table-hover test ">
                <tbody>
                <ContactsList />
                </tbody>
            </table>
        </div>
    );
}
export default ContactsMenu;