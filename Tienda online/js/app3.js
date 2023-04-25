RangePrice = document.querySelector('#customRange3');
Content = document.querySelector('#mostrarContenido');
Filtro = document.querySelector('#filtro');
Restaurant = document.querySelector('#collapseOne');
price = document.querySelector('#collapseTwo');
Time = document.querySelector('#collapseThree');
Score = document.querySelector('#collapseFour');
Categories =  document.querySelector('#collapseFive');


const dataSearch   = {
  

}

const formatterPeso = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
})

let ids=0;
products.forEach(p => {p.id= ids++})


document.addEventListener('DOMContentLoaded', function (){



 
    
  
 

  for(let i=0; i < Restaurant.children[0].children[0].children.length; i++ ){
    Restaurant.children[0].children[0].children[i].addEventListener('click', searchOption)
  }

  for(let i=0; i < Time.children[0].children[0].children.length; i++ ){
    Time.children[0].children[0].children[i].addEventListener('click', searchOption)
  }
  for(let i=0; i < Score.children[0].children.length; i++ ){
    Score.children[0].children[i].addEventListener('click', searchOption)
  }
  for(let i=0; i < Categories.children[0].children.length; i++ ){
    Categories.children[0].children[i].addEventListener('click', searchOption)
  }
  
  


  })
 //  buttonF.addEventListener('click', eliminarF)
   
  
  RangePrice.addEventListener('click', showValue);

 
  function showValue(e){
    let Price = parseInt(RangePrice.value)*10000
   

     e.target.previousElementSibling.innerText = `$0.0 - ${formatterPeso.format(Price)}`;
     searchOption(e)
   }


function searchOption(e){
  
  switch(e.target.parentElement.parentElement.parentElement.id || e.target.parentElement.parentElement.id ){
    case 'collapseOne':
      dataSearch.Restaurante = e.target.textContent.trim();
      filterProducts()
     
      break;
    case 'collapseTwo': 
      dataSearch.Precio = parseInt(RangePrice.value)*10000;
      filterProducts()
     
      break;
    case 'collapseThree':
      dataSearch.TiempoEntrega = e.target.textContent.trim().split(' ');
      filterProducts()
    
      break;
    case 'collapseFour':
      
      dataSearch.Valoracion = e.target.textContent.trim().split(' ');
      filterProducts()
   
      break;
    case 'collapseFive':
        dataSearch.Categoria = e.target.textContent.trim();
        filterProducts()
      
        break
    //dataSearch.Restaurante = e.target.textContent.trim();
     }
    
     let  buttonF = document.querySelectorAll('.bFiltro');
     buttonF.forEach(b =>{
   
       b.addEventListener('click', eliminarF)
     })

}




let html = '';
let html2 ='';

function showProducts (resultado){
  console.log(dataSearch)
   if(Object.entries(dataSearch).length === 0 ){
   
    Filtro.innerHTML = '';
    
  }
 
   Object.values(dataSearch).forEach(data => {

  
   if(Array.isArray(data)) {
     html2 = html2 + `
    <div class="primary filter">
    <h6 class="primary">${data.join("")}</h6>
    <button type="button" class="btn btn-danger bFiltro"> X </button>
    </div>
 `
 ;

  Filtro.innerHTML = html2;

   }else {
    html2 = html2 + `
       <div class="primary filter">
       <h6 class="primary">${data}</h6>
       <button type="button" class="btn btn-danger bFiltro"> X </button>
       </div>
    `
    ;

    Filtro.innerHTML = html2;

}})

  

 
   resultado.forEach(r =>{

    switch (r.Restaurante){
        case 'Chilis':
          r.logo = 'Basedatos/Restaurantes/Chilis/icono.png'
        break;
        case 'Cielito Lindo':
          r.logo = 'Basedatos/Restaurantes/CielitoLindo/icono.jpg'
          break;
          case 'La tapa':
            r.logo = 'Basedatos/Restaurantes/Latapa/icono.jpg'
            break
      }
       html = `
        
       <div class="card" style="width: 16rem;">
             
              <img src= "${r.img}" class="card-img-top" alt="No disponible">
              <div class="card-body">
               <div class="icon">
               <img src="${r.logo}" class="iconos"  alt=""> <h5 class="card-title">${r.Nombre}</h5>
              </div>
                <p class="card-text">${r.Descripcion}</p>
              <h5 class="card-title">  ${formatterPeso.format(r.Precio)} </h5>
              <h5 class="bi bi-star-fill"> ${r.Valoracion} </h5>
              <a href="#" class="btn btn-primary agregarCarrito" data-id="${r.id}">Añadir al carrito </a>

           </div>
          </div>
     
      ` + html;

      Content.innerHTML = html;
    })
      
      

    
   }
  

  

function filterProducts(a){

  const resultado = products.filter(filtrarRestaurante).filter(filtrarCategorias).filter(filtrarValoracion).filter(filtrarTiempo).filter(filtrarPrecio)
  
  showProducts(resultado)

  html = '';
  html2 = '';



}

function filtrarRestaurante(pro){
  const {Restaurante} = dataSearch;
  if(Restaurante){
  return pro.Restaurante == dataSearch.Restaurante;
}
return pro;
}
function filtrarPrecio(pro){
  const {Precio} = dataSearch;
  if(Precio){
  return pro.Precio <= dataSearch.Precio;
  }
  return pro;
}

function filtrarTiempo(pro){
  const {TiempoEntrega} = dataSearch;
  if(TiempoEntrega){
  return parseInt(dataSearch.TiempoEntrega[0]) <= pro.TiempoEntrega && pro.TiempoEntrega <= parseInt(dataSearch.TiempoEntrega[2])
  }
  return pro;
}

function filtrarCategorias(pro){
  const {Categoria} = dataSearch;
  if(Categoria){
  return pro.Categoria == dataSearch.Categoria
  }
  return pro;
}


function filtrarValoracion(pro){
  const {Valoracion} = dataSearch;
  if(Valoracion){
  return parseInt(dataSearch.Valoracion[0]) <= pro.Valoracion && pro.Valoracion <= parseInt(dataSearch.Valoracion[2])
  }
  return pro;
}

function eliminarF(f){
  
  Object.values(dataSearch).forEach(d =>{

    let index =0;
    console.log(d)
    console.log(f.target.previousElementSibling.textContent)
    if(Array.isArray(d)){
       
       let d1 = d.join("")
  
       if(d1 == f.target.previousElementSibling.textContent){
        
        index = Object.values(dataSearch).indexOf(d); 
        delete dataSearch[Object.keys(dataSearch)[index]] 
        filterProducts();
     }

    }else {
    if(d == f.target.previousElementSibling.textContent){
      index = Object.values(dataSearch).indexOf(d);  
      delete dataSearch[Object.keys(dataSearch)[index]]
      filterProducts();
    }
  }
 
})
 
let  buttonF = document.querySelectorAll('.bFiltro');
buttonF.forEach(b =>{

  b.addEventListener('click', eliminarF)
})

}