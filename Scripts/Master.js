/* Common JS file */
document.onscroll=function(){
	var scrollTop = $(document).scrollTop();
	var scrollDownError = document.getElementById("scrollDownErrow");
	if (scrollTop > 0) {
		scrollDownError.style.visibility = "hidden"
	} else {
		scrollDownError.style.visibility = "visible"
	}
};

$(document).ready(function() { 
	doBounce($("#scrollDownErrow"), 100, '1em', 600); 

	// Attach on click events to id
	$(".iconContactCircle .iconResume").parent().click(function(){
		window.open('Resources/OksanaZvarych3B.pdf', '_blank');
	});
	$(".iconContactCircle .iconLinkedin").parent().click(function(){
		window.open("https://www.linkedin.com/in/ozvarych");
	});
	$(".iconContactCircle .iconGit").parent().click(function(){
		window.open("https://github.com/ozvarych");
	});
	$(".iconContactCircle .iconEmail").parent().click(function(){
		$( "#dialog" ).dialog({
			buttons: [{
				text: "Cancel",
					icons: {
						primary: "ui-icon-heart"
					},
					click: function() {
					$( this ).dialog( "close" );
					}
			},{
				text: "Send",
					icons: {
						primary: "ui-icon-heart"
					},
					click: function() {
					$( this ).dialog( "close" );
					var from =  $('#userEmail').val();
					var subject = $('#userEmailSubject').val();
					var body = $('#emailBody').val() + 'From: ' + from;
					sendEmail(from, subject, body);
					}
			}]
		});
	});

	$(".iconHomeCircle").click(function(){
		window.location = 'index.html';
	});
	var index = window.location.toString().lastIndexOf("/") + 1; 
	var fileName = window.location.toString().substr(index);
	$(".iconCircle .iconPortfolio").click(function(){
		if(fileName != "Portfolio.html") {
			window.location = 'Portfolio.html';
		}
	});
	$(".iconCircle .iconSkills").click(function(){
		if(fileName != 'Skills.html') {
			window.location = 'Skills.html';
		}
	});
	$(".iconCircle .iconProjects").click(function(){
		if(fileName != 'Projects.html') {
			window.location = 'Projects.html';
		}
	});


});

$(document).load (function() {
	doBounce($("#scrollDownErrow"), 100, '1em', 600); 
});

$(window).load(function () {

	var originalBorder = $('.iconCircle').css('border-color');
	var originalBackground = $('.iconCircle').css('background-color');
	mainBtnBackground('.iconCircle', originalBorder, originalBackground);

    var contactBgnd = $('.iconContactCircle').css('background-color');
    contactBtnBorder('.iconContactCircle', "#2ABBAE", contactBgnd);

    var contactHomeBgnd = $('.iconHomeCircle').css('border-color');
    contactBtnBorder('.iconHomeCircle', "#e8e8e8", contactHomeBgnd);

});

function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }        
}

function sendEmail(from, subject, message) {
	var to = 'zvarycho@gmail.com';
	var body = message + 'From: ' + from;
	window.open('mailto:' + to +'?subject=' + subject + '&body=' + body);  
}

function mainBtnBackground(obj, border, background) {
	$(obj).hover(
        function () {
            $(this).animate({ 
            	'background-color': "#2ABBAE"}, 1);
            $(this).animate({ 
            	'background-color': "#FFFFFF"}, 600);
        },
        function () {
        	$(this).animate({ 
            	'background-color': background}, 300);
        }
    );
}

function contactBtnBorder(obj, colour, border) {
    $(obj).hover(
        function () {
            $(this).animate({ 
                'border-color': colour}, 300);
        },
        function () {
            $(this).animate({ 
                'border-color': border}, 300);
        }
    );
}