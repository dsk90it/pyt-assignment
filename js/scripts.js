$(document).ready(function() {
  /* FILTER */
  $('.show-filter').click(function(e){
    e.preventDefault();
    $('.filter-options').show();
  });

  $('.hide-filter').click(function(e){
    e.preventDefault();
    $('.filter-options').hide();
  });

  /* MOBILE FILTER ACCORDION */
  $(document).on('click', '.filter-accord-btn', function(e){
    e.preventDefault();
    var accordionContent = '.filter-accord-content';
    $(this).next(accordionContent).show();

    if($(this).next(accordionContent).css('display') == 'block'){
      $(this).hide();
    }
  });

  $(document).on('click', '.hide-filter-accordion', function(){
    $(this).closest('.filter-col').find('.filter-accord-btn').show();
    $(this).parent().hide();
  });

  /* DEAL BOX SHOW MORE */
  $(document).on('click', '.show-more-list', function(e){
    e.preventDefault();
    var _this = $(this)

    if($(window).width() < 767){
      var showList = '.deal-list';
      $(showList).hide();
      $('.left-img').css('height', 'auto');
      $('.show-more-list').show();
      $('.mobile-cost-txt').hide();

      var $parentEl = _this.closest('.deal-box');
      $parentEl.find('.left-img').css('height', '135px');
      $parentEl.find('.deal-list').show();
      $parentEl.find('.mobile-cost-txt').show();

      _this.hide();
    }
  });

  /* ABOUT CONTENT SHOW MORE */
  $('.abt-more-link').click(function(e){
    e.preventDefault();
    $('.abt-more-content').show();
    if($('.abt-more-content').css('display') == 'block'){
      $(this).hide();
    }
  });
});
