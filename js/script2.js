document.querySelector('.home-item-2').addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;

    let errors = [];

    if (name === '') {
        errors.push('Name is required.');
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        errors.push('Email is required.');
    } else if (!emailPattern.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    if (interest === '') {
        errors.push('Please select an interest.');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert('Form submitted successfully!');
    }
});
