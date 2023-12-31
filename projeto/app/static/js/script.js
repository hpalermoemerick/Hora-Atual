window.onload = () => {
    mostraHorario();
}

function mostraHorario() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    document.querySelector('span').innerText = `${(horas+'').padStart(2, '0')} : ${(minutos+'').padStart(2, '0')} : ${(segundos+'').padStart(2, '0')}`;
}

setInterval(() => {
    mostraHorario();
}, 1000)