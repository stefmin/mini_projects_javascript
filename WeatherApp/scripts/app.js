
const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const icon = document.querySelector('.icon');
const weatherInfo = document.querySelector('.details');

const updateCity = async location => {

    const data = await getCity(location);

    if(data.isDay)
        card.children[0].setAttribute('src', 'img/day.svg');
    else
        card.children[0].setAttribute('src', 'img/night.svg');

    icon.children[0].setAttribute('src', `${data.iconLink}`)
    icon.classList.remove('d-none');

    weatherInfo.children[0].textContent = `${location}`;
    weatherInfo.children[1].textContent = `${data.weatherText}`;
    weatherInfo.querySelector('span').textContent =`${data.degreesC}`; 


    card.classList.remove('d-none');
}


cityForm.addEventListener('submit', (e) =>{

    e.preventDefault();

    const location = cityForm.city.value.trim().toLowerCase();

    cityForm.reset();

    updateCity(location);

})