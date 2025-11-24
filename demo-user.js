function showDiv(n) {
    for (let i = 1; i <= 5; i++) {
        document.getElementById("div" + i).style.display = (i === n) ? "block" : "none";
    }
}

const storedUser = JSON.parse(localStorage.getItem("userData"));

if (storedUser.firstName || storedUser.lastName) {
    document.querySelector("#p1 b").textContent =
        (storedUser.firstName || "") + " " + (storedUser.lastName || "");
    if (storedUser.email) document.querySelector("#p").textContent = storedUser.email;

    const profile =
        (storedUser.firstName ? storedUser.firstName[0] : "") +
        (storedUser.lastName ? storedUser.lastName[0] : "");

    document.getElementById("du").textContent = profile.toUpperCase();
} else {
    window.location.href = "login.html";
}

document.querySelector("#das-sign").addEventListener("click", () => {
    localStorage.removeItem("userData");
    alert("You have been logged out!");
    window.location.href = "login.html";
});


// PROFILE UPDATE
const profileForm = document.querySelector("#div2 form");

profileForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let loggedInUser = JSON.parse(localStorage.getItem("userData"));

    const updatedUser = {
        ...loggedInUser,
        fullName: profileForm.querySelector("input[placeholder='Demo User']").value,
        dob: profileForm.querySelector("input[type='date']").value,
        email: profileForm.querySelector("input[placeholder='demo@webtech.practice']").value,
        phone: profileForm.querySelector("input[placeholder='+91 xxxxxxxxxx']").value,
        address: profileForm.querySelector("#p-address input").value,
        pin: profileForm.querySelector("input[placeholder='834001']").value,
        city: profileForm.querySelector("input[placeholder='Ranchi']").value,
        country: profileForm.querySelector("input[placeholder='India']").value,
        github: profileForm.querySelector("input[placeholder='https://github.com/username']").value
    };

    users = users.map(u => u.email === loggedInUser.email ? updatedUser : u);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userData", JSON.stringify(updatedUser));

    alert("Profile updated successfully!");
});


// SECURITY — CHANGE PASSWORD
const updateBtn = document.querySelector(".btn.update");
const clearBtn = document.querySelector(".btn.clear");

updateBtn.addEventListener("click", () => {

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let loggedInUser = JSON.parse(localStorage.getItem("userData"));

    const currentPass = document.querySelector("input[placeholder='Enter current password']").value.trim();
    const newPass = document.querySelector("input[placeholder='Minimum 6 characters']").value.trim();
    const confirmPass = document.querySelector("input[placeholder='Re-enter new password']").value.trim();

    if (!currentPass || !newPass || !confirmPass) {
        alert("Please fill all fields.");
        return;
    }

    if (currentPass !== loggedInUser.password) {
        alert("Incorrect current password!");
        return;
    }

    if (newPass !== confirmPass) {
        alert("New passwords do not match.");
        return;
    }

    const updatedUser = { ...loggedInUser, password: newPass };

    users = users.map(u => u.email === loggedInUser.email ? updatedUser : u);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userData", JSON.stringify(updatedUser));

    alert("Password updated successfully!");
});

clearBtn.addEventListener("click", () => {
    document.querySelector("input[placeholder='Enter current password']").value = "";
    document.querySelector("input[placeholder='Minimum 6 characters']").value = "";
    document.querySelector("input[placeholder='Re-enter new password']").value = "";
});
