const card = document.querySelectorAll(".card");

  card.forEach( el => {
    el.addEventListener("mousemove", e => {
  
      let elRect = el.getBoundingClientRect()
  
      let x = e.clientX - elRect.x;
      let y = e.clientY - elRect.y;
  
      let midCardWidth = elRect.width / 2;
      let midCardHeight = elRect.height / 2;
  
      let angleY = (x - midCardWidth) / 8;
      let angleX = (y - midCardHeight) / 8;
  
      el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    });
  });