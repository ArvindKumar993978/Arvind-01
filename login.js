document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
        alert("Login successful!");
        localStorage.setItem("userData", JSON.stringify(foundUser));
        window.location.href = "demo-user.html";
    } else {
        alert("Invalid email or password.");
    }
});

// // Quick Demo button
// document.getElementById("f-button").addEventListener("click", function () {
//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     let demoUser = users.find(u => u.email === "demo@webtech.practice");

//     if (!demoUser) {
//         demoUser = {
//             firstName: "Demo",
//             lastName: "User",
//             email: "demo@webtech.practice",
//             password: "demopass"
//         };

//         users.push(demoUser);
//         localStorage.setItem("users", JSON.stringify(users));
//     }

//     localStorage.setItem("userData", JSON.stringify(demoUser));
//     window.location.href = "demo-user.html";
// });
