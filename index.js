// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads= `["www.shannasosour.com"]`

myLeads = JSON.parse(myLeads)

myLeads.push("www.shannabitter.com")

myLeads = JSON.stringify(myLeads)

console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // to clear out the input field...
    inputEl.value = " "

    renderLeads()
})

function renderLeads() {
    listItems = ""
    for(let i=0; i < myLeads.length; i++){
    // listItems += "<li><a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

    listItems += `
        <li>
            <a target= "_blank" href='$myLeads[i]'>
                $ myLeads[i]
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}
