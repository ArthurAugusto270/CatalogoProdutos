function mostrarProduto(produto) {

    let imagem = document.getElementById("imagem");
    let descricao = document.getElementById("descricao");
    let preco = document.getElementById("preco");

    if (produto === "") {
        descricao.innerText = "Selecione um produto válido!";
        preco.innerText = "";
        return;
    }

    switch (produto) {

        case "alexa":
            imagem.src = "alexa.png";
            descricao.innerText = "Alexa - Assistente virtual inteligente da Amazon.";
            preco.innerText = "Preço: R$ 299,00";
            break;

        case "computador":
            imagem.src = "computador.jpg";
            descricao.innerText = "Computador - Ideal para trabalho e estudos.";
            preco.innerText = "Preço: R$ 3.500,00";
            break;

        case "tablet":
            imagem.src = "tablet.jpg";
            descricao.innerText = "Tablet - Portátil e prático para o dia a dia.";
            preco.innerText = "Preço: R$ 1.200,00";
            break;

        case "notebook":
            imagem.src = "notebook.jpg";
            descricao.innerText = "Notebook - Perfeito para mobilidade e produtividade.";
            preco.innerText = "Preço: R$ 2.800,00";
            break;

        case "microfone":
            imagem.src = "microfone.jpg";
            descricao.innerText = "Microfone - Som com perfeita qualidade e transmissão perfeita";
            preco.innerText = "Preço: R$ 309,00";
            break;

        case "steamdeck":
            imagem.src = "steamdeck.jpg";
            descricao.innerText = "Steamdeck - Seu computador portátil perfeito para levar para qualquer lugar e otimo desempenho / Versão 8gb RAM 512gb de armazenamento  ";
            preco.innerText = "Preço: R$ 5.899,90";
            break;

        case "smartphone":
            imagem.src = "Smartphone.jpg";
            descricao.innerText = "Smartphone - Xiaomi POCO C85 12 RAM e 512GB Armazenamento";
            preco.innerText = "Preço: R$ 2.900,00";
            break;

        case "impressora":
            imagem.src = "impressora.png";
            descricao.innerText = "Impressora Epson - Perfeita para uso domestico ! Imprima suas imagens e trabalhos da melhor forma";
            preco.innerText = "Preço: R$ 1.600,00";
            break;

        default:
            descricao.innerText = "Produto não encontrado.";
            preco.innerText = "";
    }
}
function resetar() {
    let imagem = document.getElementById("imagem");
    let descricao = document.getElementById("descricao");
    let preco = document.getElementById("preco");

    imagem.src = "eletronicos.jpg";
    descricao.innerText = "Escolha um produto...";
    preco.innerText = "";
}