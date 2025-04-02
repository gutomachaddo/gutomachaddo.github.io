function invertColors() {
    const body = document.body;
    const textContent = document.querySelector('.text-content');
    const projects = document.querySelectorAll('.project');
    const invertButton = document.getElementById('invert-colors');

    const isInverted = body.classList.toggle('inverted');

    if (isInverted) {
        body.style.background = 'linear-gradient(to bottom right, #f5f5f5, #555)';
        textContent.style.background = 'linear-gradient(90deg, #00ff7f, #ff7f00, #00ff7f)';
        textContent.style.color = '#000';
        projects.forEach(project => {
            project.style.background = 'linear-gradient(90deg, #00ff7f, #ff7f00, #00ff7f)';
            project.style.color = '#000';
        });
        invertButton.style.backgroundColor = '#000';
        invertButton.style.color = '#fff';
    } else {
        body.style.background = 'none'; /* Remove o background linear-gradient */
        body.style.backgroundImage = "url('https://img.freepik.com/vetores-gratis/banner-social-preto-geometrico-de-memphis_53876-116843.jpg')"; /* Adiciona a imagem de fundo */
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        body.style.backgroundRepeat = 'no-repeat';
        textContent.style.background = 'linear-gradient(90deg, #ff7f00, #ff0000, #ff7f00)';
        textContent.style.color = '#fff';
        projects.forEach(project => {
            project.style.background = 'linear-gradient(90deg, #ff7f00, #ff0000, #ff7f00)';
            project.style.color = '#fff';
        });
        invertButton.style.backgroundColor = '#ff7f00';
        invertButton.style.color = '#fff';
    }
}

// Adiciona evento de clique no botão para inverter cores
document.getElementById('invert-colors').addEventListener('click', invertColors);