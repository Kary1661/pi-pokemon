const typesByDb = require('../controllers/typesByDb')

const typesHandel = async (req, res) => {
    try {
        const types = await typesByDb()
        return res.json(types)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

module.exports = typesHandel