Describe: Ticket()

Test: It should return an object with three properties.
Code: new Ticket('test', 'test', 'test')
Expected output: Ticket {firstRelease: 'test', matinee: 'test', senior: 'test'}

Test: It should return an object with a fourth property built using the values of the other properties.
Code: new Ticket(true, true, true)
Expected output: Ticket {firstRelease: true, matinee: true, senior: true, price: 10}