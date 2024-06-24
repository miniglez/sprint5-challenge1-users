// número aleatorio para la edad --> OK
// capturar elemento para poner los usuarios --> OK
// Acceder a la API --> https://jsonplaceholder.typicode.com/users
// spread operator con nuevos datos propios + los que vienen de la API
// Usar el destructuring
// poner los datos en la página
// CSS

// name, age, username, img, phone, email, company, address
// usuario.address.street, usuario.address.suite, usuario.address.city



const userList = document.getElementById("listaUsuarios")
const randomAge = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); 



fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(users => {
  const arrUsers = users.map(user => {
    const newUser =  {
      ...user,
      address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`,
      age: randomAge(18, 50),
      img: `../assets/img/${user.id}.jpeg`,
      company: user.company.name
    }
    return newUser
  });

  arrUsers.forEach(user => {
    const {name, username, age, img, company, address, email, phone} = user
    const template = `
    <li>
      <div class="imageanduser">
        <div class="userdata">
          <p><span>Name:</span> ${name}</p>
          <p><span>Edad:</span> ${age}</p>
          <p><span>username:</span> ${username}</p>
          <p><span>email:</span> ${email}</p>
          <p><span>phone:</span> ${phone}</p>
        </div>
        <img src=${img} alt=${name}/>
      </div>
      <div class="address">
        <p><span>company:</span> ${company}</p>
        <p><span>address:</span> ${address}</p>
      </div>
    </li>
  `    
  userList.innerHTML += template
  });

  console.log(arrUsers)



  
  
  
  
  
  




})
.catch(err => console.error("Este es el error", err))


