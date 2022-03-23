document 
//va jalar el elemento de id que vamos a tener en el index-->
.getElementById("producto-formulario")
.addEventListener("submt", function (elemento){

    elemento.preventDefault();// evalua el comportamiento del elemento

    //obtener valores de formulario
    const nombre= document.getElementById("name").value,
    precio = document.getElementById("precio").value,
    año = document.getElementById("año").value;

    // Crear nuevo objeto producto
    const product = new Producto(nombre, precio, año);

    // Crear nuevo Usuario
    const usuario = new Usuario();

    // Boton de validacion
    if(nombre === " "|| precio === " "|| año ===""){
        usuario.showMessage("Porfavor insertar nombre de usuario");
    }

    // Guardar producto
    usuario.AddProducto(producto);
    usuario.showMessage("Producto agregado correctamente");
    usuario.resetform();
});

document.getElementById("Lista-producto").addEventListener("click",(elemento)=> {
    const usuario= new Usuario();
    usuario.deleteProduct(elemento.target);
    elemento.preventDefault();
});

// Producto clase

export class Producto{
    constructor(nombre, precio, año){
    this.nombre = nombre;
    this.precio = precio;
    this.año = año;
    }
}