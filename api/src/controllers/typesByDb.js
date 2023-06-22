const { Type, Pokemon } = require('../db.js');
import typesByApi from './typesByApi.js';
const axios = require('axios');

const typesByDb = async () => {
    const typesDb = await Type.findAll()
    if (!typesDb.length){
        try {
            const typesAPI = await getTypesApi();
            const types = typesAPI.map((t) => ({name: t.name}));
            await Type.bulkCreate(types);
            return types
        } catch (error) {
            throw Error(error.message)
        }
    }
    return typesDb;
}

module.exports = {typesByDb};