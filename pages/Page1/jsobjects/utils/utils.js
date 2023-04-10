export default {

	change_lines: () => {

		let newText = Api1.data.diff.
		//.split(/\r?\n/)
		return (newText);
	},
	
	enc_base64s: () => {
		let encodedText = btoa(Api1.data.diff);

		return encodedText;
	},
	myFun2: async () => {
		//use async-await or promises
	}
}