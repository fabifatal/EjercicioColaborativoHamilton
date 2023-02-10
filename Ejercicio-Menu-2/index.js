/*Ejercicio
vamos a pedir al usuario que ingrese la cantidad alumnos a los cuales les asignará una nota, luego de que ingrese la catidad de notas de cada alumnos, se va a desplegar un menú.
las opciones del menú serán la siguentes:
1.- mostrar el promedio de notas
2.- mostrar si la nota es aprobatoria o reprobatoria
3.- mostrar si la nota está por sobre o por debajo del promedio del curso
*/

//Creamos una función que me pida números según una condición

function pedirNumero (textoPrompt/*,mayorQue,menorQue*/){
  num = null
  while(num!="" /*&& num>mayorQue && num<menorQue*/){
    num = parseInt(prompt(textoPrompt))
    if (isNaN(num)){
      console.log("Debe ingresar un número. Intente de nuevo por favor.")
    }/*else if (num>mayorQue){
      console.log("El número deber ser mayor que "+mayorQue+". Intente de nuevo")
    }else if (num<menorQue){
      console.log("El número deber ser menor que "+menorQue+". Intente de nuevo")
    }*/
  }return num
}

//Definimos cantidad de alumnos usando nuestra función

cantAlumnos = pedirNumero("¿Cuántos alumnos tiene el curso?")

//Pedimos al usuario ingresar una nota por alumno, por lo que usamos un 'for' igual a la cantidad de alumnos

for (i = 1 ; i <= cantAlumnos ; i++){
  nota = parseInt(prompt("Ingrese nota ="))
  if (isNaN(nota)){
    nota = parseInt(prompt("Por favor, ingrese un número ="))
  }else if(nota){}
}

function menu(textoMenu, arrayMenu) {

  let opcion = 1
  while (opcion != 0) {
    function ejecutarMenu(array, opcion) {
      let indiceArray = opcion - 1
      if (indiceArray >= 1){
        return array[indiceArray]()
      } 
    }
    do {
      console.log(textoMenu)
      opcion = parseInt(prompt("Ingresa número opción: "))
    } while (opcion < 0 || opcion > arrayMenu.length)
    ejecutarMenu(arrayMenu, opcion)
    consulta = prompt("¿Desea realizar otro ejercicio? (si = y ; no = cualquier tecla): ");
    if (consulta == "y") {
    } else {
      console.log("¡Nos vemos!")
      break
    }
  }
}
