// Initialize and add the map
function initMap(lat, lng) {
  // The location of Uluru
  const uluru = { lat:  lat || -16.988333333333333 , lng:lng || -72.14888888888889 };
  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("puertos_map"), {
    zoom: 9,
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

switch (name) {
  case 'Matarani':

    initMap(-16.988333333333333,  -72.14888888888889)
       matarani.classList.add('activeMe')
    // mollendo.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.remove('activeMe')
      //  chimbote.classList.remove('activeMe')
    break;

    case 'Ilo':
  
      initMap(-17.638333333333332, -71.45)
     matarani.classList.remove('activeMe')
  
    ilo.classList.add('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.remove('activeMe')
        //  chimbote.classList.remove('activeMe')
    break;
    case 'Callao':
 
      initMap( -12.036666666666667, -77.22833333333334)
          matarani.classList.remove('activeMe')
    // mollendo.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.add('activeMe')
    salaverry.classList.remove('activeMe')
        //  chimbote.classList.remove('activeMe')
    break;
    case 'Salaverry':
    initMap( -8.216666666666667, -5.038333333333333)

           matarani.classList.remove('activeMe')
    // mollendo.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.add('activeMe')
        //  chimbote.classList.remove('activeMe')
    break;

    case 'Paita':
    initMap( -5.038333333333333, -81.21833333333333)
           matarani.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.remove('activeMe')
    paita.classList.add('activeMe')
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