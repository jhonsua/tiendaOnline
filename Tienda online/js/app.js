

const tabArray = Array.from (document.querySelectorAll("#select-tab"));
const content = Array.from  (document.querySelectorAll("#tab"));
const carrito = document.querySelector('#carrito')
const contenido = document.querySelector('#mostrarContenido')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito = document.querySelector('#vaciar-carrito')

let articulosCarrito= [];


tabArray.forEach (tab =>
  {
    tab.addEventListener('click', ()=> {
      tabArray.forEach(t => {
        t.classList.remove('acti')
      })
      const indexTab = tabArray.indexOf(tab);
      content.forEach(c => {
        if(content.indexOf(c) == indexTab){
          c.classList.remove('d-none');
        }
        else {
          c.classList.add('d-none');
        }
      })
      tab.classList.add('acti')     
    })
  })


 loadEvents();
 function loadEvents(){
  contenido.addEventListener('click', agregarCarrito)
  carrito.addEventListener('click', eliminarProducto)
  vaciarCarrito.addEventListener('click', () => {articulosCarrito=[]; limpiarHTML()})
  document.addEventListener('DOMContentLoaded', () => {
     articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
     carritoHTML();
  })
 }

 function agregarCarrito(e) {
  e.preventDefault();
   if(e.target.classList.contains('agregarCarrito')){
    const productoSeleccionado =e.target.parentElement.parentElement;
    leerProducto(productoSeleccionado);
    
    carritoHTML();
   } }

 // leer los datos del producto al dar click en agregar al carrito

 function leerProducto(producto){
  
   const infoProducto = {
    imagen: producto.querySelector('img').src,
    nombre: producto.querySelector('h5').textContent,
    precio: producto.querySelectorAll('h5')[producto.querySelectorAll('h5').length -1].textContent,
    id:     producto.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
   
   }
   
   const existe = articulosCarrito.some(producto => producto.id === infoProducto.id)
   if(existe){
    // actualizar la cantidad
    productos = articulosCarrito.map(producto => {
    if(producto.id === infoProducto.id){
       producto.cantidad++;
       return producto
     } else { return producto}
     articulosCarrito = [...productos]

})
   }else {   
   //agrega elementos al array carrito
    articulosCarrito = [...articulosCarrito, infoProducto];
   }}

 // carritoHTML

 function carritoHTML(){
  
  limpiarHTML();

   articulosCarrito.forEach(articulo => {
   const row = document.createElement('tr')
   row.innerHTML = `
    <td>
     <img src="${articulo.imagen}" width="100" ></img>
    </td>
    <td>
     <h5> ${articulo.nombre} </h5>
    </td>
    <td>
    <h5>${articulo.precio}</h5>
    </td>
    <td>
    <h5>  ${articulo.cantidad}</h5>
    </td>
    <td>
    
    <a href="#" class="borrar-articulo" data-id="${articulo.id}" > X </a>
    </td>`;
   // agrega al tbody
   contenedorCarrito.appendChild(row);
   // agrego al localstorage
   sincronizarStorage()

   })
 }

 function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
 }

 function limpiarHTML(){
  while(contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
 }

 function eliminarProducto(e){
  if(e.target.classList.contains('borrar-articulo')){

    const productoId = e.target.getAttribute('data-id');  

    let articulos = articulosCarrito.forEach(articulo => {
      if(articulo.id == productoId && articulo.cantidad > 1)
      {
        console.log(articulosCarrito)
        --articulo.cantidad
        
      } else if(articulo.cantidad == 1) {
        
        articulosCarrito = articulosCarrito.filter(product => product.id !== productoId)
        
      }
      carritoHTML();
    })
  } }