//スクロール
//アコーディオンメニュー
//モーダル
//ハンバーガーメニュー

// const openBtns = document.querySelectorAll('.openModal');
// const modals = document.querySelectorAll('.modal');
// const closeBtn = document.getElementById('closeBtn');
// const overlay = document.getElementById('closeModal');

// openBtns.addEventListener('click', () =>{
//     modals.classList.add('active');
// });

// closeBtn.addEventListener('click', () => {
//     modals.classList.remove('active');
// });

// overlay.addEventListener('click', () => {
//     modals.classList.remove('active');
// });


// openBtns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     modals[index].classList.add('active');
//   });
// });



//burger
const hamburger = document.querySelector('#hamburger');
const aside = document.querySelector('#aside');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    aside.classList.toggle('active');
    hamburger.classList.toggle('active');
  })
}



const openBtns = document.querySelectorAll('.openModal');
// const overlay = document.querySelectorAll('.modal__overlay');
openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.modal;
    const modal = document.querySelector(`.modal[data-modal="${id}"]`);
    modal.classList.add('active');
  });
});

document.querySelectorAll('.modal__close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal'); // ←これが重要
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
});

document.querySelectorAll('.modal__overlay').forEach(overlay => {
  overlay.addEventListener('click', () => {
    const modal = overlay.closest('.modal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
});


// $('.aside__nav--info p').on('click', function () {
//   var findElm = $(this).next(".aside__nav--info li");
//   $(findElm).slideToggle();

//   if($(this).hasClass('close')){
//     $(this).removeClass('close');
//   }else{
//     $(this).addClass('close');
//   }
// });



document.querySelector('.aside__nav--info p').addEventListener('click', function () {
  // 1. クリックされたpタグ自体に'close'クラスを切り替え
  this.classList.toggle('close');

  // 2. 次の要素から順番にチェックしていく
  let nextElm = this.nextElementSibling;

  while (nextElm && nextElm.tagName === 'LI') {
    // 表示・非表示を切り替え
    if (nextElm.style.display === 'block') {
      nextElm.style.display = 'none';
    } else {
      nextElm.style.display = 'block';
    }

    // 次の兄弟要素へ移動
    nextElm = nextElm.nextElementSibling;
  }
});


document.querySelector('.aside__nav--menu p').addEventListener('click', function () {
  // 1. クリックされたpタグ自体に'close'クラスを切り替え
  this.classList.toggle('close');

  // 2. 次の要素から順番にチェックしていく
  let nextElm = this.nextElementSibling;

  while (nextElm && nextElm.tagName === 'LI') {
    // 表示・非表示を切り替え
    if (nextElm.style.display === 'block') {
      nextElm.style.display = 'none';
    } else {
      nextElm.style.display = 'block';
    }

    // 次の兄弟要素へ移動
    nextElm = nextElm.nextElementSibling;
  }
});


function toggleReservationFields() {
  const typeSelect = document.getElementById('type');
  const resFields = document.getElementById('reservation-fields');

  if (typeSelect.value === 'reserve') {
    resFields.style.display = 'block'; // 表示
  } else {
    resFields.style.display = 'none';  // 非表示
  }
}