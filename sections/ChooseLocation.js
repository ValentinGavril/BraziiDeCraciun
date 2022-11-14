const bucuresti = document.querySelector('.bucharest');
const timisoara = document.querySelector('.timisoara');
const oradea = document.querySelector('.oradea');

const selectedCity = document.getElementById('city');

function updateCity(city){
    selectedCity.innerHTML = city;
    disiplayCurentWeather(city)
}

bucuresti.addEventListener('click', function(){
    updateCity(this.innerHTML);
});

timisoara.addEventListener('click', function(){
    updateCity(this.innerHTML);
});

oradea.addEventListener('click', function(){
    updateCity(this.innerHTML);
});