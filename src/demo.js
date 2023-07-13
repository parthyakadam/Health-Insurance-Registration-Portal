// Login page JS
const loginBtn = document.getElementById("login-btn")

loginBtn?.addEventListener("click", () =>{
    window.location.href = "lead.component.html";
})

//-----------------------------------------------------------------------------------------------

// Home page JS
const newLead = document.getElementById("new-lead")

newLead?.addEventListener("click", () =>{
    window.location.href = "personal_details.html";
})

//-----------------------------------------------------------------------------------------------

// Personal details page JS
const personalNxt = document.getElementById("personal-nxt")

personalNxt?.addEventListener("click", () =>{
    window.location.href = "income_details.html";
})

const validatePersonal = document.getElementById("personal-nxt")

validatePersonal?.addEventListener("click", () =>{
    
})

//-----------------------------------------------------------------------------------------------

// Income Details page JS
const incomeBack = document.getElementById("income-back")

incomeBack?.addEventListener("click", () =>{
    window.location.href = "personal_details.html";
})

const incomeNxt = document.getElementById("income-next")

incomeNxt?.addEventListener("click", () =>{
    window.location.href = "documents.html";
})

//-----------------------------------------------------------------------------------------------

// Documents page Js

const documentsBack = document.getElementById("documents-back")

documentsBack?.addEventListener("click", () =>{
    window.location.href = "income_details.html";
})

const documentsNxt = document.getElementById("documents-nxt")

documentsNxt?.addEventListener("click", () =>{
    window.location.href = "quotation.html";
})

//-----------------------------------------------------------------------------------------------

// Quotation page Js

const quotationBack = document.getElementById("quotation-back")

quotationBack?.addEventListener("click", () =>{
    window.location.href = "documents.html";
})

const quotationNxt = document.getElementById("quotation-nxt")

quotationNxt?.addEventListener("click", () =>{
    alert("This button works...");
})

function generateQuotation() {
    // Generate random numbers for the quotation reference
    var randomNumbers = Math.floor(Math.random() * 10000);
    var quotationRef = "GRH/" + randomNumbers;

    // Generate random premium value
    var premium = Math.floor(Math.random() * 81) + 10;

    // Generate random product name starting with "CG"
    var products = ["Team Insurance", "Family Insurance", "Life Insurance", "Project Insurance"];
    var randomProductIndex = Math.floor(Math.random() * products.length);
    var product = products[randomProductIndex];

    var leadStage = ["Contacted", "Interested", "Qualified"];
    var randomProductIndex = Math.floor(Math.random() * products.length);
    var leadStage = leadStage[randomProductIndex];

    var contacted = ["1 day ago", "2 days ago", "3 days ago","4 days ago","5 days ago","6 days ago","1 week ago", "2 weeks ago", "3 weeks ago","4 weeks ago","5 weeks ago","1 month ago","2 months ago","3 months ago","4 months ago","5 months ago","6 months ago","7 months ago","8 months ago","9 months ago","10 months ago","11 months ago","12 months ago"];
    var randomProductIndex = Math.floor(Math.random() * products.length);
    var contacted = contacted[randomProductIndex];

    // Generate random sum insured amount
    var sumInsured = Math.floor(Math.random() * 10000000);
    var sum = "$" + sumInsured.toLocaleString();

    // Display the generated quotation details
    document.getElementById("quotationRef").textContent = quotationRef;
    document.getElementById("premium").textContent = premium;
    document.getElementById("product").textContent = product;
    document.getElementById("sumInsured").textContent = sum;
}

// Generate quotation automatically when the page loads
window.addEventListener("load", generateQuotation);