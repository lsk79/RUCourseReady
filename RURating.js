
// Difficulty rating
const difficultyInputs = document.querySelectorAll('.rating input');
difficultyInputs.forEach(input => {
    input.addEventListener('change', () => {
        const ratingValue = input.value;
        updateDifficultyHighlighting(ratingValue);
    });
});

function updateDifficultyHighlighting(ratingValue) {
    const labels = document.querySelectorAll('.rating label');
    labels.forEach((label, index) => {
        if (index < ratingValue) {
            label.style.backgroundColor = '#eb1f1f';
        } else {
            label.style.backgroundColor = '#ccc';
        }
    });
}

// Textbooks buttons
const textbookButtons = document.querySelectorAll('.button-group input[name="textbooks"]');
textbookButtons.forEach(input => {
    input.addEventListener('change', () => {
        updateButtonHighlighting('textbooks');
    });
});

// Grade buttons
const gradeButtons = document.querySelectorAll('.grade-group input[name="grade"]');
gradeButtons.forEach(input => {
    input.addEventListener('change', () => {
        updateButtonHighlighting('grade');
    });
});

// Curve buttons
const curveButtons = document.querySelectorAll('.button-group input[name="curve"]');
curveButtons.forEach(input => {
    input.addEventListener('change', () => {
        updateButtonHighlighting('curve');
    });
});

function updateButtonHighlighting(groupName) {
    const buttons = document.querySelectorAll(`.button-group input[name="${groupName}"], .grade-group input[name="${groupName}"]`);
    buttons.forEach(button => {
        const label = button.nextElementSibling;
        if (button.checked) {
            label.style.backgroundColor = '#eb1f1f';
            label.style.color = 'white';
        } else {
            label.style.backgroundColor = '#ccc';
            label.style.color = 'black';
        }
    });
}

// Add material
const addMaterialButton = document.getElementById('add-material');
const materialList = document.getElementById('material-list');
addMaterialButton.addEventListener('click', () => {
    const materialItem = document.createElement('div');
    materialItem.className = 'material-item';
    materialItem.innerHTML = `
        <input type="text" placeholder="Enter material">
        <button onclick="saveMaterial(this)">Save</button>
    `;
    materialList.insertBefore(materialItem, addMaterialButton);
});

function saveMaterial(button) {
    const materialItem = button.parentElement;
    const input = materialItem.querySelector('input');
    const materialText = input.value.trim();
    if (materialText) {
        const newMaterialItem = document.createElement('div');
        newMaterialItem.className = 'material-item';
        newMaterialItem.innerHTML = `
            <span>${materialText}</span>
            <button onclick="removeMaterial(this)">-</button>
        `;
        materialList.insertBefore(newMaterialItem, addMaterialButton);
        materialList.removeChild(materialItem);
    }
}

function removeMaterial(button) {
    const materialItem = button.parentElement;
    materialList.removeChild(materialItem);
}