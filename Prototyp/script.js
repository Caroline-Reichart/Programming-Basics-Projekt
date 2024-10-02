const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const story = {
    start: {
        text: "Du bist ein Abenteurer in einer magischen Welt. Vor dir liegt ein geheimnisvoller Wald. Möchtest du den Wald betreten oder weiter auf dem Weg gehen?",
        choices: {
            option1: { text: "Den Wald betreten", next: "forest" },
            option2: { text: "Auf dem Weg bleiben", next: "path" }
        }
    },
    forest: {
        text: "Im Wald triffst du auf einen mysteriösen Zauberer. Er bietet dir an, dir einen Wunsch zu erfüllen. Was wünschst du dir?",
        choices: {
            option1: { text: "Reichtum", next: "rich" },
            option2: { text: "Magische Kräfte", next: "magic" }
        }
    },
    path: {
        text: "Du entscheidest dich, auf dem Weg zu bleiben. Nach einer Weile siehst du ein geheimnisvolles Licht. Möchtest du nachsehen?",
        choices: {
            option1: { text: "Ja, nachsehen", next: "light" },
            option2: { text: "Ignorieren", next: "ignore" }
        }
    },
    rich: {
        text: "Du wirst reich und lebst ein glückliches Leben, aber du vermisst das Abenteuer.",
        choices: {}
    },
    magic: {
        text: "Du erhältst magische Kräfte und wirst zum mächtigsten Zauberer der Welt!",
        choices: {}
    },
    light: {
        text: "Du entdeckst einen magischen Schatz! Du bist jetzt ein Held der Legende.",
        choices: {}
    },
    ignore: {
        text: "Du entscheidest dich, das Licht zu ignorieren. Plötzlich beginnt es zu regnen und du kehrst nach Hause zurück.",
        choices: {}
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
