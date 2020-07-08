let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")


ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(ourField.value)

})
function createItem(x) {
    let ourHtml = `<li>${x} <button onclick="deleteItem(this)">delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHtml)
    ourField.value = ""
    ourField.focus()
}
function deleteItem(elementToDelete){
    elementToDelete.parentElement.remove()
}