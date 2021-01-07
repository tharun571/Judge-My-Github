var inputField = document.getElementById("handleInput")
var resultTitle = document.getElementById("resultTitle")
var result = document.getElementById("result")

function onSubmit() {
    hideResult()
    var handle = inputField.value
    if (handle) {
        // do some process
        showResult("Random Result")
    } else {
        alert("Handle cannot be Empty!")
    }
    return false
}

function hideResult() {
    resultTitle.style.visibility = "hidden"
    result.style.visibility = "hidden"
}

function showResult(resutlString) {
    result.textContent = resutlString
    resultTitle.style.visibility = "visible"
    result.style.visibility = "visible"
}
