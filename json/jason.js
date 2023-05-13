function usre(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(rest => rest.json())
    .then(data =>  usreDisplayData(data))
}
function usreDisplayData(data){
    
// console.log(data.name)
for(user of data){
const ul = document.getElementById("list");
    // console.log(user.name)

    const li=document.createElement("li");
    li.innerText=(user.name);
    ul.appendChild(li)
}
}