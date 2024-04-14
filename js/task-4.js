const form = document.querySelector('.login-form');

const onSubmitForm = event => {
  event.preventDefault();
  const curForm = event.currentTarget
  const elements = curForm.elements;
  const email = elements.email.value.trim()
  const password = elements.password.value.trim()

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const data = {
    email,
    password
  };

  curForm.reset();

  console.log(data);


  // const formData = new FormData(target);
  // Create an array to store the form data
  // const dataObject = {};

  // Iterate over the FormData object and push key-value pairs into the array
  // for (const [key, value] of formData.entries()) {
  //   const clearedValue = value.trim();

  //   if (clearedValue === '') {
  //     alert('All form fields must be filled in');
  //     return;
  //   }

  //   dataObject[key] = clearedValue;
  // }

  // console.log(dataObject);
}

form.addEventListener('submit', onSubmitForm);
