/* INDEX EXAMPLE CODE SWITCH */
$('body').on('click', '[data-endpoint-select]', function () {
  var chosenEndpoint = $(this).attr('data-endpoint-select');

  $('body').find('[data-endpoint-select]').removeClass('selected');
  $(this).addClass('selected');

  $('body').find('[data-endpoint]').hide();
  $('body')
    .find('[data-endpoint="' + chosenEndpoint + '"]')
    .show();
});
