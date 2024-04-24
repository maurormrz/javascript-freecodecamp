document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById("user-input");
    const checkButton = document.getElementById("check-btn");
    const clearButton = document.getElementById("clear-btn");
    const resultsDiv = document.getElementById("results-div");

    checkButton.addEventListener("click", function() {
        const phoneNumber = userInput.value.trim();
        if (phoneNumber === "") {
            alert("Please provide a phone number");
            return;
        }

        const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
        if (regex.test(phoneNumber)) {
            resultsDiv.textContent = "Valid US number: " + phoneNumber;
        } else {
            resultsDiv.textContent = "Invalid US number: " + phoneNumber;
        }
    });

    clearButton.addEventListener("click", function() {
        resultsDiv.textContent = "";
    });
});