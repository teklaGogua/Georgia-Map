'use strict';

const pages = document.querySelectorAll('.page');

for (let i = 0; i < pages.length; i++) {
  pages[i].addEventListener('click', function () {
    if (i < 13) {
      $('.displayPlace').load(`pages/${this.id}.html`);
    } else {
      i = i - 12;
      $('.displayPlace').load(`pages/${pages[i].id}.html`);
    }
    pages.forEach(page => {
      page.style.backgroundColor = '#4b3075';
    });
    pages[i].style.backgroundColor = '#32204f';
  });
}
