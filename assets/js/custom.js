// Sticky Navbar

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// Slider

const heroSlider = document.querySelector("#heroSlider");

new bootstrap.Carousel(heroSlider, {

    interval: 5000,
    pause: false,
    ride: "carousel",
    touch: true

});


/* search js============start*/
	const overlay = document.querySelector(".search-overlay");

	document.querySelector(".open-search").addEventListener("click", function(e){

		e.preventDefault();

		overlay.classList.add("active");

		document.querySelector(".search-box input").focus();

	});

	document.querySelector(".close-search").addEventListener("click", function(){

		overlay.classList.remove("active");

	});

/* search js============end*/



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
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNDM0NGQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZWFyY2gtY2hlY2staWNvbiBsdWNpZGUtc2VhcmNoLWNoZWNrIj48cGF0aCBkPSJtOCAxMSAyIDIgNC00Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIi8+PC9zdmc+",
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
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNDM0NGQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaGllbGQtY2hlY2staWNvbiBsdWNpZGUtc2hpZWxkLWNoZWNrIj48cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiLz48cGF0aCBkPSJtOSAxMiAyIDIgNC00Ii8+PC9zdmc+",
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
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNDM0NGQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaGllbGQtaWNvbiBsdWNpZGUtc2hpZWxkIj48cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiLz48L3N2Zz4=",
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
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNDM0NGQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2Vycy1pY29uIGx1Y2lkZS11c2VycyI+PHBhdGggZD0iTTE2IDIxdi0yYTQgNCAwIDAgMC00LTRINmE0IDQgMCAwIDAtNCA0djIiLz48cGF0aCBkPSJNMTYgMy4xMjhhNCA0IDAgMCAxIDAgNy43NDQiLz48cGF0aCBkPSJNMjIgMjF2LTJhNCA0IDAgMCAwLTMtMy44NyIvPjxjaXJjbGUgY3g9IjkiIGN5PSI3IiByPSI0Ii8+PC9zdmc+",
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
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNDM0NGQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaXJlbi1pY29uIGx1Y2lkZS1zaXJlbiI+PHBhdGggZD0iTTcgMTh2LTZhNSA1IDAgMSAxIDEwIDB2NiIvPjxwYXRoIGQ9Ik01IDIxYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMXYtMWEyIDIgMCAwIDAtMi0ySDdhMiAyIDAgMCAwLTIgMnoiLz48cGF0aCBkPSJNMjEgMTJoMSIvPjxwYXRoIGQ9Ik0xOC41IDQuNSAxOCA1Ii8+PHBhdGggZD0iTTIgMTJoMSIvPjxwYXRoIGQ9Ik0xMiAydjEiLz48cGF0aCBkPSJtNC45MjkgNC45MjkuNzA3LjcwNyIvPjxwYXRoIGQ9Ik0xMiAxMnY2Ii8+PC9zdmc+",
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

// Map js==================Start



// Map Js=================End







