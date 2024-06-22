

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const userList = document.getElementById("listaUsuarios")
        let contador = 1;
        data.forEach(user => {
            const template = `
                <li>
                    <div class="imageAndUser">
                        <div class="userData">
                            <p><span>Name: </span>${user.name}</p>
                            <p><span>Age: </span>${(Math.floor(Math.random() * 40)) + 20}</p>
                            <p><span>Username: </span>${user.username}</p>
                            <p><span>Phone: </span>${user.phone}</p>
                            <p><span>Email: </span>${user.email}</p>
                        </div>
                        <img src="../assets/img/${contador}.jpeg">
                    </div>
                    <div class="address">
                        <p><span>Company: </span>${user.company.name}</p>
                        <p><span>Adress: </span>${user.address.street}, ${user.address.suite}, ${user.address.city}
                    </div>
                </li>
            ` 
            userList.innerHTML += template
            contador++
        });
    })