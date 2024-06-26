const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
];

const populateData = () => {
    for (let i = 0; i < data.length; i++) {
        // create info container to hold all the divs
        const infoContainer = document.createElement('div')
        infoContainer.classList.add('info-container')

        // create a div with the class of 'name' for each element in the array, set the innerText of each div to the name property of each respective element
        const nameDiv = document.createElement('div')
        nameDiv.classList.add('name')
        nameDiv.innerText = data[i].name

        // create a div with the class of 'address' for each element in the array, set the innerText of each div to the address property of each respective element
        const addressDiv = document.createElement('div')
        addressDiv.classList.add('address')
        addressDiv.innerText = data[i].address

        // append the name and address divs to the infoContainer
        infoContainer.appendChild(nameDiv)
        infoContainer.appendChild(addressDiv)
        // append the info container to the body of the document
        document.querySelector('body').appendChild(infoContainer)
    }
}

// write a function that will push new data in to the array
// the function should take name and address as parameters
// the function should then run the populateData function
const addData = (name, address) => {
    data.push({ name, address })
    // clear out the old information before populating with the new info added
    const body = document.querySelector('body')
    while (body.firstChild) {
        body.removeChild(body.firstChild)
    }
    populateData()
}

// create a function that takes the name of a person you want to remove, removes them from the data array, then refreshes the rolodex
const removeData = (name) => {
    // access the obj you wish to remove by its name value
    // iterate over the array to accomplish?
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i].name)
        if (data[i].name === name) {
            // console.log(data[i])
            // remove the entire object from the array
            data.splice(i, 1)
        }
    }
    // refresh the rolodex
    const body = document.querySelector('body')
    while (body.firstChild) {
        body.removeChild(body.firstChild)
    }
    populateData();
}

// console.log(data)

document.addEventListener('DOMContentLoaded', () => {
    populateData()
    addData('Taylor', 'Seattle')
    removeData("Grace Hopper")
    // removeData('Umbra')
})