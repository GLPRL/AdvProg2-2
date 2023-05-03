
import ContactsList from "./ContactsList/ContactsList";

function ContactsMenu() {
    return(
        <div className="contactScroll">
            <table className="table table-hover test ">
                <ContactsList />
            </table>
        </div>
    );
}
export default ContactsMenu;