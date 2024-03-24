import axios from 'axios'

export default {
	state: {
		windowMail: false,
		messageLED: false,
		messageText: '',
	},
	mutations: {
		CHANGE_LED: (state, payloade) =>{
			state.messageLED = payloade;
		},
		СHANGE_TEXT: (state, payloade) =>{
			state.messageText = payloade;
		},
		WINDOW_MAIL: (state, payloade) =>{
			state.windowMail = payloade;
		}
	},
	getters:{
		CHANGE_LED: (state) =>{
			return state.messageLED
		},
		GET_TEXT: (state) =>{
			return state.messageText
		},
		WINDOW_MAIL: (state) =>{
			return state.windowMail
		},
	},
	actions: {
		SET_FORM: (context, submit) =>{

			axios.post('http://sergeydef.fun/php/mail.php', {
				'name_form': submit.name,
				'email_form': submit.email,
				'phone_form': submit.phone,
				'text_form': submit.text,
			})
			.then(function ( response ) {
				console.log(response);
			})
			.catch(function ( error ){
				console.log(error);
			})
		},
		CHANGE_LED: ({ commit }) =>{
			setInterval(() => commit('CHANGE_LED', false), 4000);
			// commit('CHANGE_LED', setInterval(() =>))
		},
		SET_FORM_MIN: (context, submit) =>{

			axios.post('http://sergeydef.fun/php/mail_min.php', {
				'tema_form': submit.tema,
				'text_form': submit.text,
			})
			.then(function ( response ) {
				console.log(response);
			})
			.catch(function ( error ){
				console.log(error);
			})
		}
	},
	modules: {
	}
}
