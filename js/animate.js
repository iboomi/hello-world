var $skill = $('#second');
$skill.waypoint(function(){
  $('.skill1').addClass('js-skill-animate'),
  $('.skill2').addClass('js-skill2-animate'),
  $('.skill3').addClass('js-skill3-animate')

},{offset: '30%'});
