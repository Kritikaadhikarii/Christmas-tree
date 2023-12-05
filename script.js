document.addEventListener("DOMContentLoaded", function () {
    // Get the button and Christmas tree elements
    const showTreeButton = document.getElementById("showTreeButton");
    const christmasTree = document.getElementById("christmas-tree");

    // Hide the Christmas tree initially
    christmasTree.style.display = "none";

    // Add a click event listener to the button
    showTreeButton.addEventListener("click", function () {
        // Hide the button
        showTreeButton.style.display = "none";
        // Show the Christmas tree
        christmasTree.style.display = "block";
    });
});
