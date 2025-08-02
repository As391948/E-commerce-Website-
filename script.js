// Script for navigation bar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
     nav.classList.add('active');   
    })
}

if (close) {
    close.addEventListener('click', () => {
     nav.classList.remove('active');   
    })
}

// Script for Images changing

  const MainImg = document.getElementById('MainImg');
  const smallImg = document.querySelectorAll('.small-img');

  smallImg.forEach(img => {
    img.addEventListener('click', () => {
      MainImg.src = img.src;
    });
  });


