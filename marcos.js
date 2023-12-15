document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("img");
    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight
    const speed = 1.8;
    const fotos = [
      "img/1.jpg",
      "img/2.jpg",
      "img/3.jpg",
      "img/4.jpg",
      "img/5.jpg",
      "img/6.jpg",
      "img/7.jpg",
      "img/8.jpg",
      "img/9.jpg",
      "img/10.jpg",
      "img/11.jpg",
      "img/12.jpg",
      "img/13.jpg",
      "img/14.jpg",
      "img/15.jpg",
      "img/16.jpg"
    ];

    img.style.width = imgWidth + "px"; // Establecer ancho de la imagen
    img.style.height = imgHeight + "px"; // Establecer alto de la imagen
    
    let x = Math.random() * (window.innerWidth - imgWidth);
    let y = Math.random() * (window.innerHeight - imgHeight);
    let dirX = (Math.random() > 0.5) ? 1 : -1;
    let dirY = (Math.random() > 0.5) ? 1 : -1;
    
    function animate() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
    
      if (x + imgWidth >= screenWidth || x <= 0) {
        dirX *= -1;
        cambiarImagen();
      }
      if (y + imgHeight >= screenHeight || y <= 0) {
        dirY *= -1;
        cambiarImagen();
      }
    
      x += dirX * speed;
      y += dirY * speed;
    
      img.style.left = x + "px";
      img.style.top = y + "px";
    
      window.requestAnimationFrame(animate);
    }
  
    function cambiarImagen() {
      let foto = Math.floor(Math.random() * fotos.length);
      document.getElementById('img').innerHTML = '<img id="imagenContenida" src="'+fotos[foto]+'" alt="magen"></img>';
    }

    function iniciarCuentaAtras() {
      const fechaObjetivo = new Date('2023-12-17T12:30:00');

      function actualizarCuentaAtras() {
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia > 0) {
          let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
          let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
          let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

          if(dias < 10){dias = "0"+dias;}
          if(horas < 10){horas = "0"+horas;}
          if(minutos < 10){minutos = "0"+minutos;}
          if(segundos < 10){segundos = "0"+segundos;}

          document.getElementById('countdown').innerHTML = `<p>${dias} : ${horas} : ${minutos} : ${segundos}</p>`;
        } else {
          document.getElementById('countdown').innerHTML = "<p>¡Felicidades Marcos!</p>";
          document.getElementById('img').classList.remove("oculto");
          document.getElementById('img').classList.add("visible");
        }
      }
      const intervalo = setInterval(actualizarCuentaAtras, 1000);
    }
    
    window.requestAnimationFrame(animate);
    window.onload = function(){
      iniciarCuentaAtras();
    }
  });
  
  
