let addEduBtn = document.getElementById('addedubtn');
let addExpBtn = document.getElementById('addexpbtn');

let expContainer = document.querySelector('.experience')
let educationContainer = document.querySelector('.educationalinfo');

addEduBtn.addEventListener("click", () => {
    addEduBtn.classList.add("hidden")
    // Clone the first education section
    let newEducation = document.querySelector('.education1').cloneNode(true);
    newEducation.classList.remove("hidden");

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "px-4 py-2 rounded-md font-semibold text-black bg-red-700 border";
    delBtn.addEventListener("click", ()=> {
        addEduBtn.classList.remove("hidden")
        newEducation.classList.add("hidden")
    })

    newEducation.appendChild(delBtn);

    // Append the new section to the container
    educationContainer.insertBefore(newEducation, addEduBtn);
});


addExpBtn.addEventListener("click", ()=> {
    let newExperience = document.querySelector('.exp1').cloneNode(true);
    newExperience.classList.remove("hidden");
    addExpBtn.classList.add("hidden");

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "px-4 py-2 rounded-md font-semibold text-black bg-red-700 border";
    delBtn.addEventListener("click", ()=> {
        addExpBtn.classList.remove("hidden");
        newExperience.classList.add("hidden");
    })

    newExperience.appendChild(delBtn);
    expContainer.insertBefore(newExperience, addExpBtn);
})