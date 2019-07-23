console.log('hello world!');


//Get New User
const newUser = (req, res) = {
    res.render('account/signup');
  };
  
  //POST create New User
  const createdUser = (req, res) => {
    const errors = [];
    
    if (!req.body.name) {
      errors.push({ field: 'name', message: 'Please enter your name' })
    }
  
    if (!req.body.email) {
      errors.push({ field: 'email', message: 'Please enter your email' })
    }
  
    if (!req.body.password) {
      errors.push({ field: 'password', message: 'Please enter your password' })
    }
  
    if (req.body.password !== req.body.password2) {
      errors.push({ field: 'password', message: 'Passwords must match' })
    }
  
    if (errors.length) {
      return res.render('accounts/signup', { errors })
    }
  }
const navLinks = document.querySelector('nav ul');
const form = document.querySelector('form');
