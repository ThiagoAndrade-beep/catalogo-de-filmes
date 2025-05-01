const loginContainer = document.querySelector(".login-container")
const inputEmailLogin = document.querySelector("#input-email-login")
const inputSenhaLogin = document.querySelector("#input-senha-login")
const btnLogin = document.querySelector("#btn-login")
const registerLogin = document.querySelector("#register-login")
const erroLogin = document.querySelector("#erro-login")

function verificationLogin() {
    const emailLogin = inputEmailLogin.value.trim()
    const senhaLogin = inputSenhaLogin.value.trim()

    if(!emailLogin || !senhaLogin) {
        alert("Atenção! Preencha todos os campos")
        return
    }

    const userLogin = JSON.parse(localStorage.getItem('usuarios')) || []
    const loginExist = userLogin.some(usuario => usuario.email === emailLogin && usuario.senha === senhaLogin)

    if(loginExist) {
        window.location.href = './catalogo/catalogo.html'
        inputEmailLogin.classList.remove("input-error")
        inputSenhaLogin.classList.remove("input-error")
        erroLogin.innerHTML = ""
    }else {
        erroLogin.innerHTML = "Erro: Email ou senha inválido"
        inputEmailLogin.classList.add("input-error")
        inputSenhaLogin.classList.add("input-error")
        inputEmailLogin.focus()
    }
   
    inputSenhaLogin.value = ''
}

btnLogin.addEventListener("click", (e) => {
    e.preventDefault()
    verificationLogin()
})

const inputEmailCadastro = document.querySelector("#input-email-cadastro")
const inputSenhaCadastro = document.querySelector("#input-senha-cadastro")
const registerCadastro = document.querySelector("#register-cadastro")
const btnCadastro = document.querySelector("#btn-cadastro")
const btnLimpar = document.querySelector("#limpar")

function cadastroUsuario() {
    const email = inputEmailCadastro.value.trim()
    const senha = inputSenhaCadastro.value.trim()

    if(!email || !senha) {
        alert("Preencha todos os campos necessários")
        return
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!regex.test(email)) {
        alert("Email inválido")
        return
    }

    let usuario = JSON.parse(localStorage.getItem("usuarios")) || []
    const cadastroExist = usuario.some(usuario => usuario.email === email)

    if(cadastroExist) {
        alert("Email já cadastrado")
        return
    }

    const novoUsuario = {
        email,
        senha
    }

    usuario.push(novoUsuario)

    localStorage.setItem("usuarios", JSON.stringify(usuario))
    alert("Sucesso! Cadastro realizado")
}

btnCadastro.addEventListener("click", () => {
    cadastroUsuario()
})

//entrando no cadastro
const cadastroContainer = document.querySelector(".cadastro-container")
registerLogin.addEventListener("click", () => {
   cadastroContainer.classList.remove("hide") 
   loginContainer.classList.add("hide")
   
})

registerCadastro.addEventListener("click", () => {
    cadastroContainer.classList.add("hide") 
    loginContainer.classList.remove("hide")
})

btnLimpar.addEventListener("click", () => {
    localStorage.clear()
})

