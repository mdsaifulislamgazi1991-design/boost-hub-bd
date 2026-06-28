// ============================
// Boost Hub BD - SCRIPT
// ============================

console.log("Boost Hub BD Website Loaded 🚀");

// WhatsApp Open
function openWhatsApp() {
    window.open("https://wa.me/8801978196025", "_blank");
}

// Call Now
function callNow() {
    window.location.href = "tel:+8801350913620";
}

// Copy Number Function
function copyNumber(number) {
    navigator.clipboard.writeText(number)
        .then(() => {
            alert("নম্বর কপি হয়েছে: " + number);
        })
        .catch(() => {
            alert("কপি করা যায়নি");
        });
}

// Simple Alert (future use)
function showAlert(msg) {
    alert(msg);
}
