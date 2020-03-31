const BaseLocator = require('../../base/BaseLocator')

class loginLocator extends BaseLocator.BaseLocator {
  constructor(){
  super();
  
  this.btnIngresar = 'biz.belcorp.consultoras.esika:id/btn_login';
  this.btnAceptar = 'biz.belcorp.consultoras.esika:id/btn_aceptar';
  this.cmbPais = "biz.belcorp.consultoras.esika:id/tvw_country";
  this.txtUsuario = "biz.belcorp.consultoras.esika:id/tie_username";
  this.txtContrasenia ="biz.belcorp.consultoras.esika:id/tie_password";
  this.btnLogin ="biz.belcorp.consultoras.esika:id/btn_login";

  }
}
module.exports = new loginLocator();
module.exports.loginLocator = loginLocator;