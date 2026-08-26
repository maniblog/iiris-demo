

// back to top page ==============start
document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
// back to top page===============End


// Sticky Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// new menu js=====start
document.addEventListener("DOMContentLoaded",function(){

const mobileQuery=window.matchMedia("(max-width:991.98px)");

document.querySelectorAll(".dropdown-menu-custom > .nav-link,.has-submenu > a").forEach(function(link){

link.addEventListener("click",function(e){

if(!mobileQuery.matches)return;

const parent=this.parentElement;
const submenu=parent.querySelector(":scope > .submenu");

if(submenu){
e.preventDefault();

const isOpen=parent.classList.contains("menu-open");

document.querySelectorAll(".dropdown-menu-custom.menu-open,.has-submenu.menu-open").forEach(function(item){
if(item!==parent&&!item.contains(parent)){
item.classList.remove("menu-open");
}
});

parent.classList.toggle("menu-open",!isOpen);
}

});

});

document.addEventListener("click",function(e){

if(!mobileQuery.matches)return;

if(!e.target.closest(".navbar")){
document.querySelectorAll(".menu-open").forEach(function(item){
item.classList.remove("menu-open");
});
}

});

document.querySelectorAll(".dropdown-menu-custom,.has-submenu").forEach(function(item){

item.addEventListener("mouseenter",function(){
if(!mobileQuery.matches)this.classList.add("desktop-hover");
});

item.addEventListener("mouseleave",function(){
if(!mobileQuery.matches)this.classList.remove("desktop-hover");
});

});

});
// new menu js=====end

// Slider
const heroSlider = document.querySelector("#heroSlider");
new bootstrap.Carousel(heroSlider, {
    interval: 5000,
    pause: false,
    ride: "carousel",
    touch: true
});

// Our Intelligence. Your Advantage. -------------------- start
$(function () {
    // Data for each segment
    const wheelData = {

        "Foresight": {
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNDM0NGQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10YXJnZXQtaWNvbiBsdWNpZGUtdGFyZ2V0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+PC9zdmc+",
            title: "Foresight",
            text: "Navigate complexity and build enterprise resilience with intelligence-led risk advisory.",
            solutions: [
                {
                    title: "Protect",
                    items: ["Cyber and Data Resilience", "Enterprise Security Risk Management", "Corporate Compliance Programs", "Threat Intelligence and Monitoring"]
                },
                {
                    title: "Respond",
                    items: ["Incident Response", "Crisis Management", "Digital Forensics", "Regulatory Response"]
                }, 
                {
                    title: "Restore",
                    items: ["Business Continuity", "Reputation Recovery", "Operational Restoration", "Post-Incident Review"]
                }
            ] 
        },

        "Evidence": {
            icon: "data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19 19'%3e%3cpath d='M5.5,8.5l2,2,4-4' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round;'/%3e%3ccircle cx='8.5' cy='8.5' r='8' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round;'/%3e%3cpath d='M18.5,18.5l-4.3-4.3' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round;'/%3e%3c/svg%3e",
            title: "Evidence",
            text: "Strengthen your legal position with tech-driven forensics, asset tracing, and litigation support.",
            solutions: [
                {
                title: "Investigate",
                items: ["Digital Forensics", "Asset Tracing", "Fraud Investigation", "Evidence Preservation"]
                }
            ]
        },

        "Integrity": {
            icon: "data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.9 28'%3e%3cpath d='M14,11.33c-1.47,0-2.67,1.19-2.67,2.67,0,1.36-.13,3.35-.35,5.33' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M16.67,15.49c0,3.17,0,8.51-1.33,11.84' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M21.05,26.03c.16-.8.57-3.07.67-4.03' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M.67,14C.67,6.64,6.64.67,14,.67c4.2,0,8.15,1.98,10.67,5.33' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M.67,19.33h.01' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M27.07,19.33c.27-2.67.17-7.14,0-8' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M4.67,24c.67-2,1.33-6,1.33-10,0-.91.15-1.81.45-2.67' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M9.53,27.33c.28-.88.6-1.76.76-2.67' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M10,7.07c3.83-2.21,8.72-.9,10.93,2.93.7,1.22,1.07,2.6,1.07,4.01v2.67' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3c/svg%3e",
            title: "Integrity",
            text: "Safeguard enterprise value through rigorous financial diligence, forensic audit, and compliance reviews.",
            solutions: [ 
                { title: "Audit", items: ["Forensic Audit"] }, 
                { title: "Assure", items: ["Governance Assurance"] }, 
                { title: "Improve", items: ["Process Enhancement"] }, 
                // { title: "Monitor", items: ["Continuous Monitoring"] }, 
                // { title: "Report", items: ["Board Reporting"] } 
            ]
        },

        "De-risk_Security": {
            icon: "data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 21'%3e%3cpath d='M16.5,11.5c0,5-3.5,7.5-7.66,8.95-.22.07-.45.07-.67-.01-4.17-1.44-7.67-3.94-7.67-8.94v-7c0-.55.45-1,1-1,2,0,4.5-1.2,6.24-2.72.44-.37,1.08-.37,1.52,0,1.75,1.53,4.24,2.72,6.24,2.72.55,0,1,.45,1,1v7Z' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round;'/%3e%3c/svg%3e",
            title: "De-risk_Security",
            text: "Build a secure, compliant, and capable workforce through trusted hiring and ethical incident management.",
            solutions: [
                {
                    title: "Protect",
                    items: ["Cyber and Data Resilience", "Enterprise Security Risk Management", "Corporate Compliance Programs", "Threat Intelligence and Monitoring"]
                },
                {
                    title: "Respond",
                    items: ["Incident Response", "Crisis Management", "Digital Forensics", "Regulatory Response"]
                }, 
                {
                    title: "Restore",
                    items: ["Business Continuity", "Reputation Recovery", "Operational Restoration", "Post-Incident Review"]
                }
            ] 
        },

        "Embeds": {
            icon: "data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 19'%3e%3cpath d='M14.5,18.5v-2c0-2.21-1.79-4-4-4h-6c-2.21,0-4,1.79-4,4v2' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round;'/%3e%3cpath d='M14.5.63c2.14.55,3.42,2.74,2.87,4.88-.36,1.41-1.46,2.5-2.87,2.87' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round;'/%3e%3cpath d='M20.5,18.5v-2c0-1.82-1.24-3.41-3-3.87' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round;'/%3e%3ccircle cx='7.5' cy='4.5' r='4' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round;'/%3e%3c/svg%3e",
            title: "Embeds",
            text: "Scale your security and risk operations instantly with highly trained, vetted professionals.",
            solutions: [
                {
                    title: "Protect",
                    items: ["Cyber and Data Resilience", "Enterprise Security Risk Management", "Corporate Compliance Programs", "Threat Intelligence and Monitoring"]
                },
                {
                    title: "Respond",
                    items: ["Incident Response", "Crisis Management", "Digital Forensics", "Regulatory Response"]
                }, 
                {
                    title: "Restore",
                    items: ["Business Continuity", "Reputation Recovery", "Operational Restoration", "Post-Incident Review"]
                }
            ] 
        },

        "Response": {
            icon: "data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.07 28.13'%3e%3cpath d='M4.57,19.6C-.63,14.4-.63,5.87,4.57.67' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M8.43,4.4c-2.6,2.7-3.04,6.82-1.07,10' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3ccircle cx='14.03' cy='10.13' r='2.67' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M19.63,4.53c2.67,2.67,3.01,6.81,1.07,9.96' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M23.5.67c5.19,5.18,5.2,13.59.02,18.78,0,0-.01.01-.02.02' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M10.7,22.13h6.67' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3cpath d='M8.7,27.47l5.33-14.67,5.33,14.67' style='fill:none; stroke:%23000; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.33px;'/%3e%3c/svg%3e",
            title: "Response",
            text: "Navigate critical incidents with immediate, intelligence-backed tactical intervention anywhere in the world.",
            solutions: [
                {
                    title: "Protect",
                    items: ["Cyber and Data Resilience", "Enterprise Security Risk Management", "Corporate Compliance Programs", "Threat Intelligence and Monitoring"]
                },
                {
                    title: "Respond",
                    items: ["Incident Response", "Crisis Management", "Digital Forensics", "Regulatory Response"]
                }, 
                {
                    title: "Restore",
                    items: ["Business Continuity", "Reputation Recovery", "Operational Restoration", "Post-Incident Review"]
                }
            ]  
        }

    };

    // Helpers
    function renderTabContent(items) { 
        return items.map(item => 
            `<a href="#0" class="solution-link">${item}</a>` 
        ).join(""); 
    }

    function updateSolutions(data) {
        let accordionHtml = "";
        let contentHtml = "";
        data.solutions.forEach(function(solution, index) {
        const contentId = "solutionContent" + index;
        const activeClass = index === 0 ? "active" : "collapsed";
        const contentActive = index === 0 ? "active" : ""; 
        // Left accordion 
        accordionHtml += ` 
            <div class="accordion-item accordianItemCustom"> 
                <h2 class="accordion-header d-flex align-items-center justify-content-between"> 
                    <button class="accordion-button ${activeClass}" data-target="#${contentId}"> 
                        <span>${solution.title}</span> 
                    </button> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3c3c3c" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </h2> 
            </div> `; 
            
            // Right content 
            let itemsHtml = ""; 
            solution.items.forEach(function(item){ 
                itemsHtml += ` 
                        <a href="#0" class="solution-link"> ${item} </a> 
                    `; 
                }); 
                
                contentHtml += ` 
                    <div class="content-box_tab ${contentActive}" id="${contentId}" 
                        style="display:${index === 0 ? 'block' : 'none'}"> 
                        
                        ${itemsHtml}
                    </div>
                `; 
            }); 
            
            $("#dynamicAccordion").html(accordionHtml); 
            $("#dynamicContent").html(contentHtml); 
            
            // Refresh Lucide icons 
            if (typeof lucide !== "undefined") { 
                lucide.createIcons(); 
            } 
    }


    // Click Event

    $(".wheel-item").on("click", function () {
        $(".wheel-item").removeClass("active");
        $(this).addClass("active");
        const title = $(this).data("title"); 
        const data = wheelData[title];

        $(".content-box").fadeOut(150, function () {
            $("#contentIcon").attr("src", data.icon);
            $("#contentTitle").text(data.title);
            $("#contentText").text(data.text);

            // Update accordion 
            updateSolutions(data);

            $(this).fadeIn(250);

            // Refresh Lucide icons 
            if (typeof lucide !== "undefined") { 
                lucide.createIcons(); 
            }


        });
    });

    // Accordian tab Click

    $(document).on("click", ".accordion-button", function () { 
        const target = $(this).data("target"); 
        
        // Left active 
        $(".accordion-button") 
        .removeClass("active") 
        .addClass("collapsed"); 
        
        $(this) 
        .addClass("active") 
        .removeClass("collapsed"); 
        
        // Right active 
        $(".content-box_tab") 
        .removeClass("active") 
        .hide(); 
        
        $(target) 
        .addClass("active") 
        .fadeIn(200); 
    });


    // Hover Animation

    $(".wheel-item").hover(

        function () {
            if (!$(this).hasClass("active")) {
                $(this).css({
                    transform: "scale(1.08)"
                });
            }
        },

        function () {

            if (!$(this).hasClass("active")) {
                $(this).css({
                    transform: "scale(1)"
                });
            }
        }
    );

    // Default load

    updateSolutions(wheelData["Foresight"]); 
    if (typeof lucide !== "undefined") {
         lucide.createIcons(); 
    }
});

const buttons = document.querySelectorAll(".accordion-button");
const contents = document.querySelectorAll(".content-box_tab");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        // Hide all content
        contents.forEach(content => content.classList.remove("active"));

        // Remove active state from all buttons
        buttons.forEach(btn => {
            btn.classList.remove("active");
            btn.classList.add("collapsed");
        });

        // Activate clicked button
        this.classList.add("active");
        this.classList.remove("collapsed");

        // Show selected content
        document.querySelector(this.dataset.target).classList.add("active");
    });
});

// Our Intelligence. Your Advantage. ------------------- end


// Our Services ------------------- Start

// const servicesSwiper = new Swiper(".servicesSwiper", {
//     slidesPerView: 1,
//     spaceBetween: 24,
//     loop: true,
//     autoplay: { delay: 3500, disableOnInteraction: false },
//     pagination: { el: ".swiper-pagination", clickable: true },
//     breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
// });

const servicesSwiper = new Swiper('.servicesSwiper', { 
    slidesPerView: 1, 
    spaceBetween: 24, 
    loop: true, 
    autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }, 
    pagination: { el: '.swiper-pagination', clickable: true, }, 
    breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
});

// Our Services ------------------- End


// Award Section===================Start

document.addEventListener("DOMContentLoaded", function() {

  const thumbs = document.querySelectorAll(".awardThumb_new01");

  const awardImage = document.getElementById("awardMainImage_new01");
  const awardTitle = document.getElementById("awardTitle_new01");
  const awardDescription = document.getElementById("awardDescription_new01");
  const awardCategory = document.getElementById("awardCategory_new01");
  const awardYear = document.getElementById("awardYear_new01");
  const awardBy = document.getElementById("awardBy_new01");
  const awardRegion = document.getElementById("awardRegion_new01");
  const awardType = document.getElementById("awardType_new01");

  thumbs.forEach(function(thumb) {
    thumb.addEventListener("click", function() {
      // Remove Active Class
      thumbs.forEach(function(item) {
        item.classList.remove("active_new01");
      });
      this.classList.add("active_new01");
      // Get Data
      const image = this.getAttribute("data-image");
      const title = this.getAttribute("data-title");
      const description = this.getAttribute("data-description");
      const category = this.getAttribute("data-category");
      const year = this.getAttribute("data-year");
      const by = this.getAttribute("data-by");
      const region = this.getAttribute("data-region");
      const type = this.getAttribute("data-type");
      // Fade Out
      const elements = [
        awardImage,
        awardTitle,
        awardDescription,
        awardCategory,
        awardYear,
        awardBy,
        awardRegion,
        awardType

      ];

      elements.forEach(function(el) {

        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";

      });

      // Change Data
      setTimeout(function() {
        awardImage.src = image;
        awardTitle.innerHTML = title;
        awardDescription.innerHTML = description;
        awardCategory.innerHTML = category;
        awardYear.innerHTML = year;
        awardBy.innerHTML = by;
        awardRegion.innerHTML = region;
        awardType.innerHTML = type;

        // Fade In
        elements.forEach(function(el) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      }, 300);
    });
  });
});

// Award Section===================End

// WHY CHOOSE IIRIS js==================Start

document.querySelectorAll(".flipCard_flip3d").forEach(function(card){
    card.addEventListener("click",function(){
        if(window.innerWidth <= 991){
            card.classList.toggle("active");
        }
    });
});

// WHY CHOOSE IIRIS Js=================End



document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".feature-card, .mini-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    cards.forEach((card) => {
        card.classList.add("hidden-card");

        observer.observe(card);
    });
});



// Our Partner section==========Start

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".partner-slider");
    if (!slider) return;
    const track = slider.querySelector(".partner-slider-track");
    const slides = Array.from(
        slider.querySelectorAll(".partner-logo-card")
    );

    const nextBtn = slider.querySelector(".partner-next");
    const prevBtn = slider.querySelector(".partner-prev");
    const mainImage = document.querySelector("#partnerMainImage");
    const currentNumber =
        document.querySelector("#partnerCurrentNumber");

    const totalNumber =
        document.querySelector("#partnerTotalNumber");

    const progressBar =
        slider.querySelector(".progress-line span");
    /* ========CHECK========== */

    if (
        !track ||
        !slides.length ||
        !nextBtn ||
        !prevBtn ||
        !mainImage
    ) {
        return;
    }
    /* ===========VARIABLES======== */

    let currentIndex = 0;
    let autoSlide = null;
    const totalSlides = slides.length;
    /* Total number */

    totalNumber.textContent =
        String(totalSlides).padStart(2, "0");
    /* ========GET SLIDE WIDTH=========== */

    function getSlideWidth() {
        if (!slides[0]) return 0;
        const slideStyle =
            window.getComputedStyle(slides[0]);

        const gap =
            parseFloat(
                window.getComputedStyle(track).gap
            ) || 0;

        return slides[0].getBoundingClientRect().width + gap;
    }

    /* =========UPDATE IMAGE========== */

    function updateImage(index) {
        const selectedSlide = slides[index];
        if (!selectedSlide) return;
        const newImage =
            selectedSlide.getAttribute("data-image");
        if (!newImage) return;

        /* Fade image out */

        mainImage.classList.add("partner-image-changing");

        setTimeout(function () {
            mainImage.src = newImage;
            mainImage.onload = function () {

                mainImage.classList.remove(
                    "partner-image-changing"
                );

            };

        }, 180);

    }


    /* ====================== UPDATE NUMBER=========== */

    function updateNumber(index) {
        /*
        * Main image number
        * Example: 01 / 06
        */
        if (currentNumber) {
            currentNumber.textContent =
                String(index + 1).padStart(2, "0");
        }


        /*
        * Slider progress number
        * Example: 01 → 02 → 03 → 04...
        */
        const progressCurrent =
            slider.querySelector(".progress-current");

        if (progressCurrent) {

            progressCurrent.textContent =
                String(index + 1).padStart(2, "0");

        }

    }

    /* ===================UPDATE PROGRESS========== */

    function updateProgress(index) {
        const percentage =
            ((index + 1) / totalSlides) * 100;
        progressBar.style.width =
            percentage + "%";
    }


    /* =============MOVE SLIDER========== */

    function moveSlider() {
        const slideWidth = getSlideWidth();
        track.style.transform =
            `translate3d(-${currentIndex * slideWidth}px, 0, 0)`;

        updateImage(currentIndex);
        updateNumber(currentIndex);
        updateProgress(currentIndex);
    }


    /* =========NEXT============ */

    function nextSlide() {
        currentIndex++;

        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        moveSlider();
    }


    /* ===========PREVIOUS============ */

    function previousSlide() {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        moveSlider();
    }


    /* ==============BUTTONS============= */

    nextBtn.addEventListener("click", function () {
        nextSlide();
        restartAutoSlide();
    });


    prevBtn.addEventListener("click", function () {
        previousSlide();
        restartAutoSlide();
    });


    /* ===========CLICK ON LOGO CARD======== */

    slides.forEach(function (slide, index) {
        slide.addEventListener("click", function () {
            currentIndex = index;
            moveSlider();
            restartAutoSlide();
        });
    });


    /* =========== AUTO SLIDER=========== */

    function startAutoSlide() {
        stopAutoSlide();
        autoSlide = setInterval(function () {
            nextSlide();
        }, 4000);
    }


    function stopAutoSlide() {
        if (autoSlide) {
            clearInterval(autoSlide);
            autoSlide = null;
        }
    }


    function restartAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    /* =========PAUSE ON HOVER=========== */

    slider.addEventListener(
        "mouseenter",
        stopAutoSlide
    );

    slider.addEventListener(
        "mouseleave",
        startAutoSlide
    );

    /*==============RESIZE============ */

    window.addEventListener(
        "resize",
        function () {
            moveSlider();
        }
    );

    /* ===============INITIAL STATE======== */

    moveSlider();
    startAutoSlide();
});

// Our Partner section==========End








