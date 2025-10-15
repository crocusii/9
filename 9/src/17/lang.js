  const hashTrigger = '#171717171717171700000000000000171717171717171717010000000000000117171717171717170100100000000001';

  if (window.location.hash === hashTrigger) {
    fetch('./')
      .then(response => response.text())
      .then(html => {
        document.getElementById('image-container').innerHTML = html;
      });
  }

  if (window.location.href) {
    fetch('./')
      .then(response => response.text())
      .then(html => {
        document.getElementById('image-container').innerHTML = html;
      });
  }
