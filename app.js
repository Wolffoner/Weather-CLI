const { 
  inquirerMenu,
  inquirerPausa
  } = require("./helpers/inquirer");


const main = async() =>{
  let opt = '';

  while(opt !== 0){
    opt = await inquirerMenu();
    inquirerPausa();
  }
}

main();

