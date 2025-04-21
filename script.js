console.log('Hello from the script!');

document.getElementById('change-text-btn').addEventListener('click', () => {
    const title = document.getElementById('main-title');
    title.textContent = 'Text Changed Dynamically!';
});

document.getElementById('toggle-style-btn').addEventListener('click', () => {
    const description = document.getElementById('description');
    description.classList.toggle('highlight');
});

document.getElementById('add-element-btn').addEventListener('click', () => {
    const section = document.querySelector('section');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a dynamically added paragraph.';
    section.appendChild(newElement);
});

document.getElementById('remove-element-btn').addEventListener('click', () => {
    const section = document.querySelector('section');
    const lastParagraph = section.querySelector('p:last-of-type');
    if (lastParagraph && lastParagraph.id !== 'description') {
        section.removeChild(lastParagraph);
    }
});
