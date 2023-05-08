import React from 'react';
import monkey from '../../images/monkeyprofilepic.jpg'
import userData from '../../usersData'
import { useState } from 'react';

function ModalFooter(props) {

    function handleClick() {
        const input = document.getElementById("modalInput");
        const table = document.getElementById("contactTable");

        const inputValue = input.value.trim();
        if (!inputValue) {
            alert("Enter Valid User Information");
            return;
        }

        const newContact = {id:props.idCount, name:inputValue, messages:[]};
        props.handleIdCount();
        const len = userData.push(newContact);
    }

    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button add" id="addContact" className="btn btn-primary" data-dismiss="modal" onClick={handleClick}>Add</button>
        </div>
    );
}
export default ModalFooter;