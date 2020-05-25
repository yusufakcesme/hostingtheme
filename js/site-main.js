
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


/* ehader nav dropdown */


$('.head-nav-item').on('click', function () {
  if ($(this).parent().find('.nav-dropdown').css("display") === "none") {
    $('.nav-dropdown').removeClass('show-dropdown')
    $('.head-li').removeClass('active-header-nav')
    $(this).parent().addClass('active-header-nav')
    $(this).parent().find('.nav-dropdown').toggleClass('show-dropdown')
  } else {
    $(this).parent().removeClass('active-header-nav')
    $(this).parent().find('.nav-dropdown').removeClass('show-dropdown')
  }
})