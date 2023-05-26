function Ticket(firstRelease, matinee, senior) {
  this.firstRelease = firstRelease;
  this.matinee = matinee;
  this.senior = senior;
  if (firstRelease === "true") {
    this.price = 20;
  }
  else {
    this.price = 15;
  }
  if (matinee === "true") {
    this.price -= 5;
  }
  if (senior === "true") {
    this.price -= 5;
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  const firstRelease = document.querySelector("input[name='movie']:checked").value;
  const matinee = document.querySelector("input[name='time']:checked").value;
  const senior = document.querySelector("input[name='senior']:checked").value;
  const newTicket = new Ticket(firstRelease, matinee, senior);
  document.querySelector("p").innerText = `Price: $${newTicket.price}`;
}

window.addEventListener("load", function () {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
});