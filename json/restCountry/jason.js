
//()

function lodeCountre(){
    fetch("https://restcountries.com/v3.1/all")
    .then(rest => rest.json())
    .then(data =>country(data))
}
function country(data){
    // console.log(data)
    const inntehtml= document.getElementById("mainSection");
    data.forEach(country => {
        // console.log(country.cca2)
    const div= document.createElement('div')
     div.classList.add("country")
    div.innerHTML=`
    
    <h1>counrey :${country.name.common} </h1>
    <h1>rajdeni: ${country.capital[0]} </h1>
    <img id="img" src="${country.flags.png}" alt="" srcset="">
    <button id="button" onclick=" cunterDetels('${country.cca2}')"> click btn</button>
    `
    inntehtml.appendChild(div);
    });

}
// ++++++++++++++++++++++++

function cunterDetels(code){

const dinamickCode=`https://restcountries.com/v3.1/alpha/${code}`

console.log(dinamickCode);

fetch(dinamickCode)
.then(rest => rest.json())
.then(datas => countrys(datas))
}




function countrys(datas){
    //  console.log(datas)
    const inntehtmls= document.getElementById("section");
    datas.forEach(country => {
        console.log(
            )
    
        inntehtmls.innerHTML=`
    <h1>counrey :${country.continents[0]} </h1>
    <h1>rajnity :${country.name.official} </h1>
    `
    });
}

lodeCountre()

