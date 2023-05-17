function fadeInOnScroll(elements) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  elements.forEach(el => {
    observer.observe(el);
  });
}

export default fadeInOnScroll;

