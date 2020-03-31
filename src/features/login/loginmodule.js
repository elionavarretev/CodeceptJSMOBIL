const BaseModule = require('../../base/BaseModule');
const locator = require('./loginlocator');

class loginmodule extends BaseModule.BaseModule {
    constructor(){
      super();
    }
    
    Inicializar(usuario, clave) {      
      //this.I.tap({id:locator.cmbPais});
      //this.I.tap("Perú");
      this.I.fillField ({id:locator.txtUsuario}, usuario);
      this.I.fillField({id:locator.txtContrasenia}, clave);
    }

    Ingresar() {
      this.I.tap({id:locator.btnIngresar});
    }

    IngresarSesion() {
      this.I.tap({id:locator.btnLogin});
    }

    Aceptar() {
      this.I.tap({id:locator.btnAceptar});
    }

    Esperar() {
      this.I.wait(15);
    }

    Validaciones() {
    }

}
module.exports = new loginmodule();
module.exports.loginmodule = loginmodule;
