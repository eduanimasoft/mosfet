var active_section_number = 0;

var theory_sections = {
	0: 'theory_rozdelenie',
	1: 'theory_ind_kanal',
	2: 'theory_vod_kanal',
	3: 'theory_meranie_ut',
	4: 'theory_prah_napat',
	5: 'theory_schock_rov',
	6: 'theory_vlast_mos',
}

function update_theory(section_number){
	if (section_number == active_section_number) 
		return;
		
	$('#' + theory_sections[active_section_number]).removeClass( [ "animate__animated", "animate__fadeInUp", "animate__fadeOutDown", "animate__fadeOutUp", "animate__fadeInDown" ] );
	$('#' + theory_sections[section_number])   .removeClass( [ "animate__animated", "animate__fadeInUp", "animate__fadeOutDown", "animate__fadeOutUp", "animate__fadeInDown" ] );
	
	if (active_section_number < section_number) {
		$('#' + theory_sections[active_section_number]).addClass("animate__animated animate__fadeOutUp");
		$('#' + theory_sections[section_number])   .addClass("animate__animated animate__fadeInUp");
	}
	else {
		$('#' + theory_sections[active_section_number]).addClass("animate__animated animate__fadeOutDown");
		$('#' + theory_sections[section_number])   .addClass("animate__animated animate__fadeInDown");
	}
	
	document.getElementById(theory_sections[section_number]).style.display = "block";
	active_section_number = section_number;
}

$('.theory_left_menu_item').on('click', function(){
    $('.theory_left_menu_item').removeClass('theory_left_menu_item_selected');
    $(this).addClass('theory_left_menu_item_selected');
});