// PAGE LOAD ANIMATION

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

/* HERO BUTTON ANIMATION */

const heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("mouseenter", () => {
    heroBtn.style.transform = "scale(1.08)";
});

heroBtn.addEventListener("mouseleave", () => {
    heroBtn.style.transform = "scale(1)";
});

/* CARD HOVER EFFECT */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });

});

// ================= INVESTOR FORM =================

const investorForm = document.getElementById("investorForm");

if(investorForm){

    investorForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Investor Registration Submitted Successfully!");

        investorForm.reset();

    });

}

/* investor page */
// js/script.js

// PAGE FADE EFFECT

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// BUTTON CLICK EFFECT

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        }, 150);

    });

});

// CONTACT FORM SUBMISSION
// document.getElementById("contactForm")
// .addEventListener("submit", function(e){

//     e.preventDefault();

//     alert("Message Sent Successfully!");

// });

// Investor Form Submission
document.getElementById("investorForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Investor Registration Submitted Successfully!");

});

// ================= FORM SUBMIT =================

document.getElementById("investorForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Startup Registration Submitted Successfully!");

});

// ================= STATES & DISTRICTS =================

const stateDistricts = {

    "Andhra Pradesh":["Visakhapatnam","Vijayawada","Guntur","Nellore"],

    "Arunachal Pradesh":["Itanagar","Tawang","Ziro"],

    "Assam":["Guwahati","Silchar","Dibrugarh"],

    "Bihar":["Patna","Gaya","Bhagalpur","Muzaffarpur"],

    "Chhattisgarh":["Raipur","Bilaspur","Durg"],

    "Goa":["North Goa","South Goa"],

    "Gujarat":["Ahmedabad","Surat","Vadodara","Rajkot"],

    "Haryana":["Gurgaon","Faridabad","Panipat"],

    "Himachal Pradesh":["Shimla","Manali","Dharamshala"],

    "Jharkhand":["Ranchi","Jamshedpur","Dhanbad"],

    "Karnataka":["Bangalore","Mysore","Mangalore"],

    "Kerala":["Kochi","Trivandrum","Kozhikode"],

    "Madhya Pradesh":["Bhopal","Indore","Ujjain","Dewas","Gwalior"],

    "Maharashtra":["Mumbai","Pune","Nagpur","Nashik"],

    "Manipur":["Imphal","Bishnupur"],

    "Meghalaya":["Shillong","Tura"],

    "Mizoram":["Aizawl","Lunglei"],

    "Nagaland":["Kohima","Dimapur"],

    "Odisha":["Bhubaneswar","Cuttack","Rourkela"],

    "Punjab":["Ludhiana","Amritsar","Jalandhar"],

    "Rajasthan":["Jaipur","Udaipur","Jodhpur","Kota"],

    "Sikkim":["Gangtok","Namchi"],

    "Tamil Nadu":["Chennai","Coimbatore","Madurai"],

    "Telangana":["Hyderabad","Warangal","Nizamabad"],

    "Tripura":["Agartala","Dharmanagar"],

    "Uttar Pradesh":["Lucknow","Kanpur","Agra","Noida","Varanasi"],

    "Uttarakhand":["Dehradun","Haridwar","Nainital"],

    "West Bengal":["Kolkata","Siliguri","Howrah"],

    "Delhi":["New Delhi","Dwarka","Rohini"],

    "Jammu and Kashmir":["Srinagar","Jammu"],

    "Ladakh":["Leh","Kargil"],

    "Puducherry":["Puducherry","Karaikal"]
};

// ================= COUNTRIES =================

const countries = [

    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Russia",
    "China",
    "Japan",
    "South Korea",
    "Brazil",
    "Argentina",
    "Mexico",
    "South Africa",
    "Nigeria",
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Nepal",
    "Bhutan",
    "Bangladesh",
    "Sri Lanka",
    "Pakistan",
    "Afghanistan",
    "Thailand",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "Vietnam",
    "Philippines",
    "Turkey",
    "Netherlands",
    "Switzerland",
    "Sweden",
    "Norway",
    "Denmark",
    "New Zealand"
];

// ================= SELECT ELEMENTS =================

const stateSelect = document.getElementById("stateSelect");

const districtSelect = document.getElementById("districtSelect");

const countrySelect = document.getElementById("countrySelect");

// ================= LOAD STATES =================

for(let state in stateDistricts){

    let option = document.createElement("option");

    option.text = state;

    option.value = state;

    stateSelect.appendChild(option);
}

// ================= LOAD DISTRICTS =================

stateSelect.addEventListener("change", function(){

    districtSelect.innerHTML = "<option>Select District</option>";

    let districts = stateDistricts[this.value];

    districts.forEach(function(district){

        let option = document.createElement("option");

        option.text = district;

        option.value = district;

        districtSelect.appendChild(option);

    });

});

// ================= LOAD COUNTRIES =================

countries.forEach(function(country){

    let option = document.createElement("option");

    option.text = country;

    option.value = country;

    countrySelect.appendChild(option);

});

console.log("Startup Dashboard Loaded Successfully");