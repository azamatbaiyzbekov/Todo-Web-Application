console.log('Public');

const navLinks = document.querySelector('nav li');
const form = document.querySelector('form');


// ADD NAV ACTIVE CLASS
navLinks.forEach(link => {
  if (window.location.pathname === link.firstChild.getAttribute('href')) {
    link.classList.add('active')
  }
});

// EVENT LISTENERS
// Validate Form Inputs
form && form.addEventListener('submit', (e) => {
  [...document.querySelectorAll('.alert')].forEach(alert => {
    alert.parentNode.removeChild(alert);
  });
  
  [...form.elements].forEach(input => {
    if (input.type !== 'submit' && input.value === '') {
      e.preventDefault();
      input.classList.add('input-error');
      input.insertAdjacentHTML('afterend', `
        <div class="alert alert-${input.id}">
          Please enter your ${input.placeholder}
        </div>
      `);
    }
  });
});

// Validate Form Input on Blur
document.addEventListener('blur', (e) => {
  if (e.target.value === '') {
    e.target.classList.add('input-error');
    e.target.insertAdjacentHTML('afterend', `
      <div class="alert alert-${e.target.id}">
        Please enter your ${e.target.placeholder}
      </div>
    `);
  } else if (e.target.type === 'password' && e.target.value.length < 4) {
      e.preventDefault();
      e.target.classList.add('input-error');
      e.target.insertAdjacentHTML('afterend', `
        <div class='alert ${e.target.id}-message'>
          Password must be at least 4 characters!
        </div>
      `);
    }
}, true);

// Clear Form Errors on Focus
document.addEventListener('focus', (e) => {
  e.target.classList.remove('input-error');
  const inputMessage = document.querySelector(`.alert-${e.target.id}`);
  inputMessage && inputMessage.parentNode.removeChild(inputMessage);
}, true);