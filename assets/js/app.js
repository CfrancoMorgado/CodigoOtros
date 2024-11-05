const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');// la clase location no existía, se creo en el html



async function  displayUser(username) {  //el await de la funcion solo se puede usar para las funciones declaradas async
  $n.textContent = 'cargando...';
  try {   //se metió todo en un try catch para optimizar el codigo, en lugar de llamarse al final
  
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();  // se debe declarar la constante data antes de usarse
  console.log(data);
  $n.textContent = `${data.name}`; //n, b y 1 deben ir entre backticks
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;

}  catch (err) {
  
  $n.textContent = `Algo salió mal: ${err}` //faltaba el "$" antes de la n para el nombre de la variable
}
}


displayUser('stolinski');