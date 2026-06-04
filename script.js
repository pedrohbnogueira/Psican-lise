// Gerenciamento e interações básicas do site
document.addEventListener("DOMContentLoaded", () => {
    
    // Suaviza a entrada do site com uma animação leve de opacidade
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease-in-out";
    
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 50);

    // Monitoramento interno de cliques em links (ajuda em futuros logs de conversão)
    const botoesAcao = document.querySelectorAll(".btn");
    botoesAcao.forEach(botao => {
        botao.addEventListener("click", function() {
            const destino = this.getAttribute("href");
            console.log(`Usuário clicou para ir para: ${destino}`);
        });
    });
});