@first
Feature: Inicio de sesion
  Como consultora
  Yo quiero entrar al aplicativo
  para poder realizar operaciones de compra

Scenario Outline:  Login 2
  Given he ingresado al aplicativo de ESIKA2
  When  selecciono iniciar sesion
  And  selecciono "<region>" ingreso mi "<usuario>" y "<clave>"
  Then  puedo ver realizar alguna operacion
Examples:
  |region      |usuario                        |clave   |
  |PERÚ      |elionavarrete@belcorp.biz      |70778246|