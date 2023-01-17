const form = document.getElementById("form");
function retrieveFormValue(event) {
  event.preventDefult();
  const name = form.querySelector('[name="name"]'),
    tel = form.querySelector('[name="tel"]');

  const values = {
    name: name.value,
    tel: tel.value,
  };

  console.log(values);
}
form.addEventListener("submit", retrieveFormValue);
