// Yargs config
const description = {
    demand: true,
    alias: 'd',
    desc: 'Description for todo task.'
}

const completed = {
    default: true,
    alias: 'c',
    desc: 'Mark the task as completed or pending.'
}

const argv = require('yargs')
    .command('create', 'Create a task todo.', {
        description
    })
    .command('update', 'Update a task todo.', {
        description,
        completed
    })
    .command('remove', 'Remove a task todo.', {
        description
    })
    .help()
    .argv;

module.exports = { argv }