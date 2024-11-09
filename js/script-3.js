self.__SSG_MANIFEST=new Set,self.__SSG_MANIFEST_CB&&self.__SSG_MANIFEST_CB();





const form = document.querySelector('form');
function sendEmail(){

     
    Email.send({
        Host : "smtp.gmail.com",
        Username : "princemultaniya89@gmail.com",
        Password : beijander singh,
        To : 'princetarachand26@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Enquiry",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );


}