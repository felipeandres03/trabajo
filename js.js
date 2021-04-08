

"use strikc"

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

function printuser(userData){

    let data = document.getElementById("table-date");
    let htmlrow = "";
    for (let i = 0; i<userData.length;i++){
        const newrow = `<tr>
                            <td>${userData[i].name}</td>
                            <td>${userData[i].email}</td>
                            <td>${userData[i].age}</td>
                        </tr>`;
        htmlrow += newrow;                    
    }
    
    data.innerHTML = htmlrow;
}

//  printuser(users)

 
 
 function filteremail(userData){
    
    let emailsAcademlo = [];

    
    for(let i = 0; i<userData.length; i++){
    
        if(userData[i].email.includes("@academlo")){
                
            emailsAcademlo.push(userData[i]);
            console.log(userData[i].email)
         }
    }    
    
    printuser(emailsAcademlo);

}

filteremail(users);