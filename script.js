// =======================================
// Boost Hub BD
// JavaScript File
// =======================================

console.log("Boost Hub BD Loaded Successfully");

// WhatsApp Chat
function openWhatsApp() {
    window.open("https://wa.me/8801978196025", "_blank");
}

// Call Now
function callNow() {
    window.location.href = "tel:+8801350913620";
}

// Copy Payment Number
function copyNumber(number) {
    navigator.clipboard.writeText(number)
        .then(() => {
            alert("নম্বর কপি হয়েছে: " + number);
        })
        .catch(() => {
            alert("নম্বর কপি করা যায়নি।");
        });
}

// Coming Soon
function comingSoon() {
    alert("এই ফিচারটি খুব শীঘ্রই যুক্ত করা হবে।");
}
