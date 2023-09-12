let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key ='c6961d9643c5f57cfdbeab2d999c9ef7';
let difKelvin = 273.15;

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
});

function fetchDatosClima (ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = '';

    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const sensacionTermica = data.main.feels_like;
    const humedad = data.main.humidity;
    const descripcion = data.weather[0].description;
    const icon = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}°C`;

    const sensTermicaInfo = document.createElement('p')
    sensTermicaInfo.textContent = `La sensación térmica es: ${Math.floor(sensacionTermica - difKelvin)}°C`;

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`;

    const iconInfo = document.createElement('img')
    iconInfo.src = ` https://openweathermap.org/img/wn/${icon}@2x.png`;

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(sensTermicaInfo);
    divDatosClima.appendChild(iconInfo);
    divDatosClima.appendChild(descripcionInfo);
}



