 function getCountryList(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res =>  res.json())
    .then(data =>   getCountryName(data) )
    .catch(err => console.log(err))
}
getCountryList()

function getCountryName(data){
        const ul = document.getElementById('country-list')
        
         for(x in data){
            const li = document.createElement('li')
            li.classList.add('name')
            li.innerHTML = data[x].name 
            ul.appendChild(li)
        }

const countryNames = document.querySelectorAll('.name');
countryNames.forEach(countryName =>{
    countryName.addEventListener('click', ()=> getSingleCountry(countryName))
}) 

}

function getSingleCountry(countryName){
    const value = countryName.innerText;
    fetch(`https://restcountries.eu/rest/v2/name/${value}`)
    .then(res => res.json())
    .then(data => getCountryDetails(data))
    .catch(error => console.log(error))
    //console.log(data);
    //console.log('I am clicked');
}

function getCountryDetails(countryDetails){
        console.log(countryDetails);
        const main = document.getElementById('details')
        for(details in countryDetails){
            const td = document.createElement('td')
            const name = (countryDetails[details].name);
            const capital = (countryDetails[details].capital);
            const population = (countryDetails[details].population);
            const area =(countryDetails[details].area);
            const flag = (countryDetails[details].flag['https://restcountries.eu/data/est.svg']);
            td.innerHTML = `<td> ${name}</td> <td> ${capital}</td> <td> ${population}</td> <td> ${area}</td> <td> ${flag}</td>`
            main.appendChild(td)
        }


}
