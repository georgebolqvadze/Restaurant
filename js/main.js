var mobile_menu = document.querySelector('.mobile-menu');
var upper_header_right = document.querySelector('.upper-header-right');
var cancel = document.querySelector('.cancel');
var lightImg = document.querySelectorAll('.light');
var darkImg = document.querySelectorAll('.dark');

mobile_menu.addEventListener('click', function(){

  mobile_menu.classList.add('remove');
  cancel.classList.add('block');
  upper_header_right.classList.add('flex');
})

cancel.addEventListener('click', function(){

  mobile_menu.classList.remove('remove');
  cancel.classList.remove('block');
  upper_header_right.classList.remove('flex');
})

darkImg.forEach(function(e){
	e.addEventListener('click', function(){
	e.classList.toggle('added');
	console.log(e);
  })
})
