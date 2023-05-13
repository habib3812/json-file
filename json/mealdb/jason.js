function usre(screch){
    
    const url=`
    https://www.themealdb.com/api/json/v1/1/search.php?s=${screch}
    `
      fetch(url)
    .then(rest => rest.json())
    .then(data => usreDisplayData(data.meals))
}
function usreDisplayData(meals){
    const section = document.getElementById("section");
    section.innerHTML=' '
    // =========================
    meals.forEach(element => {
        console.log(element.strMealThumb
            )
    const div=document.createElement("div");
    div.classList.add("col");

    div.innerHTML=`  
     <div class="card">
    <img src="${element.strMealThumb}" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title img-fluid">${element.strMeal}</h5>
      <p class="card-text">${element.strInstructions}</p>
    </div>
  </div>`;
  section.appendChild(div)
    });
}



function btnandinput(){
const input =document.getElementById("input");
const inputValue= input.value;
usre(inputValue);
};

usre();