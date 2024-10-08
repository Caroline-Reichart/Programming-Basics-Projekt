
// Spielzustand verwalten
class Game {
    constructor(scenesData) {
        this.scenes = scenesData.scenes;  // Lade die Szenen aus der JSON-Datei
        this.currentScene = 0;  // Startszene
        this.renderScene();  // Initiales Rendering der ersten Szene
    }

    // Szene rendern
   /*  renderScene() {
        const scene = this.scenes[this.currentScene];

        // Text der Szene anzeigen
        document.getElementById("story").innerHTML = scene.text;

        // Hintergrundbild der Szene setzen, erst wenn es vollständig geladen ist
        const img = new Image();
        img.src = scene.backgroundImg;
        img.onload = () => {
            document.getElementById("scene-background").style.backgroundImage = `url('${scene.backgroundImg}')`;
        };

        // Optionen anzeigen
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";  // Optionen leeren
        scene.options.forEach(option => {
            const button = document.createElement("button");
            button.innerHTML = option.text;
            button.onclick = () => this.changeScene(option.nextScene);
            optionsDiv.appendChild(button);
        });
    } */

        renderScene() {
            const scene = this.scenes[this.currentScene];
        
            // Änderungen bündeln, um mehrfaches Reflow zu vermeiden
            const storyDiv = document.getElementById("story");
            const backgroundDiv = document.getElementById("scene-background");
            const optionsDiv = document.getElementById("options");
        
            // Text und Optionen setzen
            storyDiv.innerHTML = scene.text;
            optionsDiv.innerHTML = ""; 
        
            // Bild erst setzen, wenn es geladen ist
            const img = new Image();
            img.src = scene.backgroundImg;
            img.onload = () => {
                backgroundDiv.style.backgroundImage = `url('${scene.backgroundImg}')`;
            };
        
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
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerk-Antwort war nicht ok');  // Fehler bei der Netzwerk-Anfrage abfangen
            }
            return response.json();  // In JS-Objekte umwandeln
        })
        .then(data => {
            const game = new Game(data);  // Neues Spiel mit den Daten starten
        })
        .catch(error => console.error('Fehler beim Laden der Szenen:', error));  // Fehlerbehandlung
}

// Startet das Spiel, wenn die Seite vollständig geladen ist
/* window.onload = () => {
    startGame();
}; */

/* window.addEventListener("load", () => {
    startGame();  // Nur nach dem vollständigen Laden der Seite und aller Ressourcen
});
 */

window.addEventListener("load", async () => {
    try {
        const response = await fetch('scenes.json');
        const data = await response.json();
        const game = new Game(data);
    } catch (error) {
        console.error('Fehler beim Laden der Szenen:', error);
    }
});








/* // Spielzustand verwalten
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
 */