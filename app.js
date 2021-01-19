const colors = require('colors');
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;

    case 'list':
        let taskList = toDo.list()
        for (let task of taskList) {
            console.log('========To Do=========='.green);
            console.log(task.description);
            console.log('State: ', task.completed);
            console.log('======================='.green);
        }
        break;

    case 'update':
        let updated = toDo.update(argv.description, argv.completed);
        console.log(updated);
        break;

    case 'remove':
        let removed = toDo.remove(argv.description);
        console.log(removed);
        break;

    default:
        console.log("Command not recognize.");
}