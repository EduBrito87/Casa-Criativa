
function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")
    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}
function checkFields(event){
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]
    
    const isEmpmty = valuesToCheck.find(function(value){
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()
        
        if (checkIfIsString && checkIfIsEmpty){
            return true

        }
    })

    if(isEmpmty) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos")
    }
}

function deletar(value){
    const delId = value.target[value].value

    console.log(delId)
    return alert("Ideia numero "+ delId + " deletada")


}

