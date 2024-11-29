document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("#addbtn");
    let inp = document.querySelector("input");
    let box = document.querySelector(".yes");

    // Ensure the input starts as hidden
    inp.style.visibility = "hidden";

    btn.addEventListener("click", function () {
        if (inp.style.visibility === "hidden") {
            inp.style.visibility = "visible";
        } else {
            inp.style.visibility = "hidden";

            // Create a new paragraph
            let newParagraph = document.createElement("p");
            newParagraph.classList.add("change");


            // Create a checkbox
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            // Create the trash icon
            let trashIcon = document.createElement("i");
            trashIcon.classList.add("fa-solid", "fa-trash");

            // Add a click event listener to the trash icon for removing the paragraph
            trashIcon.style.marginLeft = "70px";
            trashIcon.style.cursor = "pointer";
            trashIcon.addEventListener("click", function () {
                newParagraph.remove(); // Remove the paragraph on icon click
            });

            // Append checkbox, text, and trash icon to the paragraph
            newParagraph.appendChild(checkbox);
            let textNode = document.createTextNode(" " + inp.value);
            newParagraph.appendChild(textNode);
            newParagraph.appendChild(trashIcon);

            // Prepend the new paragraph to the box
            box.prepend(newParagraph);

            // Clear the input value after appending
            inp.value = "";
        }
    });
    
});
