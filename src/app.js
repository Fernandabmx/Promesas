function crearTarea(tarea) {
  return new Promise((resolve, reject) => {
    resolve('Tarea creada exitosamente');
  });
}

function eliminarTarea(id) {
  return new Promise((resolve, reject) => {
    resolve('Tarea eliminada exitosamente');
  });
}

function completarTarea(id) {
  return new Promise((resolve, reject) => {
    resolve('Tarea completada exitosamente');
  });
}

crearTarea('Nueva tarea')
  .then((nuevaTarea) => {
    console.log(nuevaTarea);
    return eliminarTarea(1);
  })
  .then((tareaEliminada) => {
    console.log(tareaEliminada);
    return completarTarea(2);
  })
  .then((tareaCompletada) => {
    console.log(tareaCompletada);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

