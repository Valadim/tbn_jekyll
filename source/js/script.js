let d = document;

    // Модальное окно "заказать звонок"
    let modalOpenBtn = d.querySelector('.header__callback-btn');
    let modalCloseBtn = d.querySelector('.modals__close-btn');
    let modalCallback = d.querySelector('.modals-callback');
    let displayNoneClass = 'modal-hide';

    function modalOpening(btn, modal, className) {

      btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.remove(className);
      });
    }

    function modalClosing(btn, modal, className) {

        btn.addEventListener('click', function (evt) {
          evt.preventDefault();
          modal.classList.add(className);
        });


      window.addEventListener('click', function (evt) {
        if (evt.target == modal) {
          modal.classList.add(className);
        }
      });

      window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (!modal.classList.contains(className)) {
            modal.classList.add(className);
          }
        }
      });
    }

    modalOpening(modalOpenBtn, modalCallback, displayNoneClass);
    modalClosing(modalCloseBtn, modalCallback, displayNoneClass);

    // Мобильное меню

    let menuOpenBtn = d.querySelector('.header__menu-btn');
    let menuCloseBtn = d.querySelector('.main-nav__close-btn');
    let mainNav = d.querySelector('.main-nav');

    menuOpenBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      mainNav.classList.remove('m-hide');
    });

    menuCloseBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      mainNav.classList.add('m-hide');
    });

    // Выпадающее меню
    let navItem = d.querySelectorAll('.main-nav__item');

    for (let i = 0; i < navItem.length; i++) {
      navItem[i].addEventListener('click', function () {
        this.classList.toggle('main-nav__item--active');
      });
    }

    /* Кнопка на верх */

    (function () {
      function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
          goTopBtn.classList.add('footer__top-btn--show');
        }
        if (scrolled < coords) {
          goTopBtn.classList.remove('footer__top-btn--show');
        }
      }

      function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -80);
          setTimeout(backToTop, 0);
        }
      }

      var goTopBtn = document.querySelector('.footer__top-btn');

      window.addEventListener('scroll', trackScroll);
      goTopBtn.addEventListener('click', backToTop);
    })();
