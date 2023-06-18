const validate = (form) => {
    const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    let errors = {};

    if (!form.image && !regexImage.test(form.image)) {
        errors.image = 'Image is required';
    }

    if (!form.name) {
        errors.name = 'Name is required';
    }

    if (!regexName.test(form.name)) {
        errors.name = 'Name must contain only letters';
    }

    if (form.name.length > 30) {
        errors.name = 'Name must be less than 30 characters';
    }

    if (!form.hp) {
        errors.hp = 'Hp is required';
    }

    if (form.hp <= 0 || form.hp > 300) {
        errors.hp = 'Hp must be between 1 and 300';
    }

    if (!form.attack) {
        errors.attack = 'Attack is required';
    }

    if (form.attack <= 0 || form.attack > 200) {
        errors.attack = 'Attack must be between 1 and 200';
    }

    if (!form.defense) {
        errors.defense = 'Defense is required';
    }

    if (form.defense <= 0 || form.defense > 200) {
        errors.defense = 'Defense must be between 1 and 200';
    }

    if (form.types.length === 0) {
        errors.types = 'Types is required';
    }

    if (form.types.length > 3) {
        errors.types = 'There must be a maximum of 3 types';
    }

    if (form.types.includes("19") && form.types.length > 1) {
        errors.types = 'If the pokemon is legendary, it can only have one type';
    }

    return errors;
};

export default { validate };