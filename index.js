function adicionar(){
let num1 = (window.document.getElementById(`usuario`).value);
let senha = parseInt(window.document.getElementById(`usuarioSenha`).value);

if( num1 === `Diego`){
    if (senha.length === 0 || senha != 1234) {
        window.alert(`Por favor, Digite a senha correta.`);
    }
    else if (senha === 1234) {
        window.alert(`Seja Bem-vindo ${num1}!`);
    }
}
else if( num1 != `Diego`){
    window.alert(`Digite o usuário correto`)
    }
}
