

const data = {
    "birthdate": 1996
};

calculateAge = () => {
    const now = new Date().getFullYear();
    const birthdate =  data.birthdate;
    let age = now - birthdate;

    let element = document.getElementById('data-age');    
    element.outerText = `${age} años`
}

calculateAge();