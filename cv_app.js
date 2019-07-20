




/****************************MAIN MENU******************************************/


var tl_about = new TimelineMax({paused:true});
	var about_button = $('.about_me');
		tl_about.to(about_button, 0.5, {scale:1.5, color:"#ffffff", ease: Sine.easeInOut})

			function over_two(){
			  tl_about.play();}
			function out_two(){
			  tl_about.reverse();}

				about_button.hover(over_two, out_two);

/*************/

var tl_work = new TimelineMax({paused:true});
	var work_button = $('.experience');
		tl_work.to(work_button, 0.5, {scale:1.3, color:"#ffffff", ease: Sine.easeInOut})

			function over_three(){
			  tl_work.play();}
			function out_three(){
			  tl_work.reverse();}

				work_button.hover(over_three, out_three);

/*************/

var tl_mywork = new TimelineMax({paused:true});
	var mywork_button = $('.work');
		tl_mywork.to(mywork_button, 0.5, {scale:1.5, color:"#ffffff", ease: Sine.easeInOut})

			function over_four(){
			  tl_mywork.play();}
			function out_four(){
			  tl_mywork.reverse();}

				mywork_button.hover(over_four, out_four);

/*************/

var tl_contact = new TimelineMax({paused:true});
	var contact_button = $(".contact");
		tl_contact.to(contact_button, 0.5, {scale:1.5, color:"#ffffff", ease: Sine.easeInOut})

			function over_five(){
			  tl_contact.play();}
			function out_five(){
			  tl_contact.reverse();}

				contact_button.hover(over_five, out_five);

/****************************MAIN MENU******************************************/






/****************************BOTTOM BACKGROUND******************************************/
  var back_lines = document.querySelector(".backer_lines");

	  var tl_lines = new TimelineMax({repeat:-1})
	    .to(".backer_lines", 3, {stroke:'#FFA500', strokeWidth:6, ease:Sine.easeOut})
	    .to(".backer_lines", 3, {stroke:'#EDF1AD', strokeWidth:7, ease:Sine.easeOut})
	    .to(".backer_lines", 3, {stroke:'#A3D2A8', strokeWidth:8, ease:Sine.easeOut})
	    .to(".backer_lines", 3, {stroke:'#2F828C', strokeWidth:10, ease:Sine.easeOut})
	    .to(".backer_lines", 3, {stroke:'#1D1C3E', strokeWidth:15, ease:Sine.easeOut})
	   	.to(".backer_lines", 3, {stroke:'#FFA500', strokeWidth:6, ease:Sine.easeOut})

/****************************BOTTOM BACKGROUND******************************************




/****************************QOUTE BANNER******************************************
var texts = [

"Its not the love you make. its the love you give. - NIKOLA TESLA",

"Logic will get you from A to B. Imagination will take you everywhere - ALBERT EINSTEIN",

"INSANITY: Doing the same thing over and over again and expecting different results - ALBERT EINSTEIN",

"Life would be tragic if it weren't funny - STEVEN HAWKING",

"Intelligence is the ability to adapt to change - STEVEN HAWKING",

"Pleasure in the job puts perfection in the work - ARISTOTLE",

"Wise men talk because they have somthing to say; fools, because they have to say something - PLATO",

"To every action there is always opposed an equal reaction - ISAAC NEWTON"

];
var count = 0;
function changeText() {
    $(".theqoutebanner").text(texts[count]);
    count < 7 ? count++ : count = 0;
}
setInterval(changeText, 5000); 
/****************************QOUTE BANNER******************************************/











/****************************PAUSE MENU******************************************/
var box     = document.querySelector('.the_pause_menu');

var pause_buttons = document.querySelector('.top_banner');

var play    = document.querySelector('.pause_button');
var reverse = document.querySelector('.reverse_button');

var tl_pausemenu = new TimelineMax({paused: true})

	
          .to(box, 0.1, {opacity:1, display:'unset',
          	background: "linear-gradient( 0.75turn, #fff 0%, #000 100% )", 
          	zIndex:200, ease: Sine.easeInOut})

          .to(play, 0.5, {opacity:0, ease: Sine.easeInOut, zIndex: 340})
          .to(reverse, 0.1, {opacity:1, zIndex:350, ease: Sine.easeInOut})


play.addEventListener('click', function() {
  tl_pausemenu.play();
  
});
reverse.addEventListener('click', function() {
  tl_pausemenu.reverse();
});
/****************************PAUSE MENU******************************************/



/*************PAUSE ITEMS***************/
var player   = document.querySelector('.pause_button');
var reverser = document.querySelector('.reverse_button');

var about_option= document.querySelector('.option_two');
var experience_option = document.querySelector('.option_three');
var work_option = document.querySelector('.option_four');
var contact_option = document.querySelector('.option_five');


var tl_pauseitem = new TimelineMax({paused:true})
	.to(about_option, 0.4, {y:0, opacity:1, ease: Sine.easeInOut})
	.to(experience_option, 0.4, {y:150, opacity:1, ease: Sine.easeInOut})
	.to(work_option, 0.4, {y:300, opacity:1, ease: Sine.easeInOut})
	.to(contact_option, 0.4, {y:450, opacity:1, ease: Sine.easeInOut})


	player.addEventListener('click', function() {
  	tl_pauseitem.play();
	});

	reverser.addEventListener('click', function() {
	  tl_pauseitem.reverse();
	});

/*************PAUSE ITEMS***************/




/************************WORK EXPERIENCE MORE INFO*********************************/

	var alert_box = document.querySelector('.the_pause_menu');

	var pennstudio_button = document.querySelector('.first_section');
	var pennstudio_desc = document.querySelector('.first_section_info');
	var penn_forwards   = document.querySelector('.penn_pause');
	var penn_backwards = document.querySelector('.penn_reverse');

	var arena_button = document.querySelector('.second_section');
	var arena_desc = document.querySelector('.second_section_info');
	var arena_forwards   = document.querySelector('.arena_pause');
	var arena_backwards = document.querySelector('.arena_reverse');

	var iforce_button = document.querySelector('.third_section');
	var iforce_desc = document.querySelector('.third_section_info');
	var iforce_forwards   = document.querySelector('.iforce_pause');
	var iforce_backwards = document.querySelector('.iforce_reverse');

	var seeyourself_button = document.querySelector('.fourth_section');
	var seeyourself_desc = document.querySelector('.fourth_section_info');
	var seeyourself_forwards   = document.querySelector('.seeyou_pause');
	var seeyourself_backwards = document.querySelector('.seeyou_reverse');

	var empire_button = document.querySelector('.fifth_section');
	var empire_desc = document.querySelector('.fifth_section_info');
	var empire_forwards   = document.querySelector('.empire_pause');
	var empire_backwards = document.querySelector('.empire_reverse');

	var charity_button = document.querySelector('.sixth_section');
	var charity_desc = document.querySelector('.sixth_section_info');
	var charity_forwards   = document.querySelector('.charity_pause');
	var charity_backwards = document.querySelector('.charity_reverse');

	var windmill_button = document.querySelector('.seventh_section');
	var windmill_desc = document.querySelector('.seventh_section_info');
	var windmill_forwards   = document.querySelector('.windmill_pause');
	var windmill_backwards = document.querySelector('.windmill_reverse');



	var tl_pennstudio = new TimelineMax({paused:true})
		.to(alert_box, 0.1,{opacity:1, 
          	background: "linear-gradient( 0.75turn, #fff 0%, #000 100% )", zIndex:200, ease: Sine.easeInOut})
		.to(pennstudio_desc, 0.1,{opacity:1, visibility:"visible", ease: Sine.easeInOut})
				penn_forwards.addEventListener('click', function(){
					tl_pennstudio.play();
				})
				penn_backwards.addEventListener('click', function(){
					tl_pennstudio.reverse();
				})


	var tl_arena = new TimelineMax({paused:true})
		.to(alert_box, 0.1,{opacity:1, 
          	background: "linear-gradient( 0.75turn, #fff 0%, #000 100% )", zIndex:200, ease: Sine.easeInOut})
		.to(arena_desc, 0.1,{opacity:1, visibility:"visible", ease: Sine.easeInOut})
				arena_forwards.addEventListener('click', function(){
					tl_arena.play();
				})
				arena_backwards.addEventListener('click', function(){
					tl_arena.reverse();
				})


	var tl_iforce = new TimelineMax({paused:true})
		.to(alert_box, 0.1,{opacity:1, 
          	background: "linear-gradient( 0.75turn, #fff 0%, #000 100% )", zIndex:200, ease: Sine.easeInOut})
		.to(iforce_desc, 0.1,{opacity:1, visibility:"visible", ease: Sine.easeInOut})
				iforce_forwards.addEventListener('click', function(){
					tl_iforce.play();
				})
				iforce_backwards.addEventListener('click', function(){
					tl_iforce.reverse();
				})

	var tl_seeyourself = new TimelineMax({paused:true})
		.to(alert_box, 0.1,{opacity:1, 
          	background: "linear-gradient( 0.75turn, #fff 0%, #000 100% )", zIndex:200, ease: Sine.easeInOut})
		.to(seeyourself_desc, 0.1,{opacity:1, visibility:"visible", ease: Sine.easeInOut})
				seeyourself_forwards.addEventListener('click', function(){
					tl_seeyourself.play();
				})
				seeyourself_backwards.addEventListener('click', function(){
					tl_seeyourself.reverse();
				})

	var tl_empire = new TimelineMax({paused:true})
		.to(alert_box, 0.1,{opacity:1, 
          	background: "linear-gradient( 0.75turn, #fff 0%, #000 100% )", zIndex:200, ease: Sine.easeInOut})
		.to(empire_desc, 0.1,{opacity:1, visibility:"visible", ease: Sine.easeInOut})
				empire_forwards.addEventListener('click', function(){
					tl_empire.play();
				})
				empire_backwards.addEventListener('click', function(){
					tl_empire.reverse();
				})

	var tl_charity = new TimelineMax({paused:true})
		.to(alert_box, 0.1,{opacity:1, 
          	background: "linear-gradient( 0.75turn, #fff 0%, #000 100% )", zIndex:200, ease: Sine.easeInOut})
		.to(charity_desc, 0.1,{opacity:1, visibility:"visible", ease: Sine.easeInOut})
				charity_forwards.addEventListener('click', function(){
					tl_charity.play();
				})
				charity_backwards.addEventListener('click', function(){
					tl_charity.reverse();
				})

	var tl_windmill = new TimelineMax({paused:true})
		.to(alert_box, 0.1,{opacity:1, 
          	background: "linear-gradient( 0.75turn, #fff 0%, #000 100% )", zIndex:200, ease: Sine.easeInOut})
		.to(windmill_desc, 0.1,{opacity:1, visibility:"visible", ease: Sine.easeInOut})
				windmill_forwards.addEventListener('click', function(){
					tl_windmill.play();
				})
				windmill_backwards.addEventListener('click', function(){
					tl_windmill.reverse();
				})











/****************CHNGE FOR WORK TO EDUCATION***************/
var titleone_change = document.querySelector('.title_one');
var reverse_titletwo = document.querySelector('.titletwo_button');
var play_titleone = document.querySelector('.titleone_button');

var titletwo_change = document.querySelector('.title_two');
var two_button = document.querySelector('.titletwo_button');

var work_experience_section = document.querySelector('.work_experience');

var school_section = document.querySelector('.school')


tl_titleone = new TimelineMax({paused:true})
    .to(titleone_change, 0.1, {visibility:"hidden", ease: Sine.easeInOut})
    .to(play_titleone, 0.1, {visibility:"hidden", ease: Sine.easeInOut})
    .to(work_experience_section, 0.1, {visibility:"hidden", ease: Sine.easeInOut})

    .to(titletwo_change, 0.1, {visibility:"visible", ease: Sine.easeInOut})
    .to(reverse_titletwo, 0.1, {visibility:"visible", ease: Sine.easeInOut})
    .to(school_section, 0.1, {visibility:"visible", ease: Sine.easeInOut})








  play_titleone.addEventListener('click', function() {
    tl_titleone.play();
  });

  reverse_titletwo.addEventListener('click', function() {
    tl_titleone.reverse();
  });


/************************WORK EXPERIENCE MORE INFO*********************************/




/************************SCHOOL BUBBLE MOVERS*********************************/
var bubble_one   = document.querySelector('#school_one');
var bubble_two = document.querySelector('#school_two');
var bubble_three = document.querySelector('#school_three');
var bubble_four = document.querySelector('#school_four');
var bubble_five = document.querySelector('#school_five');

play_bubble = document.querySelector('.titleone_button');
reverse_bubble = document.querySelector('.titletwo_button');



var tl_bubble = new TimelineMax({paused:true})
  .to(bubble_one, 1, {ease: Sine.easeInOut})
  .to(bubble_two, 1, {y:420, ease: Sine.easeInOut})
  .to(bubble_three, 1, {y:840, ease: Sine.easeInOut})
  .to(bubble_four, 1, {y:1260, ease: Sine.easeInOut})
  .to(bubble_five, 1, {y:1680, ease: Sine.easeInOut})

    play_bubble.addEventListener('click', function() {
    tl_bubble.play();
  });

  reverse_bubble.addEventListener('click', function() {
    tl_bubble.reverse();
  });
/************************SCHOOL BUBBLE MOVERS*********************************/




    

var backinglines = document.querySelector('.backing_liner');
var backing_grad = document.querySelector('.svg_gradient');

var play_backing = document.querySelector('.titleone_button');
var reverse_backing = document.querySelector('.titletwo_button');

	var tl_backing = new TimelineMax({paused:true})
	.to(backinglines, 1, {attr:{ viewBox:"0 0 350.28 695.89"},ease:Power2.easeInOut},"+=.5")
	.to(backing_grad, 1, {height:"235%"})

		play_backing.addEventListener('click', function() {
		    tl_backing.play();
		  });

		  reverse_backing.addEventListener('click', function() {
		    tl_backing.reverse();
		  });
