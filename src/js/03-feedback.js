import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
}

refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", onFormSubmit);
checkingLocalStorage();


// console.log(refs.input.value)
// console.log(refs.textarea.value )

function onFormSubmit(event) {
    event.preventDefault();
    
    console.log('sent data->' , JSON.parse(localStorage.getItem(STORAGE_KEY)));

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }


function onFormInput () {
    const formData = { 
        email: refs.input.value, 
        message: refs.textarea.value };

    // console.log('FD->', formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
} 



function checkingLocalStorage() {
    const parseSavedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (parseSavedData) {
      refs.input.value = parseSavedData.email;
      refs.textarea.value = parseSavedData.message;
    } else {
      refs.input.value = '';
      refs.textarea.value = '';
    }
  }

 

