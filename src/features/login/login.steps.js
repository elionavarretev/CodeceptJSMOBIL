const mModule = require('./loginmodule');
const ConstUtil = require('../../utils/ConstUtil');

Given('he ingresado al aplicativo de ESIKA2',() => {  
  mModule.saveScreenshotWithMocha(__filename,ConstUtil.APP_CORRECTO);
});

When('selecciono iniciar sesion', () => {  
  //mModule.Esperar();
  mModule.Ingresar();    
  mModule.saveScreenshotWithMocha(__filename,ConstUtil.APP_CORRECTO);
});

When(/^selecciono "(.*)" ingreso mi "(.*)" y "(.*)"$/, (region, usuario, clave)=> {
  mModule.Aceptar();  
  mModule.Inicializar(usuario,clave);
  mModule.IngresarSesion();
  mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_INGRESA_CREDENCIALES);
});

Then('puedo ver realizar alguna operaciona', () => {
  mModule.Validaciones();
  mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_INGRESA_CORRECTAMENTE);
});