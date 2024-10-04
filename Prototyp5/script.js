// Spielzustand verwalten
class Game {
    constructor(scenesData) {
        this.scenes = scenesData.scenes;  // Lade die Szenen aus der JSON-Datei
        this.currentScene = 0;  // Startszene
        this.renderScene();
    }

    // Szene rendern
    renderScene() {
        const scene = this.scenes[this.currentScene];

        // Text der Szene anzeigen
        document.getElementById("story").innerHTML = scene.text;

        // Hintergrundbild der Szene setzen
        document.getElementById("scene-background").style.backgroundImage = `url('${scene.backgroundImg}')`;

        // Optionen anzeigen
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";  // Optionen leeren
        scene.options.forEach(option => {
            const button = document.createElement("button");
            button.innerHTML = option.text;
            button.onclick = () => this.changeScene(option.nextScene);
            optionsDiv.appendChild(button);
        });
    }

    // Szene wechseln
    changeScene(nextScene) {
        this.currentScene = nextScene;
        this.renderScene();
    }
}

// Szenen laden und das Spiel starten
function startGame() {
    fetch('scenes.json')  // JSON-Datei laden
        .then(response => response.json())  // In JS-Objekte umwandeln
        .then(data => {
            const game = new Game(data);  // Neues Spiel mit den Daten starten
        })
        .catch(error => console.error('Fehler beim Laden der Szenen:', error));
}

// Startet das Spiel, wenn die Seite geladen wird
window.onload = () => {
    startGame();
};
