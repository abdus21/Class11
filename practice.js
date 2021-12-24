
const devs = document.querySelector('.tem');




devinfo.map(data =>{
    devs.innerHTML += ` <div class="tem">
    <img src="${data.photo}">
    <h3>id ${data.id}</h3>
    <samp>name ${data.name}</samp>
    <p>age ${data.age}</p>
    <p>skills ${data.skills}</p>
    <p>locaition ${data.locaition}</p>
</div>`;
});

const studentData = document.querySelector('.student');



student.map(data =>{
    studentData.innerHTML += `
    
    <div class="student">
    <span>roll ${data.roll}</span>
    <p> name ${data.name}</p>
    <p>age ${data.age}</p>
    <p>location ${data.location}</p>
    <span>  bn ${data.bn} </span>
    <p>  en  ${data.en}</p>
    <span>  math  ${data.math} </span>
    <p>  rel  ${data.rel} </p>
    <span>  ss  ${data.ss} </span>
</div>
    `
})

const phoneBook = document.querySelector('.phonebook');


familyPhoneBook.map(data =>{

    phoneBook.innerHTML += `

    <table border="">
    <tr>
        <th>ID </th>
        <th>Name </th>
        <th>relationships</th>
        <th>phone </th>
        <th>location </th>
    </tr>
    <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td> ${data.relationships}</td>
        <td>${data.phone}</td>
        <td>${data.location}</td>

    </tr>
</table>
    
    `
})


