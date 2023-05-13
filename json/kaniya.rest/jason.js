function usre(){
    fetch("https://api.kanye.rest/")
    .then(rest => rest.json())
    .then(data =>  usreDisplayData(data))
}
function usreDisplayData(data){
    
console.log(data.quote)

const ul = document.getElementById("list");


    const li=document.createElement("li");
    li.innerText=(data.quote);
    ul.appendChild(li)

}