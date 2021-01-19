const fs = require('fs');

const filename = 'db/data.json';

let listToDo = [];

const saveDB = () => {
    let dataJson = JSON.stringify(listToDo);
    let data = new Uint8Array(Buffer.from(dataJson), 'utf8');

    fs.writeFile(filename, data, (err) => {
        if (err)
            throw new Error('The data could not be recorded.', err)
    });
}

const loadDB = () => {
    try {
        listToDo = require(`../${filename}`)
    } catch (error) {
        listToDo = [];
    }

}

const create = (description) => {
    loadDB();

    let toDo = {
        description,
        completed: false
    }

    listToDo.push(toDo);
    saveDB();
    return toDo;
}

const list = () => {
    loadDB();
    return listToDo;
}

const update = (description, completed = true) => {
    loadDB();

    let index = listToDo.findIndex(task => task.description === description);
    if (index != -1) {
        listToDo[index].completed = completed;
        saveDB();
        return true;
    } else
        false;
}

const remove = (description) => {
    loadDB();

    let newListToDo = listToDo.filter(task => task.description !== description);
    if (newListToDo.length === listToDo.length)
        return false;
    else {
        listToDo = newListToDo;
        saveDB();
        return true;
    }

}

module.exports = { create, list, update, remove }