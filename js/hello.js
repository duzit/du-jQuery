
$(function() {
  $('.box').css({
    width: '200px',
    height: '200px',
    background: 'red'
  })

  $('.la').unbind();
  $('.la').click(function() {
    let ele = $(this).children('span');
    ele.toggle(300)
  })

  $('.button1').click(function() {
    $('.la').unbind();
    $('.la').click(function() {
      let ele = $(this).children('span');
      ele.toggle(300)
    })
    $('.ul2').toggle();
  })

  $('.la').each(function(index) {
    console.log(index, 0);
  })
})