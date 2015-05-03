angular.module('ibwturkey.services', [])
.factory('SpeakersModel', function() {
	var speakers = [{
		id: 0,
		name: 'Hatice Meriç',
		linkedin: 'http://ibwturkey.com/#',
		company : 'Technical Consultant at IBM',
		face: 'http://ibwturkey.com/wp-content/uploads/33062fa.jpg'
	},{
		id: 1,
		name: 'Melek Pulatkonak',
		linkedin: 'https://tr.linkedin.com/in/pulatkonak/tr',
		company : 'TurkishWIN',
		face: 'http://ibwturkey.com/wp-content/uploads/melek.jpg'
	},{
		id: 2,
		name: 'Aytül Erçil',
		linkedin: 'https://tr.linkedin.com/pub/aytul-ercil/3/3b4/b83/tr',
		company : 'CEO at Vistek ISRA Vision',
		face: 'http://ibwturkey.com/wp-content/uploads/rsz_aytül.jpg'
	},{
		id: 3,
		name: 'Işık Yargın',
		linkedin: 'https://tr.linkedin.com/pub/ik-yargn/4/309/a42/tr',
		company : 'Ansiad Girişimcilik Komisyonu Başkanı',
		face: 'http://ibwturkey.com/wp-content/uploads/rsz_ısık.jpg'
	},{
		id: 4,
		name: 'Senem Anıl',
		linkedin: 'https://tr.linkedin.com/pub/jale-akyel/0/689/ba7/tr',
		company : 'Cofounder at e-nerjik.com',
		face: 'http://ibwturkey.com/wp-content/uploads/rsz_senem.jpg'
	},{
		id: 5,
		name: 'Miray Alanlar',
		linkedin: 'https://www.linkedin.com/in/mirayalanlar/tr',
		company : 'Team Lead at Mobile Action',
		face: 'http://ibwturkey.com/wp-content/uploads/rsz_1miray.jpg'
	}];
	return {
		all: function() {
			return speakers;
		},
		remove: function(speakerId) {
			//console.log(speakers.indexOf(speakerId));
			speakers.splice(speakers.indexOf(speakerId), 1);
		},
		get: function(speakerId) {
			for (var i = 0; i < speakers.length; i++)
				if (speakers[i].id === parseInt(speakerId))
					return speakers[i];
			return null;
		}
	};
});
