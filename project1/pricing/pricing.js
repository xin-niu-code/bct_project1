/* FAQ open-close */
$('body').on('click', '.faq .topic ul li p.question', function () {
  if ($(this).closest('li').hasClass('open')) {
    $(this).closest('li').removeClass('open');
    return;
  }
  $('body').find('.faq .topic ul li').removeClass('open');
  $(this).closest('li').addClass('open');
});
