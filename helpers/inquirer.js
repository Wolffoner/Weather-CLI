const inquirer = require('inquirer');
require('colors');

const menu = [
  {
    type:`list`,
    name:`opcion`,
    message:`Que deseas hacer?`,
    choices: [
      {
        value: 1,
        name: `${`1.`.green} Buscar Ciudad`
      },
      {
        value: 2,
        name: `${`2.`.green} Historial`
      },
      {
        value: 0,
        name: `${`0.`.green} Salir`
      }
    ]
  }
];

const inquirerMenu = async () => {
  console.clear();
  console.log('====================='.green);
  console.log('Seleccione una opcion'.green);
  console.log('=====================\n'.green);
  let {opcion} = await inquirer.prompt(menu);
  return opcion;
}

const inquirerPausa = async () => {
  
  let pausaOpt = [
    {
      type:`input`,
      name:`pausa`,
      message:`Presione ${`ENTER`.green} para continuar`
    }
  ]
  await inquirer.prompt(pausaOpt);
}

const leerInput = async (message) => {
  let question = [
    {
      type:`input`,
      name: `desc`,
      message,
      validate(value){
        if(value.length === 0){
          return `Por favor ingrese un ${`valor`.green}.`
        } else {
          return true;
        }
      }
    }
  ];

  let { desc } = await inquirer.prompt(question);
  return desc;
}

const borrarElem = async (tareas = []) =>{
  let choices = tareas.map((tarea, i) =>{
    let idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${ idx } ${ tarea.descripcion }`
    }
  });
  
  let menuBorrar = [
    { 
      type:`list`,
      name: `id`,
      message: `Borrar`,
      choices,

    }
  ];
  let { id } = await inquirer.prompt(menuBorrar);
  return id;
}

const actualizarElem = async (tareas = []) =>{
  let choices = tareas.map((tarea, i) =>{
    let idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${ idx } ${ tarea.descripcion }`
    }
  });
  
  let menuUpdate = [
    { 
      type:`list`,
      name: `id`,
      message: `Borrar`,
      choices,

    }
  ];
  let { id } = await inquirer.prompt(menuUpdate);
  return id;
}

const confirmar = async(message) =>{
  let questions = {
    type: 'confirm',
    name: 'ok',
    message
  }
  let { ok } = await inquirer.prompt(questions);
  return ok;
}

const mostrarListadoCheckList = async (tareas = []) =>{

  let choices = tareas.map((tarea, i) =>{
    let idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${ idx } ${ tarea.descripcion }`,
      checked: (tarea.fechaCompletado) 
        ? true 
        : false
    }
  });
  
  let menuCheckBox = [
    { 
      type:`checkbox`,
      name: `ids`,
      message: `Seleccionados`,
      choices,

    }
  ];
  let { ids } = await inquirer.prompt(menuCheckBox);
  return ids;
}


module.exports = {
  inquirerMenu,
  inquirerPausa,
  leerInput,
  borrarElem,
  actualizarElem,
  confirmar,
  mostrarListadoCheckList
}
