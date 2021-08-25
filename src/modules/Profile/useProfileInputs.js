export const useProfileInputs = (selectedInputs, userData) => {
    let objects = {};
    const list = [];

    selectedInputs.map(key => {
        objects = {
            ...objects,
            [key]: userData[key]
        };

        const currentInput = {
            name: '',
            label: '',
            type: 'text',
            placeholder: 'Please fill this input.'
        };

        switch (key) {
            case 'nickname':
                currentInput.name = key;
                currentInput.label = 'Nickname';
                list.push(currentInput);
                break;
            case 'email':
                currentInput.name = key;
                currentInput.label = 'Email';
                list.push(currentInput);
                break;
            case 'FFXIVCharacter':
                currentInput.name = key;
                currentInput.label = 'FFXIVCharacter';
                list.push(currentInput);
                break;
            case 'worldName':
                currentInput.name = key;
                currentInput.label = 'World Name';
                list.push(currentInput);
                break;
            case 'idDiscord':
                currentInput.name = key;
                currentInput.label = 'Discord ID';
                currentInput.placeholder = '(Optional)';
                list.push(currentInput);
                break;
            case 'name':
                currentInput.name = key;
                currentInput.label = 'Name';
                list.push(currentInput);
                break;
            default:
                break;
        }
    });

    return {
        objects,
        list
    };
};