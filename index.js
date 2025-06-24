// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'Karen';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'not Karen'; // Will throw an error
}
