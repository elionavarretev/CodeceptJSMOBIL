class ConstUtil {
	constructor(){
		
		this.WAIT_A_MOMMENT = 'espere un momento';
		this.WAITING_TIME = 8;

		this.APP_CORRECTO = 'Se entró al APP correctamente.';
		this.SE_INGRESA = 'Se ingresa.';
		this.SE_INGRESA_CREDENCIALES = 'Se ingresa pais, usuario y password.';
		this.SE_INGRESA_CORRECTAMENTE = 'Se ingresa correctamente al aplicativo';
	}
}

module.exports = new ConstUtil();
module.exports.ConstUtil = ConstUtil;