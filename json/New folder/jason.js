
//             ()
function usre(){

const url= "https://openapi.programming-hero.com/api/ai/tools"
fetch(url)
.then(response => response.json())
.then(data => usreDisplayData(data.data.tools))
toggleSpinner(true);
}


function usreDisplayData(data){
 
    const usersection= document.getElementById("cardMain");
    //  slice date
    const showAlldata= document.getElementById("moreData");
if(data.length>6){
  data = data.slice(0,6);
  showAlldata.classList.remove("d-none")
}
else{
  showAlldata.classList.add("d-none")
}

// ___________________________
document.getElementById("moreData").addEventListener("click",function(){
  data = data.slice(6,10);

})
// ___________________________
data.forEach(element =>{
  
    //  console.log(element)
    const li=document.createElement("div");
    li.classList.add("col")
    li.innerHTML=`
    <div class="card">
    <img  src="${element.image}" class="card-img-top img-fluid " alt="...">
    <div class="card-body">
      <h5 class="card-title">Features</h5>
      <div class="olNumver">
      <ol>
        <li>${element.features[0]}</li>
        <li>${element.features[1]}</li>
        <li>${element.features[2]}</li>
      </ol>
    </div>
     
      <!-- hr brick line -->
      <hr>
      <div class=" futterCord">
        <div>
            <p class="elementsName">${element.name}</p>
           <p><i class="fa-regular fa-calendar">  ${element. published_in}</i></p>

        </div>
        <div>
        <button class="arrow" onclick= lodedetels("${element.id}") data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        </div>
      </div>
    </div>
    
    `;
    usersection.appendChild(li)
    toggleSpinner(false);

   });

}

// lodersection
const toggleSpinner =isLodding=> {
const loderSectino = document.getElementById("loder");
if(isLodding){
  loderSectino.classList.remove("d-none")
}
else{
  loderSectino.classList.add("d-none")
}
}
// lode detels
const lodedetels =async id => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id} `;
  const res = await fetch(url);
  const data =await res.json();
  displaytlodedetels(data.data) 
}

const displaytlodedetels = card => {
  console.log(card) 
  const modelCard= document.getElementById("cardMainSection");
  modelCard.innerHTML= `
  

  <div class="container mx-auto my-auto row row-cols-1 row-cols-md-2 g-4 mt-4">
      
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsuusi at exercitationem maxime explicabo delectus illo sequi sapiente facere. Similique ullam praesentium iusto rerum, quis reprehenderit tempora ducimus odit alias modi harum necessitatibus debitis id eveniet voluptatibus optio dolor accusantium sit, quas inventore tenetur nisi. Modi.</h5>
          <div>
            <div class="card-group" >
              <div class="card">
                <div class="card-body">
                  <p class="card-title text-center text-success  fs-4 fw-semibold"><span>$10/</span> month Basic</p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-title text-center  text-warning  fs-4 fw-semibold"><span>$50/</span> month Pro</p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-title text-center text-info fs-4 fw-semibold">Contact us Enterprise</p>
                </div>
              </div>
            </div>
          </div>
           <section>
            <div class="card-group ">
              <div class="card border border-0">
             
                <div class="card-body">
                  <h5 class="card-title">Features</h5>
                 <ul>
                  <li>gggg</li>
                  <li>gggn</li>
                  <li>nnnnn</li>
                 </ul>
                </div>
              </div>
              <div class="card border border-0">
                <div class="card-body">
                  <h5 class="card-title">Integrations</h5>
                  <ul>
                    <li>gggg</li>
                    <li>gggn</li>
                    <li>nnnnn</li>
                   </ul>
                </div>
              </div>
            </div>
           </section>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="positionMain" style="position: relative; ">
          <div class="imgDiv">
             <img src="img/banner2-removebg-preview.png" class=" card-img-top" style=" width: 437px;
            height: 339px " alt="...">
            </div>
          <div class="buttonPosition" > 
            <button  style="position: absolute; top: 5px; right: 5px;" type="button" class="btn btn-danger"><span>94% </span> accuracy</button>
          </div>
        </div>
             
        <div class="card-body">
          <h5 class="card-title text-center">Card title</h5>
          <p class="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  `;
}

    usre()