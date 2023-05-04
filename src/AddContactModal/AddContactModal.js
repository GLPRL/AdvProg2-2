import ModalFooter from "./ModalFooter/ModalFooter";
import ModalBody from "./ModalBody/ModalBody";
import ModalHeader from "./ModalHeader/ModalHeader";

function AddContactModal() {
    return (
        <div className="modal fade text" id="exampleModal" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <ModalHeader />
                    <ModalBody />
                    <ModalFooter />
                </div>
            </div>
        </div>
    );
}
export default AddContactModal;