const getLocalStorage = () => {
    const checkFirst = localStorage.getItem("phones")
    if(checkFirst){
        return JSON.parse(checkFirst);
    }
    else{
        return [];
    }
}

const handleLocalStorage = (id) => {
    const getLocalFirst = getLocalStorage();
    const exists = getLocalFirst.find(phonesId => phonesId === id)
    if(!exists){
        getLocalFirst.push(id)
        localStorage.setItem("phones", JSON.stringify(getLocalFirst))
    }
}

export { getLocalStorage, handleLocalStorage }