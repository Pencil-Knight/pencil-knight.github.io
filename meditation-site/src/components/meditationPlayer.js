class MeditationPlayer {
    constructor() {
        this.currentMeditation = null;
        this.duration = 0;
        this.isPlaying = false;
    }

    play(meditation, duration) {
        this.currentMeditation = meditation;
        this.duration = duration;
        this.isPlaying = true;
        console.log(`Playing meditation: ${meditation} for ${duration} minutes.`);
    }

    pause() {
        if (this.isPlaying) {
            this.isPlaying = false;
            console.log(`Paused meditation: ${this.currentMeditation}.`);
        }
    }

    stop() {
        this.isPlaying = false;
        console.log(`Stopped meditation: ${this.currentMeditation}.`);
        this.currentMeditation = null;
        this.duration = 0;
    }
}

export default MeditationPlayer;