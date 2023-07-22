const frontButton = document.querySelector('#front_title');
const backButton = document.querySelector('#back_title');
const databaseButton = document.querySelector('#db_title');
const frontDiv = document.querySelector('#front_tech')
const backDiv = document.querySelector('#back_tech')
const dbDiv = document.querySelector('#db_tech')



frontButton.addEventListener('click', () => {
    if (frontDiv.classList.contains('visible')) {
        frontDiv.classList.remove('visible');
    } else{
        frontDiv.classList.add('visible');
    }
})

backButton.addEventListener('click', () => {
    console.log('Title back pressed');
})

databaseButton.addEventListener('click', () => {
    console.log('Title db pressed');
})