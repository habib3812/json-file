function usre(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(rest => rest.json())
    .then(data =>  usreDisplayData(data))
}
function usreDisplayData(data){
    
 console.log(data.name)
for(user of data){

        const ul = document.getElementById("list");
    console.log(user.name)

    const li=document.createElement("li");
    li.innerHTML=`<p> nane:${user.email} </p>
          <h1> nane:${user.name} </h1>
          <h1> id:${user.id} </h1>
          <h1> body:${user.body} </h1>
    
    
    `;
    ul.appendChild(li)
}

}
