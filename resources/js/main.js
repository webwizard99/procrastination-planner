const tSub = document.getElementById('task-submit');
const tCurrent = document.getElementById('task-input');
const tList = document.getElementById('todo-out');

const procrastinationList = [
    'Watch Netflix',
    'Play some video games',
    'Tweak resume',
    'Work on darts skills',
    'Check Facebook',
    'Read the news',
    'Hone Wizarding skills',
    'Read a book',
    'Smell the flowers',
    'Take a walk',
    'Stare into the distance',
    'Browse Reddit',
    'Search for unicorns',
    'Window shop on Amazon',
    'Weigh your options',
];

tSub.addEventListener('click', addItem);
tCurrent.addEventListener('keyup', function(e){
    if (e.keyCode === 13) {
        addItem();
    };
});

function addItem(e){
    if (!tCurrent.value) return;
    let newLI = document.createElement('LI');
    let todoIndex = Math.floor(Math.random() * procrastinationList.length);
    newLI.innerText = procrastinationList[todoIndex];
    tList.appendChild(newLI);
    tCurrent.value = '';
}