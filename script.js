'use strict';

$(function () {
  $(document).on('click', '.page', function () {
    const pageIndex = $(`#${this.id}`).index();
    let pageId = this.id;

    if (pageIndex === 0) {
      $('.displayPlace').load(`pages/${pageId}.html`);
    } else if (pageIndex === 1) {
      pageId = pageId.substring(0, pageId.length - 1);
      $('.displayPlace').load(`pages/${pageId}.html`);
    }

    $('.page').css('background-color', '#4b3075');
    $(`#${pageId}`).css('background-color', '#32204f');
  });
});
