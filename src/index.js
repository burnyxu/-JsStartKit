import './index.css'
import numeral from 'numeral'
import { getUsers, deleteUser } from './api/userApi'
/*eslint-disable no-console*/
const courseValue = numeral(1000).format('$0,0.00');
console.log(`i would pay ${courseValue} for this good course`);
getUsers().then((result) => {
    let usersbody = "";
    result.forEach(user => {
        usersbody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>`
    });

    global.document.getElementById("users").innerHTML = usersbody
    const deleteLinks = global.document.getElementsByClassName("deleteUser");
    Array.from(deleteLinks, link => {
        link.onclick = function (event) {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id"].value)
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
    })

})
