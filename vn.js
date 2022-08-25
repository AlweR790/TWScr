

function GetVillageName(id) {
	var name = localStorage.getItem(id);
	if (name = null)
		name = "undefined";
	return name;
}

var nameSaveButtons = new Array();
var savedCounter = 0;
var numberOfTheBeast = 100; /* ms */
var saveDelay = numberOfTheBeast;
renameVillages();


function renameVillages() {
	try {
		$('.quickedit-vn').each(function (key, village) { //each village
			var villageId = $(village).attr('data-id');
			var $label = $(village).find('.quickedit-label');

			var name = '';
			name = GetVillageName(villageId);
			if (name.length <= 32) {
				$(village).find('.rename-icon').click();
				$(village).find('input[type=text]').val(name);
				var nameSaveButton = $(village).find('input[type=button]');
				nameSaveButtons.unshift(nameSaveButton);
			} else {
				UI.InfoMessage('Název je příliš dlouhý (max. 32 znaků).<br/>Nový název nebude aplikován na všechny vesnice.', 5000, 'error');
			}

		});

		/* Get the village names ready to save */
		saveVillages();
	} catch (e) { alert(e) }
}

function saveVillages() {
	if (nameSaveButtons.length > 0) {
		window.setTimeout(
			function () {
				var button = nameSaveButtons.pop();
				console.log(nameSaveButtons);
				button.click();
				savedCounter++;

				if (nameSaveButtons.length > 0) {
					UI.InfoMessage(('Přejmenované vesnice #' + savedCounter), 5000, 'success');
					saveVillages();
				} else {
					UI.InfoMessage('Názvy vesnic byly úspěšně změněny.', 5000, 'success');
				}
			},
			saveDelay
		);
	} else {
		UI.InfoMessage('Názvy vesnic byly úspěšně změněny.', 5000, 'success');
	}
}



