// Этот файл является точкой входа приложения. Он инициализирует приложение, подключает компоненты и управляет логикой медитации.

import MeditationPlayer from './components/meditationPlayer.js';

const meditationPlayer = new MeditationPlayer();

// Пример инициализации медитации
meditationPlayer.loadMeditation('path/to/meditation.mp3', 300); // путь к файлу медитации и его длительность в секундах

// Пример управления воспроизведением
document.getElementById('playButton').addEventListener('click', () => {
    meditationPlayer.play();
});

document.getElementById('pauseButton').addEventListener('click', () => {
    meditationPlayer.pause();
});

document.getElementById('stopButton').addEventListener('click', () => {
    meditationPlayer.stop();
});