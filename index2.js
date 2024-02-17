function Verificar(){
const email = (window.document.querySelector(`.email`).value);

if (email === `diegoluisfc`) {
    window.alert(`Um e-mail com a recuperação da conta foi enviado a seu e-mail.`);
} else if (email != `diegoluisfc`) {
    window.alert(`Digite o e-mail correto.`);
}
}