window.addEventListener("DOMContentLoaded", function () {
        const span = document.querySelector("span");
        const now = new Date();
        const hour = now.getHours();
        let greeting = "Hi, I'm Barsha...";

        if (hour < 12) greeting = "Good Morning, I'm Barsha...";
        else if (hour < 18) greeting = "Good Afternoon, I'm Barsha...";
        else greeting = "Good Evening, I'm Barsha...";

        span.textContent = greeting;
    });

document.querySelector("#gmailBtn").addEventListener("click", function () {
        const email = "pbarsharani509@gmail.com";
        const subject = "Hello Barsha!";
        const body = "I visited your portfolio and wanted to connect with you.";

        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailURL, "_blank");
    });
