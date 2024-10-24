function toggleSkills() {
    var skillsList = document.getElementById("skills-list");
    if (skillsList !== null) {
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
        }
        else {
            skillsList.style.display = "none";
        }
    }
    else {
        console.log("Skills list not found");
    }
}
