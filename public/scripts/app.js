console.log('Public');

const mainPage = document.querySelector('main-page');
const navLinks = document.querySelector('nav li');
const form = document.querySelector('form');


// ADD NAV ACTIVE CLASS
// navLinks.forEach(link => {
//   if (window.location.pathname === link.firstChild.getAttribute('href')) {
//     link.classList.add('active')
//   }
// });

// Create an Account
const newSession = (req, res)=> {
  res.rend('accounts/login');
}
