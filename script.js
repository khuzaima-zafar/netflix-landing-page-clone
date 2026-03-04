const slider = document.getElementById("slider");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let scrollAmount;

// Responsive scroll amount
function setScrollAmount() {
    if (window.innerWidth >= 1024) {
        scrollAmount = 700;
    }
    else if (window.innerWidth >= 768) {
        scrollAmount = 560;
    }
    else {
        scrollAmount = 440;
    }
}

setScrollAmount();
window.addEventListener("resize", setScrollAmount);


rightBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });

    leftBtn.style.display = "block";
    setTimeout(checkEnd, 400);
});

leftBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });

    setTimeout(() => {
        if (slider.scrollLeft <= 0) {
            leftBtn.style.display = "none";
        }
    }, 400);

    rightBtn.style.display = "block";
});

function checkEnd() {
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        rightBtn.style.display = "none";
    }
}


const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", function () {
        this.parentElement.classList.toggle("active");
    });
});
const btn = document.getElementById("langBtn");
const menu = document.getElementById("dropdownMenu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("show");
});

// floating

const stickyBtn = document.getElementById("mobile-sticky");
const topBtn = document.getElementById("top-get-started");
const footerBtn = document.getElementById("footer-get-started");

let topVisible = true;
let footerVisible = false;

function updateSticky() {
    if (!topVisible && !footerVisible) {
        stickyBtn.classList.add("show");
    } else {
        stickyBtn.classList.remove("show");
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.target.id === "top-get-started") {
            topVisible = entry.isIntersecting;
        }
        if (entry.target.id === "footer-get-started") {
            footerVisible = entry.isIntersecting;
        }
        updateSticky();
    });
}, { threshold: 0..beta });

observer.observe(topBtn);
observer.observe(footerBtn);
