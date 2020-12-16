
function ocultarMision(element) {
  const mision_container_active = document.getElementById('mision_container_active')
  const mision_container = document.getElementById('mision_container')

  const vision_container_active = document.getElementById('vision_container_active')
  const vision_container = document.getElementById('vision_container')

    const valores_container_active = document.getElementById('valores_container_active')
  const valores_container = document.getElementById('valores_container')

  if (element === 'Mision') {
    mision_container_active.style.display = "flex";
    mision_container.style.display = 'none'
  }
    if (element === 'Vision') {
    vision_container_active.style.display = "flex";
    vision_container.style.display = 'none'
   }
      if (element === 'Valores') {
        valores_container_active.style.display = "flex";
        valores_container.style.display = 'none'
  }

}

function mostrarMision(element) {
    const mision_container_active = document.getElementById('mision_container_active')
  const mision_container = document.getElementById('mision_container')

  const vision_container_active = document.getElementById('vision_container_active')
  const vision_container = document.getElementById('vision_container')

  const valores_container_active = document.getElementById('valores_container_active')
  const valores_container = document.getElementById('valores_container')

  if (element === 'Mision') {
    mision_container_active.style.display = "none";
    mision_container.style.display = 'flex'
    
 vision_container.style.display = 'none'
   vision_container_active.style.display = 'flex'
        
 valores_container.style.display = 'none'
   valores_container_active.style.display = 'flex'
    


  }

    if (element === 'Vision') {
        vision_container_active.style.display = "none";
      vision_container.style.display = 'flex'
      
       mision_container.style.display = 'none'
   mision_container_active.style.display = 'flex'
        
 valores_container.style.display = 'none'
   valores_container_active.style.display = 'flex'

  }

      if (element === 'Valores') {
        valores_container_active.style.display = "none";
        valores_container.style.display = 'flex'

   mision_container.style.display = 'none'
        mision_container_active.style.display = 'flex'

            vision_container_active.style.display = "flex";
      vision_container.style.display = 'none'

       
  }
}


function MostrarMenu() { 

  const nav_ul_respon = document.getElementById('nav_ul_respon')
 
  nav_ul_respon.classList.toggle('nav_ul_respon-active')

}