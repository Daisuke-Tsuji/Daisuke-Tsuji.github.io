$(function(){
	//アコーディオン
	$('.faq-list .faq-list__question').on('click',function(){
	  $(this).next('.faq-list__answer').slideToggle();
	});

	//ページ内リンク
	$('a[href^="#"]').on('click', function () {
		var windowWidth = $(window).width();
		var headerHight = 94; 
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHight;
		$("html, body").animate({scrollTop: position}, 1000, "swing");
		return false;
	  });

	  $('.hamburger-menu-link').on('click', function(e){
		$('#menu-btn-check').trigger('click');
	  });
	  
	  //お問い合わせ入力必須設定
	  const $submitBtn = $('#js-submit')
	  $('.form__field, #privacyCheck').on('change', function () {
		  if (
			$('#form-validate-1').val() != "" &&
			$('#form-validate-2').val() != "" &&
			$('#form-validate-3').val() != "" &&
			$('#privacyCheck').prop('checked') === true
			 ) {
				$submitBtn.prop('disabled', false);
				 } else {
				$submitBtn.prop('disabled', true);
				}
		});
		
		//Googleform
		$('#form-check').on('submit', function (event) {
			var formData = $('#form-check').serialize();
			$.ajax({
			  url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeatzuehql_akzR-g5ChVVKxWcUgwNIZNXboeOxEhoisslIsw/formResponse",
			  data: formData,
			  type: "POST",
			  dataType: "xml",
			  statusCode: {
				0: function () {
				  $(".end-message").slideDown();
				  $("#js-submit").fadeOut();
				  $('#form-validate-1').find(':text').val("");
				  $('#form-validate-3').find(':text').val("");
				  $('#form-validate-2').find(':text').val("");
				  $('#privacyCheck').find(':checkbox').val("");
				},
				200: function () {
				  $(".false-message").slideDown();
				}
			  }
			});
			event.preventDefault();
		  });
})