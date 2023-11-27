document.addEventListener("DOMContentLoaded", function() {

    

    const showMadlibButton = document.getElementById("showMadlib");
    const createAnotherButton = document.getElementById("createAnother");
    const inputSection = document.getElementById("inputSection");
    const madlibSection = document.getElementById("madlibSection");

    showMadlibButton.addEventListener("click", function() {
        
        console.log("Show Madlib button clicked");

        const place = document.getElementById("inputPlace").value;
        const adj1 = document.getElementById("inputAdjective1").value;
        const noun1 = document.getElementById("inputNoun1").value;
        const verb = document.getElementById("inputVerb").value;
        const geo = document.getElementById("inputGeo").value;
        const adj2 = document.getElementById("inputAdjective2").value;
        const obj = document.getElementById("inputObject").value;
        const material = document.getElementById("inputMaterial").value;
        const adj3 = document.getElementById("inputAdjective3").value;
        const noun2 = document.getElementById("inputNoun2").value;

        document.getElementById("place").textContent = place;
        document.getElementById("adjective1").textContent = adj1;
        document.getElementById("noun1").textContent = noun1;
        document.getElementById("noun1-repeat").textContent = noun1;
        document.getElementById("noun1-repeat2").textContent = noun1;
        document.getElementById("noun1-repeat3").textContent = noun1;
        document.getElementById("verb").textContent = verb;
        document.getElementById("geo").textContent = geo;
        document.getElementById("geo-repeat").textContent = geo;
        document.getElementById("adjective2").textContent = adj2;
        document.getElementById("object").textContent = obj;
        document.getElementById("material").textContent = material;
        document.getElementById("adjective3").textContent = adj3;
        document.getElementById("adjective3-repeat").textContent = adj3;
        document.getElementById("noun2").textContent = noun2;
        document.getElementById("noun2-repeat").textContent = noun2;

        
       
        inputSection.style.display = 'none';
        madlibSection.style.display = 'block';
    });

    createAnotherButton.addEventListener("click", function() {

        console.log("Create Another button clicked");

        inputSection.style.display = 'block';
        madlibSection.style.display = 'none';
    });
});