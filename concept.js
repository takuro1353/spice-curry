// ハンバーガーメニュー
const hamburger = document.querySelector('#hamburger');
const aside = document.querySelector('#aside');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    aside.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// アコーディオンナビ
const infoP = document.querySelector('.aside__nav--info p');
if (infoP) {
  infoP.addEventListener('click', function () {
    this.classList.toggle('close');
    let next = this.nextElementSibling;
    while (next && next.tagName === 'LI') {
      next.style.display = next.style.display === 'block' ? 'none' : 'block';
      next = next.nextElementSibling;
    }
  });
}

const menuP = document.querySelector('.aside__nav--menu p');
if (menuP) {
  menuP.addEventListener('click', function () {
    this.classList.toggle('close');
    let next = this.nextElementSibling;
    while (next && next.tagName === 'LI') {
      next.style.display = next.style.display === 'block' ? 'none' : 'block';
      next = next.nextElementSibling;
    }
  });
}

// スクロール出現アニメーション
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.scroll-reveal').forEach(el => {
  revealObserver.observe(el);
});
