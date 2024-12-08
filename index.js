async function buscarDados() {
    const armazenarDados = await fetch('https://api.github.com/users/geremiasrds')
    return await armazenarDados.json()

}
async function buscarRepos() {
    const armazenarDados = await fetch('https://api.github.com/users/geremiasrds/repos')
    return await armazenarDados.json()

}
document.getElementById("gitHub").addEventListener('click', () => {
    let pegar = document.querySelectorAll(".perfil")
    let buscar = pegar[0]
    buscar.classList.add("novo")

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


    })
    
})

function whatsapp(){
window.location.href = ("https://wa.me/5591986128843?text=Ola")
}
