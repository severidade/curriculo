$.getJSON("http://rarolabs.com.br:88/alunos.json", "json", function(pegacurriculo) {
	$.each(pegacurriculo, function(key, val) {
	$("#curriculos #alunos").append("<h3>"+val['nome']+"</h3> <p>"+val['mini_curriculo']+"</p><p><a href='"+val['link_html']+"'>Currículo</a></p>")
	});
});