document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll for internal links
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Simple alert for contact click (optional UX)
  const contactLinks = document.querySelectorAll("a[href^='tel:'], a[href^='https://wa.me']");

  contactLinks.forEach(link => {
    link.addEventListener("click", function () {
      console.log("Contact clicked:", this.href);
    });
  });

});
