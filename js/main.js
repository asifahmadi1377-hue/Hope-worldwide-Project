/* =========================================================
   HOPE WORLDWIDE ACADEMY - Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // 1. تنظیمات اولیه
  document.documentElement.classList.add("js-enabled");
  const root = document.documentElement;
  const body = document.body;
  const academy = window.HopeData || {};

  let currentLang = localStorage.getItem("hope-lang") || "en";
  let currentTheme = localStorage.getItem("hope-theme") || "light";

  // =====================================================
  // (Dark / Light)
  // =====================================================
  const themeToggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    currentTheme = theme;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("hope-theme", theme);

    if (themeToggle) {
      const icon = themeToggle.querySelector("i");
      if (icon) {
        icon.className = theme === "dark" ? "fa-regular fa-sun" : "fa-regular fa-moon";
      }
    }
  }

  applyTheme(currentTheme);
  themeToggle?.addEventListener("click", () => {
    applyTheme(currentTheme === "light" ? "dark" : "light");
  });

  // =====================================================
  // (English / Dari)
  // =====================================================
  const langToggle = document.getElementById("langToggle");

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("hope-lang", lang);

    const isDari = lang === "dari" || lang === "fa";

    root.lang = isDari ? "fa" : "en";
    root.dir = isDari ? "rtl" : "ltr";

    if (langToggle) {
      langToggle.textContent = isDari ? "EN" : "فا";
    }

    document.querySelectorAll("[data-en][data-dari]").forEach(el => {
      const textToApply = isDari ? el.getAttribute("data-dari") : el.getAttribute("data-en");
      

      if (el.children.length > 0) {
        let hasTextNode = false;
        el.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
            node.textContent = textToApply;
            hasTextNode = true;
          }
        });
        if (!hasTextNode) el.textContent = textToApply;
      } else {
        el.textContent = textToApply;
      }
    });


    document.querySelectorAll("[data-en-placeholder][data-dari-placeholder]").forEach(input => {
      input.placeholder = isDari ? input.getAttribute("data-dari-placeholder") : input.getAttribute("data-en-placeholder");
    });

    if (typeof renderCourses === "function") renderCourses();
    if (typeof renderInstructors === "function") renderInstructors();
  }

  langToggle?.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "dari" : "en");
  });

  // =====================================================
  // Mune Mobile
  // =====================================================
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle?.addEventListener("click", () => {
    navLinks?.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // =====================================================
  // 5. رندر کردن کارت‌های استادان
  // =====================================================
  const instructorsContainer = document.getElementById("homeInstructors");

  function renderInstructors() {
    if (!instructorsContainer || !academy.instructors) return;

    instructorsContainer.innerHTML = academy.instructors.map(inst => {
      const isDari = currentLang === "dari" || currentLang === "fa";
      const name = isDari && inst.nameDari ? inst.nameDari : inst.name;
      const specialty = isDari && inst.specialtyDari ? inst.specialtyDari : inst.specialty;
      const exp = isDari && inst.experienceDari ? inst.experienceDari : inst.experience;
      const bio = isDari && inst.bioDari ? inst.bioDari : inst.bio;

      return `
        <article class="instructor-card reveal">
          <div class="instructor-image">
            <img src="${inst.image}" alt="${name}" loading="lazy" onerror="this.src='images/Logo_Hope_Worldwide_light.png'">
          </div>
          <div class="instructor-info">
            <h3>${name}</h3>
            <p>${specialty}</p>
            ${bio ? `<p class="instructor-bio">${bio}</p>` : ""}
            <span class="instructor-experience">${exp}</span>
          </div>
        </article>
      `;
    }).join("");

    observeElements();
  }

  // =====================================================
  // 6. رندر کردن کارت‌های کورس‌ها
  // =====================================================
  const coursesContainer = document.getElementById("popularCourses");

  function renderCourses() {
    if (!coursesContainer || !academy.courses) return;

    const isCoursesPage = window.location.pathname.includes("courses.html");
    const coursesToShow = isCoursesPage ? academy.courses : academy.courses.slice(0, 6);
    const isDari = currentLang === "dari" || currentLang === "fa";

    coursesContainer.innerHTML = coursesToShow.map(course => {
      const title = isDari && course.titleDari ? course.titleDari : course.title;
      const category = isDari && course.categoryDari ? course.categoryDari : course.category;
      const instructor = course.instructor;
      const level = isDari && course.levelDari ? course.levelDari : course.level;
      
      return `
        <article class="course-card reveal">
          <a class="course-image" href="${course.link}">
            <img src="${course.image}" alt="${title}" loading="lazy" onerror="this.src='images/Logo_Hope_Worldwide_light.png'">
            <span class="course-category">${category}</span>
          </a>
          <div class="course-content">
            <div class="course-rating"><span>★</span> <span>${course.rating}</span></div>
            <h3><a href="${course.link}">${title}</a></h3>
            <p class="course-instructor"> ${instructor}</p>
            <div class="course-meta">
              <span>◷ ${course.duration}</span>
              <span>${level}</span>
            </div>
            <div class="course-card-footer">
              <strong class="course-price">
                ${course.price === "Free"
                ? (isDari ? "رایگان" : "Free") 
                : "$" + course.price}
              </strong>
              <a href="${course.link}" class="course-link">${isDari ? 'مشاهده ←' : 'View →'}  </a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    observeElements();
  }

  // =====================================================
  // 7. انیمیشن اسکرول
  // =====================================================
  function observeElements() {
    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    elements.forEach(el => observer.observe(el));
  }

  // =====================================================
  // 8. راه‌اندازی اولیه
  // =====================================================
  function init() {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    
    // سال جاری
    const currentYearEl = document.getElementById("currentYear");
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
    
    observeElements();
  }

  init();
});

 // =====================================================
  //   Gallery
  // =====================================================

document.addEventListener("DOMContentLoaded", () => {
      
      const photos = [
        { src: "images/Gallery/Photo (1).jpeg", title: "Front-end Class", cat: "class" },
        { src: "images/Gallery/Photo (2).jpeg", title: "Graphic Design", cat: "class" },
        { src: "images/Gallery/Photo (3).jpeg", title: "Mobile Repairing", cat: "class" },
        { src: "images/Gallery/Photo (4).jpeg", title: "Student Project", cat: "project" },
        { src: "images/Gallery/Photo (5).jpeg", title: "Academy Event", cat: "event" },
        { src: "images/Gallery/Photo (6).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (7).JPG", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (8).JPG", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (9).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (10).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (11).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (12).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (13).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (14).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (15).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (16).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (17).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (18).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (19).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (20).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (21).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (22).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (23).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (24).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (25).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (26).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (27).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (28).jpeg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (29).jpg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (30).jpg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (31).jpg", title: "Coding Session", cat: "class" },
        { src: "images/Gallery/Photo (32).jpg", title: "Coding Session", cat: "class" },
      ];

      const galleryEl = document.getElementById("gallery");
      let visiblePhotos = [...photos];
      let currentIndex = 0;


      function renderGallery(filter = "all") {
        visiblePhotos = filter === "all" ? [...photos] : photos.filter(p => p.cat === filter);
        galleryEl.innerHTML = "";

        visiblePhotos.forEach((photo, i) => {
          const item = document.createElement("div");
          item.className = "gallery-item";
          item.style.transitionDelay = (i % 8) * 60 + "ms";
          item.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" loading="lazy">
            <div class="item-overlay">
              <h3>${photo.title}</h3>
              <span>${photo.cat}</span>
            </div>
          `;
          item.addEventListener("click", () => openLightbox(i));
          galleryEl.appendChild(item);
        });

        requestAnimationFrame(() => observeItems());
      }


      let observer;
      function observeItems() {
        if (observer) observer.disconnect();
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

        document.querySelectorAll(".gallery-item").forEach(el => observer.observe(el));
      }


      document.getElementById("filters").addEventListener("click", (e) => {
        const chip = e.target.closest(".filter-chip");
        if (!chip) return;
        

        if (chip.tagName !== "BUTTON") return;

        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        renderGallery(chip.dataset.filter);
      });

      const lightbox = document.getElementById("lightbox");
      const lbImg = document.getElementById("lbImg");

      function openLightbox(index) {
        currentIndex = index;
        lbImg.src = visiblePhotos[index].src;
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      }

      function closeLightbox() {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
      }

      function showNext() {
        currentIndex = (currentIndex + 1) % visiblePhotos.length;
        lbImg.src = visiblePhotos[currentIndex].src;
      }

      function showPrev() {
        currentIndex = (currentIndex - 1 + visiblePhotos.length) % visiblePhotos.length;
        lbImg.src = visiblePhotos[currentIndex].src;
      }

      document.getElementById("lbClose").addEventListener("click", closeLightbox);
      document.getElementById("lbNext").addEventListener("click", showNext);
      document.getElementById("lbPrev").addEventListener("click", showPrev);
      
      lightbox.addEventListener("click", (e) => { 
        if (e.target === lightbox) closeLightbox(); 
      });

      document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showNext();
        if (e.key === "ArrowRight") showPrev();
      });

      const toTop = document.getElementById("toTop");
      window.addEventListener("scroll", () => {
        toTop.classList.toggle("show", window.scrollY > 400);
      });
      toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

      renderGallery("all");
    });


      // ===== Student Reels =====
      const studentReels = [
        { 
          title: "پروژه نهایی طراحی وب", 
          titleEn: "Stand with Kunar; Hope Amid the Ruins",
          desc: "زمین لرزید، اما امید مردم کنر همچنان پابرجاست؛ با همدلی و دست‌های یاریگرمان می‌توانیم مرهمی بر دردهایشان باشیم و امید را دوباره بسازیم.",
          descEn: "The earth shook, but Kunar's hope remains strong; together, our compassion and helping hands can bring comfort and rebuild hope.",
          videoUrl: "Video/Video.mp4",  
          thumbnail: "Video/Hope Image.png"  
        },
        { 
          title: "پروژه نهایی طراحی وب", 
          titleEn: "Life at Hope",
          desc: "ببینید چگونه شاگرد ما یک وب‌سایت کامل و واکنش‌گرا ساخت.",
          descEn: "Together, we inspire kindness, spread hope, and build a brighter future for everyone.",
          videoUrl: "Video/Video 1.mp4",     
          thumbnail: "Video/Hope Image.png"  
        },
        { 
          title: "داستان موفقیت در طراحی گرافیک", 
          titleEn: "Graphic Design Success Story",
          desc: "از یک استودیوی کوچک خانگی تا برندی شناخته‌شده در سطح جهانی، دیدگاه جسورانه او در طراحی گرافیک، اشتیاقش را به یک امپراتوری خلاقانه پررونق تبدیل کرد",
          descEn: "From a small home studio to a globally recognized brand, her bold graphic design vision turned passion into a thriving creative empire.",
          videoUrl: "Video/Video 3.mp4", 
          thumbnail: "Video/Hope Image.png"
        },
        { 
          title: "داستان موفقیت در طراحی وب", 
          titleEn: "Web Design Success Story",
          desc: "یک طراح وب خودآموخته، یک پروژه ساده فریلنسی را به یک آژانس دیجیتال کامل با مشتریانی در سراسر جهان تبدیل کرد.",
          descEn: " A self-taught web designer turned a simple freelance gig into a full-service digital agency serving clients worldwide.",
          videoUrl: "Video/Video 2.mp4", 
          thumbnail: "Video/image .png"
        },
        
        { 
          title: "سخنرانی مقام وزارت", 
          titleEn: "Ministry Official's Address",
          desc: "نماینده وزارت در حال سخنرانی برای دانش‌آموزان در طول مراسم فارغ‌التحصیلی.",
          descEn: "Ministry representative addressing the students during the graduation ceremony.",
          videoUrl: "Video/Video 4.mp4", 
          thumbnail: "Video/image 2.png"
        },
        { 
          title: "سخنرانی مقام وزارت", 
          titleEn: "Ministry Official's Address",
          desc: "نماینده وزارت در حال سخنرانی برای دانش‌آموزان در طول مراسم فارغ‌التحصیلی.",
          descEn: "Ministry representative addressing the students during the graduation ceremony.",
          videoUrl: "Video/Video 5.mp4", 
          thumbnail: "Video/image 3.png"
        },
        { 
          title: "داستان موفقیت در طراحی وب", 
          titleEn: "Web Design Success Story",
          desc: "او تنها با یک لپ‌تاپ و یک ایده بزرگ شروع کرد و استودیوی طراحی وبی ساخت که امروز حضور آنلاین صدها کسب‌وکار را ممکن می‌سازد.",
          descEn: " Starting with nothing but a laptop and a big idea, he built a web design studio that now powers the online presence of hundreds of businesses.",
          videoUrl: "Video/Video 6.mp4", 
          thumbnail: "Video/image 4.png"
        },
        
      ];

      const reelsGrid = document.getElementById("reelsGrid");

      function renderReels() {
        if (!reelsGrid) return;
        const isDari = document.documentElement.dir === "rtl";

        reelsGrid.innerHTML = studentReels.map((reel, index) => {
          return `
            <div class="reel-card reveal">
              <div class="reel-video-wrapper" data-index="${index}">
                <img src="${reel.thumbnail}" alt="${reel.titleEn}" onerror="this.src='images/1.jpeg'">
                <button class="reel-play-btn"><i class="fa-solid fa-play"></i></button>
                <video controls playsinline preload="none">
                  <source src="${reel.videoUrl}" type="video/mp4">
                </video>
              </div>
              <div class="reel-info">
                <div class="reel-meta">
                  <span><i class="fa-solid fa-user-graduate"></i> ${isDari ? "پروژ آموزش و مراقبت" : "Education & Care Project"}</span>
                </div>
                <h3 class="reel-title">${isDari ? reel.title : reel.titleEn}</h3>
                <p class="reel-desc">${isDari ? reel.desc : reel.descEn}</p>
              </div>
            </div>
          `;
        }).join("");

        // اضافه کردن رویداد کلیک برای پخش ویدیو
        document.querySelectorAll(".reel-video-wrapper").forEach(wrapper => {
          wrapper.addEventListener("click", function(e) {
            if (e.target.tagName === "VIDEO") return; 
            if (this.classList.contains("playing")) return;

            const video = this.querySelector("video");
            this.classList.add("playing");
            video.play();
          });

          // وقتی ویدیو تمام شد، دوباره عکس کاور را نشان بده
          const video = wrapper.querySelector("video");
          video.addEventListener("ended", function() {
            wrapper.classList.remove("playing");
            video.currentTime = 0;
          });
        });
        
        // فعال کردن مجدد انیمیشن اسکرول
        if (typeof observeRevealElements === "function") observeRevealElements();
      }

      // اجرای تابع برای ساخت ویدیوها
      renderReels();