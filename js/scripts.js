function Ticket(firstRelease, matinee, senior) {
  this.firstRelease = firstRelease;
  this.matinee = matinee;
  this.senior = senior;
  if (firstRelease === true) {
    this.price = 20;
  }
  else {
    this.price = 15;
  }
  if (matinee === true) {
    this.price -= 5;
  }
  if (senior === true) {
    this.price -= 5;
  }
}