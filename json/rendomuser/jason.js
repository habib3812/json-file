function usre(){
    fetch("https://randomuser.me/api/?gender=female")
    .then(rest => rest.json())
    .then(data =>  usreDisplayData(data))
}
function usreDisplayData(data){
const usersection= document.getElementById("rendomusersection")
console.log()


    const li=document.createElement("div");
    li.innerHTML=`
    <img src="${data.results[0].picture.large}" alt="">
    <p>${data.results[0].name.title + ' '+ data.results[0].name. first + " "+ data.results[0].name.last}</p>
    <h1>${data.results[0].gender}</h1>
    
    `;
    usersection.appendChild(li)

}
usre()