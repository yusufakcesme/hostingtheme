
$('.mobile-menu-button').on('click', function () {
  $('.mobile-menu').slideToggle()
})


$('.mobile-nav-item').on('click', function () {
  if ($(this).parent().find('.mobile-dropdown').css("display") === "none") {
    $('.mobile-dropdown').slideUp()
    $(this).parent().find('.mobile-dropdown').slideDown()
  } else {
    $(this).parent().find('.mobile-dropdown').slideUp()
  }
})
