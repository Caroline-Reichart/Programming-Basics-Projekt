// Szenen-Objekt
class Scene {
    constructor(text, options = [], backgroundImg = "", sceneImg = "") {
        this.text = text;
        this.options = options;
        this.backgroundImg = backgroundImg;
        this.sceneImg = sceneImg;
    }
}

// Spielzustand verwalten
class Game {
    constructor() {
        this.scenes = [];
        this.currentScene = 0;
        this.initScenes();
        this.renderScene();
    }

    initScenes() {
        // Einführungsszene mit Hintergrundgeschichte
        this.scenes.push(new Scene(
            "In den Bergen um Durmstrang, verborgen in Dunkelheit und Nebel, ranken sich Gerüchte über die mächtigsten Relikte, die je existiert haben: der Schattenstein, der Seelenspiegel und der Zeitweber. Diese Artefakte könnten den Verlauf der magischen Welt verändern. Eine Prophezeiung warnt jedoch, dass ihre Macht nur Unheil bringt, wenn sie in die falschen Hände gelangen.<br><br> Du bist Lukas Roskow, ein Schüler an der magischen Schule von Durmstrang, der eines Nachts einen beunruhigenden Traum hat. Darin erscheinen dir die Relikte, ein Labyrinth und eine uralte Stimme, die dich warnt: <i>'Die Zeit läuft aus, die Dunkelheit kommt...'</i>",
            [
                { text: "Es beginnt...", nextScene: 1 }
            ],
            "/images/intro-background.png",
            
        ));

        // Szene 1 .
        this.scenes.push(new Scene(
            "Es ist eine kalte, dunkle Nacht in den Bergen um Durmstrang. Du erwachst aus einem Traum, in dem dir die drei Relikte erschienen sind. Eine uralte, tiefe Stimme hat dir zugeflüstert, dass die Zeit knapp wird. Unruhig setzt du dich auf und spürst, dass deine Reise beginnt.",
            [
                { text: "Wecke Levi und erzähle ihm von dem Traum.", nextScene: 2 },
                { text: "Begib dich in die Bibliothek.", nextScene: 3 },
                { text: "Geh zum Hausgeist von Durmstrang, der angeblich viele Geheimnisse über die Relikte kennt.", nextScene: 4 }
            ],
            "/images/scene1-background.png", // Hintergrundbild
            
        ));

        // Szene 2: Levi wecken
        this.scenes.push(new Scene(
            "Levi, dein treuer Freund und ein talentierter Runenexperte, hört dir aufmerksam zu. 'Das klingt gefährlich, Lukas', sagt er besorgt. 'Aber ich habe Gerüchte über diese Relikte gehört. Es gibt eine alte Legende, die besagt, dass sie tief in den Katakomben von Durmstrang verborgen sind. Wir müssen die verbotenen Bereiche der Schule durchsuchen.'",
            [
                { text: "Stimme Levi zu und macht euch auf den Weg zu den Katakomben.", nextScene: 5 },
                { text: "Lehne ab und versuche, allein mehr herauszufinden.", nextScene: 6 },
                { text: "Gehe zu Professor Korvin, der ein Experte für dunkle Magie ist.", nextScene: 7 }
            ],
            "/images/scene2-background.png", 
            
        ));

        // Szene 3: Die Bibliothek
        this.scenes.push(new Scene(
            "Du schleichst dich in die alte Bibliothek von Durmstrang. Die Bücher hier enthalten uraltes Wissen, doch viele davon sind verboten. Du findest ein Buch, das Hinweise auf die Relikte gibt.",
            [
                { text: "Lies weiter über die Relikte.", nextScene: 8 },
                { text: "Verlasse die Bibliothek und suche Levi.", nextScene: 2 },
                { text: "Geh zum Hausgeist, um mehr zu erfahren.", nextScene: 4 }
            ],
            "/images/scene3-background.png",
            
        ));

        // Szene 4: Der Hausgeist
        this.scenes.push(new Scene(
            "Der Hausgeist von Durmstrang erscheint vor dir, eine düstere, durchscheinende Gestalt. 'Die Relikte... sie bringen nichts als Zerstörung,' flüstert er. 'Doch in den Katakomben kannst du mehr erfahren.'",
            [
                { text: "Folge den Hinweisen des Hausgeistes und gehe zu den Katakomben.", nextScene: 5 },
                { text: "Stelle ihm weitere Fragen über die Relikte.", nextScene: 9 }
            ],
            "/images/scene4-background.png",
            
        ));

        // Szene 5: Katakomben von Durmstrang
        this.scenes.push(new Scene(
            "Die Katakomben unter Durmstrang sind ein uraltes Labyrinth, das seit Jahrhunderten von niemandem betreten wurde. Die Luft ist kalt und modrig, und magische Schutzbarrieren flimmern in der Dunkelheit. Du und Levi steigt die steinernen Stufen hinunter und erreicht eine massive, mit Runen beschriftete Tür.",
            [
                { text: "Verwende den Schutzzauber, um die Runen zu brechen.", nextScene: 10 },
                { text: "Lass Levi die Runen entschlüsseln.", nextScene: 11 },
                { text: "Untersuche die Katakomben weiter.", nextScene: 12 }
            ],
            "Images/scene5-background.png",
            
        ));

        // Szene 6: Allein mehr herausfinden
        this.scenes.push(new Scene(
            "Du entscheidest dich, allein zu gehen, um Levi zu schützen. Dein Weg führt dich zurück zur Bibliothek, wo du versuchst, mehr über die Relikte herauszufinden.",
            [
                { text: "Lies weiter über die Relikte.", nextScene: 8 },
                { text: "Begib dich allein zu den Katakomben.", nextScene: 5 },
                { text: "Suche nach Hinweisen im Schloss.", nextScene: 13 }
            ],
            "/images/scene3-background.png",
            
        ));

        // Szene 7: Professor Korvin
        this.scenes.push(new Scene(
            "Du gehst zu Professor Korvin, einem mächtigen Magier und Experten für dunkle Magie. Doch es gibt Gerüchte, dass Korvin selbst nach den Relikten sucht. Du musst vorsichtig sein.",
            [
                { text: "Frage Korvin über die Relikte aus.", nextScene: 14 },
                { text: "Vertraue Korvin und bitte um seine Hilfe.", nextScene: 15 },
                { text: "Misstraue Korvin und gehe wieder.", nextScene: 16 }
            ],
            "/images/scene7-background.png",
            
        ));

        // Szene 8: Weiter über die Relikte lesen
        this.scenes.push(new Scene(
            "Du liest weiter über die Relikte. Es gibt Hinweise, dass der Schattenstein tief in den Katakomben von Durmstrang verborgen ist.",
            [
                { text: "Gehe zu den Katakomben.", nextScene: 5 },
                { text: "Suche nach weiteren Informationen.", nextScene: 4 }
            ],
            "/images/scene3-background.png",
            
        ));

        // Szene 9: Hausgeist weiter befragen
        this.scenes.push(new Scene(
            "Der Hausgeist fährt fort: 'Die Relikte wurden von uralten Zauberern geschaffen. Doch ihre Macht ist unkontrollierbar. Ein Zauberer allein kann sie nicht beherrschen.'",
            [
                { text: "Gehe zu den Katakomben, um mehr zu erfahren.", nextScene: 5 },
                { text: "Verlasse den Hausgeist und suche Lev.", nextScene: 2 }
            ],
            "/images/scene4-background.png",
            
        ));

        // Szene 10: Das Ende (ohne Option)
        this.scenes.push(new Scene(
            "Die Prophezeiung hat sich erfüllt, und die Macht der Relikte liegt nun in deinen Händen. Doch mit dieser Macht kommt auch eine Verantwortung, die du niemals erwartet hättest. Die Dunkelheit rückt näher, und die Zukunft der magischen Welt hängt an einem seidenen Faden. Dein Abenteuer ist noch lange nicht vorbei...",
            [],
            "images/scene10-background.jpg",
            "images/scene10-option.jpg"
        ));

        // Weitere Szenen müssen hier hinzugefügt werden, gemäß Storyscript
    }

    // Szene rendern
    renderScene() {
        const scene = this.scenes[this.currentScene];

        // Text der Szene anzeigen
        document.getElementById("story").innerHTML = scene.text;

        // Hintergrundbild der Szene setzen
        document.getElementById("scene-background").style.backgroundImage = `url('${scene.backgroundImg}')`;

        // Bild zur Szene setzen
        document.getElementById("scene-image").innerHTML = scene.sceneImg ? `<img src="${scene.sceneImg}" alt="Szenenbild">` : "";

        // Optionen anzeigen
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
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

// Starte das Spiel
window.onload = () => {
    const game = new Game();
};





