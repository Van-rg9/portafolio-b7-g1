//alert("Hola mundo <3"); 

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Vanessa Rangel')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora FRONTEND JR')
  .pauseFor(1000)
  .start();
