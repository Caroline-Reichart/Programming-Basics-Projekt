document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.getElementById('story-container');
    const choicesContainer = document.getElementById('choices-container');

    class Scene {
        constructor(description, choices) {
            this.description = description;
            this.choices = choices;
        }

        display() {
            storyContainer.innerHTML = `<p>${this.description}</p>`;
            choicesContainer.innerHTML = '';
            this.choices.forEach(choice => {
                const button = document.createElement('button');
                button.className = 'choice-btn';
                button.textContent = choice.text;
                button.addEventListener('click', choice.action);
                choicesContainer.appendChild(button);
            });
        }
    }

    const scenes = {
        start: new Scene(
            `Durmstrang: Eine alte und geheimnisvolle Zauberschule, berühmt für ihre düstere Magie und strenge Disziplin. In dieser Festung des Wissens verborgen, leben Legenden über die Heiligen Relikte der Magie fort – drei Artefakte, deren Macht so groß ist, dass sie das Schicksal der magischen Welt verändern könnten. Das Jahr 2024 bringt Unruhe in die magische Gemeinschaft: Nach Jahrhunderten des Vergessens wurden die Schattenstein, der Seelenspiegel und der Zeitweber wiederentdeckt. Diese Relikte haben das Potenzial, über Leben und Tod, Zeit und Raum zu herrschen.

            In dieser gefährlichen Zeit bist du, Lukas Roskow, ein letzterjähriger Schüler von Durmstrang, von Träumen und Visionen geplagt. Du hast Visionen von den Relikten, dunklen Mächten und einem unausweichlichen Schicksal, das du erfüllen musst. Gemeinsam mit deinem besten Freund Lev und anderen Verbündeten begibst du dich auf eine Reise, um die Relikte zu finden und zu verhindern, dass sie in die falschen Hände fallen.`,
            [
                { text: 'Es beginnt...', action: () => changeScene('scene1') }
            ]
        ),
        scene1: new Scene(
            'Es ist eine kalte, dunkle Nacht in den Bergen um Durmstrang. Du erwachst aus einem Traum, in dem dir die drei Relikte erschienen sind. Eine uralte, tiefe Stimme hat dir zugeflüstert, dass die Zeit knapp wird. Unruhig setzt du dich auf und spürst, dass deine Reise beginnt.',
            [
                { text: 'Wecke Lev und erzähle ihm von dem Traum, in der Hoffnung, dass er dir helfen kann.', action: () => changeScene('wakeLev') },
                { text: 'Begib dich in die Bibliothek, um mehr über die Relikte zu erfahren.', action: () => changeScene('library') },
                { text: 'Geh zum Hausgeist von Durmstrang, der angeblich viele Geheimnisse über die Relikte kennt.', action: () => changeScene('houseGhost') }
            ]
        ),
        wakeLev: new Scene(
            'Lev, dein treuer Freund und ein talentierter Runenexperte, hört dir aufmerksam zu. "Das klingt gefährlich, Lukas", sagt er besorgt. "Aber ich habe Gerüchte über diese Relikte gehört. Es gibt eine alte Legende, die besagt, dass sie tief in den Katakomben von Durmstrang verborgen sind. Wir müssen die verbotenen Bereiche der Schule durchsuchen."',
            [
                { text: 'Stimme Lev zu und macht euch auf den Weg zu den Katakomben.', action: () => changeScene('catacombs') },
                { text: 'Lehne ab und versuche, allein mehr herauszufinden, um Lev zu schützen.', action: () => changeScene('alone') },
                { text: 'Gehe stattdessen zu Professor Korvin, der ein Experte für dunkle Magie ist.', action: () => changeScene('professorKorvin') }
            ]
        ),
        catacombs: new Scene(
            'Die Katakomben unter Durmstrang sind ein uraltes Labyrinth, das seit Jahrhunderten von niemandem betreten wurde. Die Luft ist kalt und modrig, und magische Schutzbarrieren flimmern in der Dunkelheit. Du und Lev steigen die steinernen Stufen hinunter und erreichen eine massive, mit Runen beschriftete Tür.',
            [
                { text: 'Verwende den Schutzzauber, den du im Unterricht gelernt hast, um die Runen zu brechen.', action: () => changeScene('useSpell') },
                { text: 'Lass Lev die Runen entschlüsseln und öffne die Tür.', action: () => changeScene('levDeciphers') },
                { text: 'Untersuche die Katakomben weiter, um einen anderen Weg zu finden.', action: () => changeScene('exploreCatacombs') }
            ]
        ),
        levDeciphers: new Scene(
            'Lev studiert die Runen genau. "Diese Inschrift sagt: \'Der Schatten schützt das Relikt.\' Ich glaube, wir müssen uns in Schatten hüllen, um durchzukommen." Lev zieht seinen Zauberstab und murmelt einen Verschleierungszauber. Langsam beginnt die Tür zu knarren, als sie sich öffnet. Hinter der Tür offenbart sich eine Halle, die von unheimlichem blauen Licht erfüllt ist. In der Mitte der Halle liegt ein dunkler, glänzender Stein – der Schattenstein, eines der Heiligen Relikte.',
            [
                { text: 'Greife sofort nach dem Schattenstein.', action: () => changeScene('grabShadowStone') },
                { text: 'Untersuche die Umgebung auf Fallen oder Wächter.', action: () => changeScene('checkForTraps') },
                { text: 'Warne Lev davor, sich dem Relikt zu nähern – etwas fühlt sich falsch an.', action: () => changeScene('warnLev') }
            ]
        ),
        grabShadowStone: new Scene(
            'Sobald du den Stein berührst, durchströmt dich eine kalte, fremde Macht. Du fühlst, wie deine Gedanken trüber werden und die Dunkelheit um dich herum dichter wird. Schatten beginnen, sich nach deinem Willen zu formen, doch mit dieser Macht kommt auch ein schwerer Preis. "Du bist nun ein Diener der Dunkelheit," flüstert die Stimme. Plötzlich spürst du, wie du nicht mehr allein in deinem Kopf bist. Der Stein hat begonnen, dich zu beeinflussen.',
            [
                { text: 'Akzeptiere die Macht und nutze sie, um die kommenden Herausforderungen zu meistern.', action: () => changeScene('acceptPower') },
                { text: 'Versuche, die Verbindung zu brechen, bevor es zu spät ist.', action: () => changeScene('breakConnection') },
                { text: 'Fliehe mit dem Schattenstein und hoffe, dass du einen Weg findest, seine Macht zu kontrollieren.', action: () => changeScene('fleeWithStone') }
            ]
        ),
        // Weitere Szenen hier hinzufügen...
        scene10: new Scene(
            'Egal welche Wahl du getroffen hast, eine dunkle Prophezeiung bleibt bestehen. Es gibt Hinweise, dass noch mächtigere Artefakte in der Welt existieren, Artefakte, die weit über die Relikte hinausgehen. Dein Abenteuer ist noch lange nicht zu Ende. "Das Schicksal hat dich auserwählt, aber der Weg ist noch nicht vorüber. Dunkelheit und Licht stehen immer im Kampf – und du bist das Zünglein an der Waage."',
            [
                { text: 'Ende', action: () => alert('Das Spiel ist zu Ende. Danke fürs Spielen!') }
            ]
        )
    };

    function changeScene(sceneKey) {
        const scene = scenes[sceneKey];
        if (scene) {
            scene.display();
        } else {
            console.error(`Scene "${sceneKey}" not found.`);
        }
    }

    // Start the game
    changeScene('start');
});