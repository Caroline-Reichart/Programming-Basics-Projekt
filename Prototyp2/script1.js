const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const story = {
    start: {
        text: "Willkommen, mutiger Abenteurer, in der Welt von Eldoria, wo Magie und uralte Geheimnisse lauern. Deine Reise beginnt in der Stadt Eldowin. Wie möchtest du dich vorbereiten?",
        choices: {
            option1: { text: "Gehe zur Taverne und sammle Informationen.", next: "tavern" },
            option2: { text: "Besuche den Magierladen, um Zaubertränke zu kaufen.", next: "shop" },
            option3: { text: "Gehe direkt in den Nebelwald.", next: "forest" }
        }
    },
    tavern: {
        text: "Du betrittst die schummrige Taverne 'Zum feurigen Drachen'. Der Wirt erzählt von einem Hexenmeister, der den Weg zum Amulett bewacht.",
        choices: {
            option1: { text: "Frage weiter nach Details zum Monolith.", next: "monolith" },
            option2: { text: "Bestelle ein Getränk und lausche den Gesprächen.", next: "drink" },
            option3: { text: "Verlasse die Taverne und gehe zum Monolith.", next: "monolith" }
        }
    },
    shop: {
        text: "Im Magierladen fragt dich die alte Magierin: 'Suchst du nach Macht oder Schutz?'",
        choices: {
            option1: { text: "Kaufe einen Heiltrank.", next: "forest" },
            option2: { text: "Kaufe einen Unsichtbarkeitstrank.", next: "forest" },
            option3: { text: "Frage nach einem speziellen Artefakt.", next: "artifact" }
        }
    },
    forest: {
        text: "Du trittst in den finsteren Nebelwald und erreichst eine Kreuzung.",
        choices: {
            option1: { text: "Nimm den linken Pfad mit seltsamen Geräuschen.", next: "leftPath" },
            option2: { text: "Folge dem ruhigen, rechten Pfad.", next: "rightPath" },
            option3: { text: "Untersuche die Umgebung.", next: "investigate" }
        }
    },
    monolith: {
        text: "Du erreichst einen Monolithen, der von Symbolen bedeckt ist. 'Nur die Weisen werden den Weg öffnen', flüstert eine Stimme.",
        choices: {
            option1: { text: "Untersuche die Symbole.", next: "symbols" },
            option2: { text: "Versuche, die Inschrift zu entziffern.", next: "inscription" },
            option3: { text: "Bewege den Monolithen mit roher Gewalt.", next: "moveMonolith" }
        }
    },
    symbols: {
        text: "Du erkennst, dass du drei Symbole in der richtigen Reihenfolge berühren musst.",
        choices: {
            option1: { text: "Berühre Sonne, Mond, Stern.", next: "win" },
            option2: { text: "Berühre Blitz, Wasser, Feuer.", next: "lose" },
            option3: { text: "Berühre Drache, Wolf, Eule.", next: "lose" }
        }
    },
    inscription: {
        text: "Das Rätsel lautet: 'Ich bin der Anfang und das Ende, der Kreis des Lebens.'",
        choices: {
            option1: { text: "Die Antwort ist 'Die Zeit'.", next: "win" },
            option2: { text: "Die Antwort ist 'Der Kreis'.", next: "lose" },
            option3: { text: "Die Antwort ist 'Das Leben'.", next: "lose" }
        }
    },
    moveMonolith: {
        text: "Du versuchst, den Monolith zu bewegen, aber eine Falle wird ausgelöst!",
        choices: {
            option1: { text: "Springe zurück.", next: "lose" },
            option2: { text: "Nutze einen Schutzzauber.", next: "win" },
            option3: { text: "Nimm den Schaden hin.", next: "lose" }
        }
    },
    win: {
        text: "Du hast das Rätsel des Monolithen gelöst und der Weg öffnet sich. Du findest das Amulett von Aelyndor!",
        choices: {}
    },
    lose: {
        text: "Du scheiterst und wirst von den Gefahren des Waldes verschlungen. Eldoria bleibt verloren.",
        choices: {}
    },
    drink: {
        text: "Du lauscht den Gesprächen und erfährst mehr über den Hexenmeister. Du machst dich auf den Weg zum Monolithen.",
        choices: {
            option1: { text: "Gehe zum Monolithen.", next: "monolith" }
        }
    },
    leftPath: {
        text: "Seltsame Geräusche führen dich tiefer in den Wald, wo du ein verstecktes Artefakt entdeckst.",
        choices: {
            option1: { text: "Nimm das Artefakt und gehe weiter.", next: "monolith" }
        }
    },
    rightPath: {
        text: "Der ruhige Pfad führt dich sicher zum Monolithen.",
        choices: {
            option1: { text: "Gehe zum Monolithen.", next: "monolith" }
        }
    },
    investigate: {
        text: "Du entdeckst versteckte Runen, die auf ein Rätsel am Monolithen hinweisen.",
        choices: {
            option1: { text: "Gehe zum Monolithen.", next: "monolith" }
        }
    },
    artifact: {
        text: "Die Magierin verkauft dir ein mächtiges Artefakt, das dir im Kampf helfen wird.",
        choices: {
            option1: { text: "Gehe in den Nebelwald.", next: "forest" }
        }
    }
};

function startGame() {
    showStory("start");
}

function showStory(key) {
    const scene = story[key];
    storyElement.innerText = scene.text;
    choicesElement.innerHTML = '';

    for (const choice in scene.choices) {
        const button = document.createElement("button");
        button.innerText = scene.choices[choice].text;
        button.onclick = () => showStory(scene.choices[choice].next);
        choicesElement.appendChild(button);
    }
}

startGame();
