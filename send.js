function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_a4i06ds";
    const templateID = "template_0ixqsvo";

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully,Thank you.");
    })
    .catch((err) => console.log(err));
}
