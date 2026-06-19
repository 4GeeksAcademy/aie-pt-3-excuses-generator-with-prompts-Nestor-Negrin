function generateExcuse() {
  const who = ['Mi perro', 'El vecino', 'Un astronauta', 'Mi router'];
  const action = ['se comió', 'rompió', 'escondió', 'desconfiguró'];
  const what = ['mi tarea', 'el proyecto', 'las llaves', 'la conexión'];
  const when = ['hoy', 'ayer', 'esta mañana', 'anoche'];

  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

console.log(generateExcuse());
