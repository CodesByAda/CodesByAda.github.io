const service_id = "service_p13vg1v"
const template_id = "template_zdddlqa";
const public_key = "TMEx3Bs8G14FYSLGu";
emailjs.init(public_key);

document.getElementById('contact').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && name && message) {
        const templateParams = {
            name: name,
            email: email,
            message: message,
        };
    
        emailjs
            .send(service_id, template_id, templateParams)
            .then((response) => {
                alert('Message sent successfully!');
            })
            .catch((error) => {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', error);
            });
    } else {
        alert("Please fill the form completely")
    }
    
});