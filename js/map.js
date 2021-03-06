// Initialize and add the map
function initMap(lat, lng) {
  // The location of Uluru
  const uluru = { lat:  lat || -16.9990375 , lng:lng || -72.1101332 };
  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("puertos_map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
} 

function showMaps(name) {
  
  const matarani = document.getElementById('Matarani')
  const mollendo = document.getElementById('Mollendo')
  const ilo = document.getElementById('Ilo')
  const callao = document.getElementById('Callao')
  const salaverry = document.getElementById('Salaverry')
 const paita = document.getElementById('Paita')
 const chimbote = document.getElementById('Chimbote')


switch (name) {
  case 'Matarani':

    initMap(-16.9990375, -72.1101332)
       matarani.classList.add('activeMe')
    // mollendo.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.remove('activeMe')
       chimbote.classList.remove('activeMe')
    break;

    case 'Ilo':
  
      initMap(-17.6495428,-71.3514944)
     matarani.classList.remove('activeMe')
  
    ilo.classList.add('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.remove('activeMe')
         chimbote.classList.remove('activeMe')
    break;
    case 'Callao':
 
      initMap( -12.0581093,-77.1505595)
          matarani.classList.remove('activeMe')
    // mollendo.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.add('activeMe')
    salaverry.classList.remove('activeMe')
         chimbote.classList.remove('activeMe')
    break;
    case 'Salaverry':
    initMap( -8.2285229, -78.9853852)

           matarani.classList.remove('activeMe')
    // mollendo.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.add('activeMe')
         chimbote.classList.remove('activeMe')
    break;

    case 'Paita':
    initMap( -5.085106,-81.1116857)
           matarani.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.remove('activeMe')
    paita.classList.add('activeMe')
    chimbote.classList.remove('activeMe')
    break;
    
    case 'Chimbote':
    initMap( -9.075121, -78.608711 )
           matarani.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.remove('activeMe')
    paita.classList.remove('activeMe')
    chimbote.classList.add('activeMe')
    break;

  default:
    break;
}
  
}

function activeMap(element) {
  const id = element.id
  if (id === 'AgenciaOption') {
  const agencia = document.getElementById('agencia')
  const estiba = document.getElementById('estiba')
  const operaciones = document.getElementById('operaciones')
  const AgenciaOption = document.getElementById('AgenciaOption')
  const estibaOption = document.getElementById('estibaOption')
  const operacionesOption = document.getElementById('operacionesOption')

  AgenciaOption.classList.add('activeH1')
  estibaOption.classList.remove('activeH1')
    operacionesOption.classList.remove('activeH1')
    agencia.style.display = 'flex'
estiba.style.display = 'none'
operaciones.style.display = 'none'
  }

}