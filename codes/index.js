document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value;
    var message = document.getElementById('message').value;
    var body ='Name: '+name + '<br/> Email: ' +email + '<br/> City: ' +city + '<br/> Message: ' +message  

          Email.send({
            SecureToken : "804b44b8-599f-46e1-b424-a7fade8fdc9a",
            To : 'sathishkumar350c@gmail.com',
            From : "csathishkumar104@gmail.com",
            Subject : "Portfolio message",
            Body : body
        }).then(function(message) {
          alert(" Your message sent successfully" );
          document.getElementById('myForm').reset();
        });
});