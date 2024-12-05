document.getElementById("gitHub").addEventListener('click', () =>{

meuGitHub()
estilos()
})



async function buscarDados() {
    const armazenarDados = await fetch('https://api.github.com/users/geremiasrds')
    return await armazenarDados.json()

}


function meuGitHub() {
    let aplicarInfor = buscarDados().then(infor => {
        let addInfor =
        `
        <div class="o-novo">
        <img src="${infor.avatar_url}" alt="Foto de perfil"/>
        <h2>${infor.name}</h2>
        <strong>${infor.bio}</strong>
        </div>
        `
        document.querySelector(".novo").innerHTML = addInfor
        addRepos()
    })
}


async function buscarRepos() {
    const armazenarDados = await fetch('https://api.github.com/users/geremiasrds/repos')
    return await armazenarDados.json()

}

function addRepos(){
    buscarRepos().then(dadosRepos => {
        let meuRepos = ""
        dadosRepos.forEach(repos => {
          meuRepos +=
          `
          <li><a href="${repos.html_url}" target="_blank">${repos.name}</a></li>
          `  

        })
        document.querySelector(".novo").innerHTML += 
        `
        <div class="o-novo">
        <h2>REPOSITORIOS</h2>
        <ul>${meuRepos}</ul>
        </div>
        `

    })
}

function estilos(){
    let pegar = document.getElementsByTagName("main")
    let mostar = pegar [0]
    mostar.style.display="none"
}
