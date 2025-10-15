  const hashTrigger = '#1111111100000001';

  if (window.location.hash === hashTrigger) {
    fetch('src/img/0.HTML')
      .then(response => response.text())
      .then(html => {
        document.getElementById('image-container').innerHTML = html;
      });
  }

  if (window.location.href) {
    fetch('src/img/1.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('image-container').innerHTML = html;
      });
  }