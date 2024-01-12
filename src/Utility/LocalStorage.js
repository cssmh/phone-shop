import swal from "sweetalert";

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
        swal("Good job!", "Successfully Added!", "success");
        localStorage.setItem("phones", JSON.stringify(getLocalFirst))
    }
    else{
        swal("already Exist!", "No Duplicate!", "error");
    }
}

const handleRemoveFromLocalStorage = (idToRemove) => {
    const getAllIdFirst = getLocalStorage()
    const filterThatId = getAllIdFirst.filter(allId => allId !== idToRemove)
    localStorage.setItem("phones", JSON.stringify(filterThatId))
}

export { getLocalStorage, handleLocalStorage, handleRemoveFromLocalStorage }