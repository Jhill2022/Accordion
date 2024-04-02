const accord = document.querySelectorAll('.content-title');

accord.forEach((img) => {
  img.addEventListener('click', () => {
    const imgs = img.querySelector('img');
    const myContent = img.parentElement.querySelector('.content');
    accord.forEach((otherImgs) => {
      if (otherImgs !== img) {
        const otherImg = otherImgs.querySelector('img');
        const otherContent = otherImgs.parentElement.querySelector('.content');
        if (otherImg.getAttribute('src') === '/assets/images/icon-minus.svg') {
          otherImg.setAttribute('src', '/assets/images/icon-plus.svg');
          otherContent.classList.remove('open');
        }
      }
    });
    if (imgs.getAttribute('src') === '/assets/images/icon-plus.svg') {
      imgs.setAttribute('src', '/assets/images/icon-minus.svg');
      myContent.classList.add('open');
    } else {
      imgs.setAttribute('src', '/assets/images/icon-plus.svg');
      myContent.classList.remove('open');
    }
  });
});
