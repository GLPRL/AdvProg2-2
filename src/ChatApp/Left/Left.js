import UserTab from "./UserTab/UserTab";
import ContactsMenu from "./ContactsMenu/ContactsMenu";

function Left() {
    return(
        <div className="contactBox  col-sm-4">
            <UserTab />
            <ContactsMenu />
        </div>
    );
}
export default Left;