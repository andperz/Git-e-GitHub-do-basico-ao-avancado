let banners = ["Os melhores móveis ecológicos!", "Móveis de madeira de demolição!", "Móveis com madeira certificada!"];
let bannerAtual = 0;

function trocarBanner() {
    bannerAtual = (bannerAtual + 1) % banners.length;
    document.querySelector('p#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocarBanner, 2000);