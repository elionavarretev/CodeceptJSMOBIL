# Codeceptjs-protactor

# 1. Crear proyecto en  Node 
npm init --y
# 2. Instalar codeceptjs
yarn add codeceptjs --save
yarn add appium --save
yarn add webdriverio@5.13.0 --save
# 3. Copy o write
"codeceptjs": "codeceptjs init",
"codeceptjs:gherkin": "codeceptjs gherkin:init",
"test": "codeceptjs run --features",
# 4. Execute
yarn codeceptjs
yarn codeceptjs:gherkin
# 5. add src/ features folder and config
