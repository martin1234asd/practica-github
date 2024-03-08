const lista = []

const agregarParticipantes=(event)=>{
    event.preventDefault()
    let nombre = document.getElementById("nombre")
    let posicion = document.getElementById("posicion") 

    let registros = {
        nombre: nombre.value,
        posicion: posicion.value,
        id:lista.length
    }
    lista.push(registros)
    nombre.value = ""
    posicion.value = ""

    mostrarLista()

}

const mostrarLista = () =>{
    let salida = document.getElementById("salida")
    salida.innerHTML = ""
    lista.map((registros)=>{
        salida.innerHTML +=`
        <tr>
            <th>${registros.id} </th>
            <th>${registros.nombre} </th>
            <th>${registros.posicion} </th>
        </tr>
        `    
    })
}