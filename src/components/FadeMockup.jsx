function fadeMockup (elements) {
    const windowHeight = window.innerHeight;
    elements.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;
      const elBottom = el.getBoundingClientRect().bottom;
      if (elTop < windowHeight && elBottom > 0) {
        el.classList.add('animate');
      } else {
        el.classList.remove('animate');
      }
    });
  }