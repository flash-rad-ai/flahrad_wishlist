// Target Date (January 31, 4:00 PM)
const targetDate = new Date("January 31, 2025 16:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "<h2>Event Started!</h2>";
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the DOM
    document.querySelectorAll(".countdown div")[0].querySelector("span").textContent = days;
    document.querySelectorAll(".countdown div")[1].querySelector("span").textContent = hours;
    document.querySelectorAll(".countdown div")[2].querySelector("span").textContent = minutes;
    document.querySelectorAll(".countdown div")[3].querySelector("span").textContent = seconds;
}, 1000);

// Popup Functions
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}



//////////////


const scriptURL = "https://script.google.com/macros/s/AKfycbwvC4ZgLc9dEfdiN5-eQ1fYKVC9442TLBkSkmxE45JH5QYeyUxfcOoTrqnFLV9KSFGr/exec";
// // Replace with your Apps Script URL

    function submitForm() {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const state = document.getElementById("state").value;

        // Validate the form fields
        if (!name || !email || !state) {
            alert("Please fill all the required fields.");
            return;
        }

        // Send data to Google Apps Script
        fetch(scriptURL, {
            redirect: "follow",
            method: "POST",
            body: JSON.stringify({ name, phone, email, state }),
            headers: { "Content-Type": "text/plain;charset=utf-8" },
        })
            .then((response) => {
                console.log("Response Data:", data);
                // if (response.ok) {
                    alert("Thank you for joining the waitlist!");
                    document.getElementById("waitlist-form").reset(); // Reset form
                    closePopup();
                // } else {
                    // throw new Error("Something went wrong!");
                // }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Thank you for joining the waitlist!");
                document.getElementById("waitlist-form").reset(); // Reset form
                closePopup();
            });
    }
