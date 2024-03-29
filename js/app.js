const colorBox = document.querySelectorAll('.color-box');
const createBoxBtn = document.getElementById('btn-save');
const removeBtn = document.getElementById('btn-delete');
const inputElem = document.getElementById('input-field');
const divContainer = document.getElementById('listed');

//use capture event
divContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'P'){
        event.target.parentElement.remove();
    };
});

removeBtn.addEventListener('click', () => {
    inputElem.value = '';
})

// add color box
colorBox.forEach((color) => {
    color.addEventListener('click', (event) => {
        // let bgColor = event.target.getAttribute('style');
        // inputElem.setAttribute('style', bgColor);
        // newDiv.setAttribute('style', bgColor);
        // or

        let bgColor = event.target.style.backgroundColor;
        inputElem.style.backgroundColor = bgColor;

    })
})


function addNewTask(event) {
    if (inputElem.value) {
        let createPTag = document.createElement('p');
        let newDiv = document.createElement('div');
        let inputBg = inputElem.style.backgroundColor;
        newDiv.style.backgroundColor = inputBg;

        createPTag.className = 'card-text p-3';
        newDiv.className = 'card shadow-sm rounded';

        createPTag.innerHTML = inputElem.value;

        newDiv.append(createPTag);
        divContainer.append(newDiv);

        inputElem.value = '';
        inputElem.style.backgroundColor = '#fff';

        //because we should use capture event
        // newDiv.addEventListener('click', (event) => {
        //     event.target.parentElement.remove();
        // });
    };
};

inputElem.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        addNewTask(event);
    }

});

createBoxBtn.addEventListener('click', addNewTask);
