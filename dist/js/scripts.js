// Turn aside into accordion on mobile
const toggleBtn = document.getElementById("toggle-show-hide");
const showHideContent = document.querySelector(".show-hide-content");

toggleBtn.addEventListener("click", function() {
    showHideContent.classList.toggle("active");
    toggleBtn.classList.toggle("arrow-up");
  }
)

// Copy to clipboard
const htmlCodes = document.querySelectorAll(".html-code");
const copyBtns = document.querySelectorAll(".copy-btn");

copyBtns.forEach((copyBtn, index) =>
  copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(htmlCodes[index].innerText);
  }
))