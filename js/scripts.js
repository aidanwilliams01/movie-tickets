function Ticket(firstRelease, matinee, senior) {
  this.firstRelease = firstRelease;
  this.matinee = matinee;
  this.senior = senior;
}

Ticket.prototype.calculatePrice = function() {
  if (this.firstRelease === "true") {
    price = 20;
  }
  else {
    price = 15;
  }
  if (this.matinee === "true") {
    price -= 5;
  }
  if (this.senior === "true") {
    price -= 5;
  }
  return price;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const firstRelease = document.querySelector("input[name='movie']:checked").value;
  const matinee = document.querySelector("input[name='time']:checked").value;
  const senior = document.querySelector("input[name='senior']:checked").value;
  const newTicket = new Ticket(firstRelease, matinee, senior);
  document.querySelector("p").innerText = `Price: $${newTicket.calculatePrice()}`;
}

window.addEventListener("load", function () {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
});