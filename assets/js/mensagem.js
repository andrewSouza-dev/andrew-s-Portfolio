function enviarWhatsApp(event) {
    event.preventDefault()
    // Variaveis do projeto
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5511911466165';

    // Mensagem
    const texto = `Olá me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto)

    // url base
    const baseUrl = `https://wa.me/${telefone}?text=`

    // url codificada
    const url = baseUrl + msgFormatada
    


    window.open(url, '_blank')
}






