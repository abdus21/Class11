
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
    <span>  Bangla  ${data.bn} </span>
    <p>English   ${data.en}</p>
    <span>  math  ${data.math} </span>
    <p>  religion ${data.rel} </p>
    <span style="display:block">  Science  ${data.ss} </span>
    <p style="display:inline-block;margin:0 50px";>GPA</p>
    <p>Bangla ${abdusSamad.GpaGradeCal(data.bn).gpa}</p>
    <p>English ${abdusSamad.GpaGradeCal(data.en).gpa}</p>
    <p>math ${abdusSamad.GpaGradeCal(data.math).gpa}</p>
    <p>religion ${abdusSamad.GpaGradeCal(data.rel).gpa}</p>
    <p>Science ${abdusSamad.GpaGradeCal(data.ss).gpa}</p>
    <span>Grade</span>
    <p>Bangla ${abdusSamad.GpaGradeCal(data.bn).grade}</p>
    <p>English ${abdusSamad.GpaGradeCal(data.en).grade}</p>
    <p>math ${abdusSamad.GpaGradeCal(data.math).grade}</p>
    <p>religion ${abdusSamad.GpaGradeCal(data.rel).grade}</p>
    <p>Science ${abdusSamad.GpaGradeCal(data.ss).grade}</p>
    <p style="margin-top:15px";>fainal Result</p>

    <p>Fainal CGPA = ${abdusSamad.fainalResult(data.bn,data.en,data.math,data.rel,data.ss).fainalCgpa}&  Fainal  Grade = ${abdusSamad.fainalResult(data.bn,data.en,data.math,data.rel,data.ss).fainalGrade}</p>
</div>
    `
})

const phoneBook = document.querySelector('.phonebook');


familyPhoneBook.map(data =>{

    phoneBook.innerHTML += `

    <table border="1px solid #000";padding="20px">
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


