function showMaps(name) {
  const container = document.getElementById('puertos_map')
  const matarani = document.getElementById('Matarani')
  const mollendo = document.getElementById('Mollendo')

  const ilo = document.getElementById('Ilo')
  const callao = document.getElementById('Callao')
  const salaverry = document.getElementById('Salaverry')
const chimbote = document.getElementById('Chimbote')

switch (name) {
  case 'Matarani':
    container.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.46434591286015!2d-72.10832574246116!3d-17.002588316461658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91415b02a934acad%3A0x2469f3ec9178c4c1!2sPuerto%20de%20Matarani!5e0!3m2!1ses-419!2spe!4v1606069840165!5m2!1ses-419!2spe" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    matarani.classList.add('activeMe')
    mollendo.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.remove('activeMe')
       chimbote.classList.remove('activeMe')
    break;
    case 'Mollendo':
    container.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1134.2119248459437!2d-72.01814997870781!3d-17.022739708057017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b4265a3054f%3A0xa9b0374689ed003c!2sPuerto!5e0!3m2!1ses-419!2spe!4v1606069877722!5m2!1ses-419!2spe" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        matarani.classList.remove('activeMe')
    mollendo.classList.add('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.remove('activeMe')
         chimbote.classList.remove('activeMe')
    break;
    case 'Ilo':
    container.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1344.271500672857!2d-71.34331295524072!3d-17.641917260659937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91445b0f063390f1%3A0x5366c51be84b5889!2sEl%20Puerto%2C%20Ilo!5e0!3m2!1ses-419!2spe!4v1606069899403!5m2!1ses-419!2spe" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
     matarani.classList.remove('activeMe')
    mollendo.classList.remove('activeMe')
    ilo.classList.add('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.remove('activeMe')
         chimbote.classList.remove('activeMe')
    break;
    case 'Callao':
    container.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11037.083180122161!2d-77.13248537231654!3d-12.029873294485608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cdcc6bbfffa3%3A0x4aed9b274e053057!2sCallao!5e0!3m2!1ses-419!2spe!4v1606069928547!5m2!1ses-419!2spe" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
          matarani.classList.remove('activeMe')
    mollendo.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.add('activeMe')
    salaverry.classList.remove('activeMe')
         chimbote.classList.remove('activeMe')
    break;
    case 'Salaverry':
    container.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7897.7382073154595!2d-78.98159878608182!3d-8.215916489407666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad18ddea74c007%3A0x68d5024eaf70672d!2sSalaverry!5e0!3m2!1ses-419!2spe!4v1606069946664!5m2!1ses-419!2spe" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
           matarani.classList.remove('activeMe')
    mollendo.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.add('activeMe')
         chimbote.classList.remove('activeMe')
    break;
      case 'Chimbote':
    container.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7897.7382073154595!2d-78.98159878608182!3d-8.215916489407666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad18ddea74c007%3A0x68d5024eaf70672d!2sSalaverry!5e0!3m2!1ses-419!2spe!4v1606069946664!5m2!1ses-419!2spe" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
           matarani.classList.remove('activeMe')
    mollendo.classList.remove('activeMe')
    ilo.classList.remove('activeMe')
    callao.classList.remove('activeMe')
    salaverry.classList.remove('activeMe')
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