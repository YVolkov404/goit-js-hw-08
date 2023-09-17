import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
const el = form.elements;

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);

  e.currentTarget.reset();
}

function onFormInput(e) {
  const data = {
    email: el.email.value,
    message: el.message.value,
  };

  const dataJSON = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, dataJSON);
}

export function saveFormDataAfterPageReload() {
  const saveForm = localStorage.getItem(STORAGE_KEY);
  const formData = JSON.parse(saveForm);

  if (formData) {
    el.email.value = formData.email;
    el.message.value = formData.message;
  }
}
