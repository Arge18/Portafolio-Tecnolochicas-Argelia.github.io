let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #CC33FF;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Soy estudiante de Tecnolochicas PRO y aprendo lenguaje HTML y CSS. Ademas soy estudiante en Educacion en la UAEMEX, apasionada por la lectura y escritura.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
