// JavaScript Document

// -------------------- Menu Fixo --------------------
var tela=$(window).height(); //pega a altura em pixels da tela do navegador
$(window).scroll(function(){
	if($(this).scrollTop() > tela-60){ 
		$("nav").addClass("fixamenu")
	}else{
		$("nav").removeClass("fixamenu")
	}
	if($(this).scrollTop() > 2*tela){
		$(".html5").addClass("animahtml5")
		$(".css3").addClass("animacss3")
		$(".jquery").addClass("animajquery")
		$(".front").addClass("animafront")
		$(".photo").addClass("animaphoto")
		$(".illustrator").addClass("animaillustrator")
	}else{
		$(".html5").removeClass("animahtml5")
		$(".css3").removeClass("animacss3")
		$(".jquery").removeClass("animajquery")
		$(".front").removeClass("animafront")
		$(".photo").removeClass("animaphoto")
		$(".illustrator").removeClass("animaillustrator")
	}
})

// -------------------- Efeito Parallax --------------------
$(function(){
	$("#home").click(function(){
		$("html").animate({
			scrollTop:0
		}, 1000)
	})
	$("#pag1").click(function(){
		$("html").animate({
			scrollTop:$("#sobre").offset().top
		}, 1000)
	})
	$("#pag2").click(function(){
		$("html").animate({
			scrollTop:$("#habilidades").offset().top
		}, 1000)
	})
	$("#pag3").click(function(){
		$("html").animate({
			scrollTop:$("#portfolio").offset().top
		}, 1000)
	})
	$("#pag4").click(function(){
		$("html").animate({
			scrollTop:$("#contato").offset().top
		}, 1000)
	})
})

// -------------------- Galeria (efeito slick) --------------------
$(function(){
	$(".galeria").slick({
		slidesToShow:3,
		autoplay:true,
		dots:true
	})
})




