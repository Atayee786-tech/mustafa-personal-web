/* =====================================
   Mustafa Atayee - Personal Website
   JavaScript
===================================== */

// گرفتن عناصر منوی موبایل
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// باز و بسته کردن منوی موبایل
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "بستن منو" : "باز کردن منو"
        );

        menuToggle.textContent = isOpen ? "×" : "☰";
    });

    // بستن منو پس از انتخاب یک لینک
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "باز کردن منو");
            menuToggle.textContent = "☰";
        });
    });

    // بستن منو با کلید Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "باز کردن منو");
            menuToggle.textContent = "☰";
        }
    });
}


// نمایش خودکار سال جاری
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// عناصر پنجره مقاله
const articleDialog = document.getElementById("articleDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogText = document.getElementById("dialogText");
const closeDialog = document.getElementById("closeDialog");


// باز کردن مقاله‌ها
document.querySelectorAll(".read-more").forEach(function (button) {
    button.addEventListener("click", function () {
        const title = button.getAttribute("data-title");
        const text = button.getAttribute("data-text");

        if (articleDialog && dialogTitle && dialogText) {
            dialogTitle.textContent = title || "مطلب آموزشی";
            dialogText.textContent = text || "";

            if (typeof articleDialog.showModal === "function") {
                articleDialog.showModal();
            } else {
                alert((title || "مطلب آموزشی") + "\n\n" + (text || ""));
            }
        }
    });
});


// بستن پنجره مقاله با دکمه ×
if (closeDialog && articleDialog) {
    closeDialog.addEventListener("click", function () {
        articleDialog.close();
    });
}


// بستن پنجره با کلیک روی فضای بیرون آن
if (articleDialog) {
    articleDialog.addEventListener("click", function (event) {
        if (event.target === articleDialog) {
            articleDialog.close();
        }
    });
}