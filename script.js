function createStars() {
    const container = document.querySelector('.stars-container');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2.5 + 'px';
        star.style.width = size; star.style.height = size;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        container.appendChild(star);
    }
}
createStars();

function nextPlanet(sceneNumber) {
    const ship = document.getElementById('spaceship-hero');
    const song = document.getElementById('mySong');
    
    if(sceneNumber === 2) song.play().catch(() => {});

    ship.classList.add('flying');

    setTimeout(() => {
        showScene(sceneNumber);
        ship.classList.remove('flying');
        ship.classList.add('reset-pos');

        setTimeout(() => {
            ship.classList.remove('reset-pos');
            ship.style.left = "5%";
        }, 50);
    }, 1500);
}

function showScene(sceneNumber) {
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    document.getElementById('scene' + sceneNumber).classList.add('active');
}

function moveButton() {
    const btn = document.getElementById('noBtn');
    btn.style.left = Math.random() * (window.innerWidth - 150) + 'px';
    btn.style.top = Math.random() * (window.innerHeight - 100) + 'px';
}

function celebrate() {
    document.getElementById('container').innerHTML = `
        <div class="active">
            <span class="planet-icon">🛰️❤️</span>
            <h1>Mission Accomplished!</h1>
            <p>You've made this astronaut the happiest person in the galaxy. Check your phone, Fiqa! 😊</p>
        </div>
    `;
    document.getElementById('spaceship-hero').style.left = "40%";
    document.getElementById('spaceship-hero').style.top = "20%";
}