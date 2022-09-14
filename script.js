'use strict';

// Loads Map in div with class displayPlace
$('.displayPlace').load(`pages/map.html`);

// Code will run when the document structure is ready
$(function () {
  // Attach an event handler function for navbar and map
  $(document).on('click', '.page', function () {
    // Variables
    const pageIndex = $(`#${this.id}`).index();
    let pageId = this.id;

    // Checks if index of page is 0 (clicked from navbar) or
    // 1 (clicked on map), and executes code
    if (pageIndex === 0) {
      $('.displayPlace').load(`pages/${pageId}.html`);
    } else if (pageIndex === 1) {
      // If index equals to 1, subtracts last character (0) from
      // the string
      pageId = pageId.substring(0, pageId.length - 1);
      $('.displayPlace').load(`pages/${pageId}.html`);
    }

    // Changes color of clicked navbar element
    $('.page').css('background-color', '#4b3075');
    $(`#${pageId}`).css('background-color', '#32204f');
  });
});
