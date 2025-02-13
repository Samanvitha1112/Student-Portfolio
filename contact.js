document.getElementById("form").addEventListener('submit',function(event)
{
    event.preventDefault();
        const name= document.getElementById("name").value;
        const email= document.getElementById("email").value;
        if(name.length>=6)
        {
            alert("Plase enter the name with 5 characters");
            return;
        }
        if(email.indexOf("@")>email.indexOf(".")){
            alert("Invalid email");
            return;
        }
    const mailtoLink = 'mailto:samanvithatirupathi@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}';
    
    window.location.href = mailtoLink;
});

