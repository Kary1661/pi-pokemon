const validate = (req, res, next) => {
    const pokemon = req.body;
    if (!pokemon.name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    if (!pokemon.hp) {
        return res.status(400).json({ error: 'Hp is required' });
    }
    if (!pokemon.attack) {
        return res.status(400).json({ error: 'Attack is required' });
    }
    if (!pokemon.defense) {
        return res.status(400).json({ error: 'Defense is required' });
    }
    if (Number(pokemon.hp > 300)) {
        return res.status(400).json({ error: 'Hp must be less than 300' });
    }
    if (Number(pokemon.attack > 200)) {
        return res.status(400).json({ error: 'Attack must be less than 200' });
    }
    if (Number(pokemon.defense > 200)) {
        return res.status(400).json({ error: 'Defense must be less than 200' });
    }
    if (pokemon.types.length === 0) {
        return res.status(400).json({ error: 'At least one type is required' });
    }
    if (pokemon.types.length > 3) {
        return res.status(400).json({ error: 'No more than 3 types are allowed' });
    }
    if (pokemon.types.includes('19') && pokemon.types.length > 1) {
        return res.status(400).json({ error: 'type: unknown can only have that type' });
    }
    next();
}

module.exports = {
    validate
}