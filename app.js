const axios = require('axios');
const fs = require('fs');
const moment = require('moment'); 


const getData = async () => {
    console.log('Hello');
    const result = await axios.get('https://swapi.dev/api/planets/6');
    const createFile = async () => {
        await fs.writeFile(`${moment().format('X')}.log`, result.data.name, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
    })};   
    createFile(); 
};

getData()


