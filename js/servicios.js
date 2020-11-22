function mostrarMe(element) {
  const id = element.id
  console.log("QUE HAY EN ID", id)

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

    if (id==='estibaOption') {
  const agencia = document.getElementById('agencia')
  const estiba = document.getElementById('estiba')
  const operaciones = document.getElementById('operaciones')
  const AgenciaOption = document.getElementById('AgenciaOption')
  const estibaOption = document.getElementById('estibaOption')
  const operacionesOption = document.getElementById('operacionesOption')

  estibaOption.classList.add('activeH1')
  AgenciaOption.classList.remove('activeH1')
    operacionesOption.classList.remove('activeH1')
    agencia.style.display = 'none'
estiba.style.display = 'flex'
operaciones.style.display = 'none'
  }



      if (id==='operacionesOption') {
  const agencia = document.getElementById('agencia')
  const estiba = document.getElementById('estiba')
  const operaciones = document.getElementById('operaciones')
  const AgenciaOption = document.getElementById('AgenciaOption')
  const estibaOption = document.getElementById('estibaOption')
  const operacionesOption = document.getElementById('operacionesOption')

  operacionesOption.classList.add('activeH1')
  AgenciaOption.classList.remove('activeH1')
    estibaOption.classList.remove('activeH1')
    agencia.style.display = 'none'
estiba.style.display = 'none'
operaciones.style.display = 'flex'
  }


}