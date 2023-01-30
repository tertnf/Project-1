const form = document.getElementById("form");
console.log(form);
console.log("hello word");
function retrieveFormValue(event) {
  event.preventDefult();
  const name = form.querySelector('[name="name"]');
  const tel = form.querySelector('[name="tel"]');

  const values = {
    name: name.value,
    tel: tel.value,
  };

  console.log(values);
  let message =
    "Дякую, ваші данні успішно записані, я зв'яжуся з вами дуже скоро, Наталія Угай.";
  alert(message);
}
form.addEventListener("submit", retrieveFormValue);
