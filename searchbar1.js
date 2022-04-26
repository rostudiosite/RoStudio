const charactersList = document.getElementById('tutorialList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [
    {"name": "How to make a e to enter vehicle?", "image": '/media/tutorial1.png', "link": "/scriptingtutorials/e-to-enter-vehicle.html"},
    {"name": "How to make a shift to sprint?", "image": '/media/tutorial2.png', "link": "/scriptingtutorials/shift-to-sprint.html"},
    {"name": "How to make a day / night cycle?", "image": '/media/tutorial3.png', "link": "/scriptingtutorials/e-to-enter-vehicle.html"},
];


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <div class="selectionbox">
                <a href="${character.link}">
                    <h2>${character.name}</h2>
                    <img id="selectionimage" src="${character.image}" />
                </a>
            </div>
        `;
        })
        .join(''); 
    charactersList.innerHTML = htmlString;
};

displayCharacters(hpCharacters);