import React from 'react';
import monkey from '../../images/monkeyprofilepic.jpg'
function ModalFooter() {
    function handleClick() {
        const input = document.getElementById("modalInput");
        const table = document.getElementById("contactTable");

        const inputValue = input.value.trim();
        if (!inputValue) {
            alert("Enter Valid User Information");
            return;
        }

        const row = document.createElement("tr");
        row.className += "table-info"
        table.appendChild(row);

        const picCell = document.createElement("td");
        const pic = document.createElement("img");
        pic.src = monkey;                                   //create image listing
        picCell.appendChild(pic);
        pic.className += "chat-profile-image rounded-circle";
        row.appendChild(picCell);

        const userName = document.createElement("td");
        userName.innerHTML = inputValue;                //Create username listing
        userName.className += "td"
        row.appendChild(userName);

        const timeDate = document.createElement("td");
        const smallTD = document.createElement("small");
        const now = new Date();                         //Create date listing
        smallTD.innerText = now.toLocaleString();
        timeDate.appendChild(smallTD);
        timeDate.className += "td";
            row.appendChild(timeDate);

    }

    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button add" id="addContact" className="btn btn-primary" data-dismiss="modal" onClick={handleClick}>Add</button>
        </div>
    );
}
export default ModalFooter;