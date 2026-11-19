
"use strict";
window.HopeData = {

    // ========================================================
    // 01. COURSE DATA — 12 COURSES (4 WEB + 4 GRAPHIC + 4 MOBILE)
    // ========================================================

    courses: [
        // ===== WEB DESIGN =====
        {
            id: 1,
            title: "HTML & CSS Fundamentals",
            category: "Web Design",
            categoryId: "web",
            instructor: "Mohammad Asif Ahmadi",
            rating: 5,
            price: "Free",
            duration: "6 Weeks",
            level: "Beginner",
            image: "images/Courses/Html and Css.jpg",
            description: "Learn how to build beautiful and responsive websites using HTML5 and CSS3.",
            link: "web-design.html"
        },
        {
            id: 2,
            title: "JavaScript Programming",
            category: "Web Design",
            categoryId: "web",
            instructor: "Mohammad Asif Ahmadi",
            rating: 5,
            price: "Free",
            duration: "8 Weeks",
            level: "Intermediate",
            image: "images/Courses/JavaScript.jpeg",
            description: "Master JavaScript fundamentals and create interactive website experiences.",
            link: "web-design.html"
        },
        {
            id: 3,
            title: "Responsive Web Design",
            category: "Web Design",
            categoryId: "web",
            instructor: "Mohammad Asif Ahmadi",
            rating: 5,
            price: "Free",
            duration: "6 Weeks",
            level: "Beginner",
            image: "images/Courses/Responsive Website.jpeg",
            description: "Design websites that look professional on mobile, tablet and desktop.",
            link: "web-design.html"
        },
        {
            id: 4,
            title: "Figma and Bootstrap",
            category: "Web Design",
            categoryId: "web",
            instructor: "Mohammad Asif Ahmadi",
            rating: 5,
            price: "Free",
            duration: "12 Weeks",
            level: "Advanced",
            image: "images/Courses/Figma and Bootstrap.jpeg",
            description: "Understand frontend and backend development and build complete web projects.",
            link: "web-design.html"
        },

        // ===== GRAPHIC DESIGN =====
        {
            id: 5,
            title: "Adobe Photoshop Masterclass",
            category: "Graphic Design",
            categoryId: "graphic",
            instructor: "Mohammad Fahim Arif",
            rating: 5,
            price: "Free",
            duration: "6 Weeks",
            level: "Beginner",
            image: "images/Courses/Photoshop.jpeg",
            description: "Learn professional photo editing, image manipulation and creative compositions.",
            link: "graphic-design.html"
        },
        {
            id: 6,
            title: "Adobe Illustrator Essentials",
            category: "Graphic Design",
            categoryId: "graphic",
            instructor: "Mohammad Fahim Arif",
            rating: 5,
            price: "Free",
            duration: "7 Weeks",
            level: "Beginner",
            image: "images/Courses/Adobe Illustrator.jpeg",
            description: "Create vector graphics, illustrations, icons and professional visual assets.",
            link: "graphic-design.html"
        },
        {
            id: 7,
            title: "Adobe Premaiere",
            category: "Graphic Design",
            categoryId: "graphic",
            instructor: "Mohammad Fahim Arif",
            rating: 5,
            price: "Free",
            duration: "8 Weeks",
            level: "Intermediate",
            image: "images/Courses/Premiere Pro.jpeg",
            description: "Learn how to create memorable logos, brand systems and visual identities.",
            link: "graphic-design.html"
        },
        {
            id: 8,
            title: "After Effect",
            category: "Graphic Design",
            categoryId: "graphic",
            instructor: "Mohammad Fahim Arif",
            rating: 5,
            price:"Free",
            duration: "8 Weeks",
            level: "Intermediate",
            image: "images/Courses/After Effects.jpeg",
            description: "Learn user research, wireframing, prototyping and modern interface design.",
            link: "graphic-design.html"
        },

        // ===== MOBILE ENGINEERING =====
        {
            id: 9,
            title: "Mobile Hardware",
            category: "Mobile Engineering",
            categoryId: "mobile",
            instructor: "Mohammad Salim Shah",
            rating: 5,
            price: "Free",
            duration: "8 Weeks",
            level: "Beginner",
            image: "images/Courses/hardware.jpeg",
            description: "Learn Kotlin programming and the foundations of Android application development.",
            link: "mobile-engineering.html"
        },
        {
            id: 10,
            title: "Mobile Screen Glass",
            category: "Mobile Engineering",
            categoryId: "mobile",
            instructor: "Mohammad Salim Shah",
            rating: 5,
            price: "Free",
            duration: "10 Weeks",
            level: "Intermediate",
            image: "images/Courses/screen.jpeg",
            description: "Build Android applications with modern development tools and practices.",
            link: "mobile-engineering.html"
        },
        {
            id: 11,
            title: "Mobile Software",
            category: "Mobile Engineering",
            categoryId: "mobile",
            instructor: "Mohammad Salim Shah",
            rating: 5,
            price:"Free",
            duration: "10 Weeks",
            level: "Intermediate",
            image: "images/Courses/software.jpeg",
            description: "Create beautiful cross-platform mobile applications using Flutter and Dart.",
            link: "mobile-engineering.html"
        },
        {
            id: 12,
            title: "Mobile Online Unlocking",
            category: "Mobile Engineering",
            categoryId: "mobile",
            instructor: "Mohammad Salim Shah",
            rating: 5,
            price: "Free",
            duration: "7 Weeks",
            level: "Beginner",
            image: "images/Courses/unlock.jpeg",
            description: "Design and develop polished mobile interfaces with practical projects.",
            link: "mobile-engineering.html"
        }
    ],


    // ========================================================
    // 02. INSTRUCTOR DATA — 3 ACADEMY INSTRUCTORS
    // ========================================================

    instructors: [
        {
            id: 1,
            name: "Mohammad Asif Ahmadi",
            nameDari: "محمد آصف احمدی",
            specialty: "Web Design & Development",
            specialtyDari: "طراحی و توسعه وب",
            experience: "5+ Years Experience",
            experienceDari: "بیش از ۵ سال تجربه",
            image: "images/Staff/Mohammad Asif Ahmadi.jpeg",
            bio: "Architecting seamless digital experiences and empowering future innovators through cutting-edge web technologies and practical, hands-on programming.",
            bioDari: "خلق تجربه‌های دیجیتال یکپارچه و توانمندسازی نوآوران آینده از طریق فناوری‌های پیشرفته وب و برنامه‌نویسی کاربردی و عملی.",
            social: {
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            id: 2,
            name: "Mohammad Fahim Arif",
            nameDari: "محمد فهیم عارف",
            specialty: "Graphic Design",
            specialtyDari: "طراحی گرافیک",
            experience: "5+ Years Experience",
            experienceDari: "بیش از ۵ سال تجربه",
            image: "images/Staff/Mohammad Fahim Wardak.png",
            bio: "Transforming complex ideas into captivating visual narratives through innovative branding, striking digital illustration, and modern design aesthetics.",
            bioDari: "تبدیل ایده‌های پیچیده به روایت‌های بصری جذاب از طریق برندسازی نوآورانه، تصویرسازی دیجیتال چشمگیر و زیبایی‌شناسی طراحی مدرن.",
            social: {
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            id: 3,
            name: "Mohammad Salim Shah",
            nameDari: "محمد سلیم شاه",
            specialty: "Mobile Engineering",
            specialtyDari: "مهندسی موبایل",
            experience: "5+ Years Experience",
            experienceDari: "بیش از ۵ سال تجربه",
            image: "images/Staff/Salim Shah.png",
            bio: "Delivering precision mobile repair solutions, from advanced hardware diagnostics to seamless software restoration. Restoring your devices to peak performance with expert care and reliability.",
            bioDari: "ارائه راهکارهای دقیق تعمیرات موبایل، از عیب‌یابی‌های پیشرفته سخت‌افزاری تا بازیابی یکپارچه نرم‌افزاری. بازگرداندن دستگاه‌های شما به اوج عملکرد، با تخصص، دقت و قابلیت اطمینان بالا.",
            social: {
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            id: 4,
            name: "Aminullah Kamawi",
            nameDari: "امین الله کامه وی",
            specialty: "Admin",
            specialtyDari: "مدیر اداری",
            experience: "5+ Years Experience",
            experienceDari: "بیش از ۵ سال تجربه",
            image: "images/Staff/Aminullah.jpeg",
            bio: " focused and committed to purseuing orginzation goals and making valuable contribution for the needful communities.",
            bioDari: "با تمرکز و تعهد کامل در راستای پیگیری اهداف سازمان و ارائه سهمی ارزشمند برای جوامع نیازمند گام برمی‌دارد.",
            social: {
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            id: 5,
            name: "Shaheedullah Kameen",
            nameDari: "شهیدالله کمین",
            specialty: "Security officer",
            specialtyDari: "مسول امنیت",
            experience: "5+ Years Experience",
            experienceDari: "بیش از ۵ سال تجربه",
            image: "images/Staff/Shaheedullah Kameen.jpg",
            bio: "Safeguarding our community and assets with unwavering vigilance, proactive risk management, and a steadfast commitment to a secure environment.",
            bioDari: "حفاظت از جامعه و دارایی‌های ما با هوشیاری تزلزل‌ناپذیر، مدیریت پیشگیرانه ریسک‌ها و تعهد استوار به یک محیط امن.",
            social: {
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            id: 6,
            name: "Wahidullah Rahimi ",
            nameDari: "واحدالله رحیمی",
            specialty: "Guard",
            specialtyDari: "محافظ",
            experience: "5+ Years Experience",
            experienceDari: "بیش از ۵ سال تجربه",
            image: "images/Staff/Wahidullah.jpeg",
            bio: "Maintaining a safe, welcoming, and highly secure environment through constant alertness and reliable daily protection.",
            bioDari: "ایجاد و حفظ محیطی امن، پذیرا (خوش‌آمدگو) و کاملاً ایمن، از طریق هوشیاری مداوم و حفاظت روزانه‌ای قابل اعتماد.",
            social: {
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            }
        }
    ],


    // ========================================================
    // 03. CONTACT INFORMATION (EDIT THESE!)
    // ========================================================

    contact: {
        emails: [
            { label: "General Inquiries", value: "info@hopeworldwide.edu" },
            { label: "Support", value: "support@hopeworldwide.edu" }
        ],
        phones: [
            { label: "Admissions", value: "+93 70 000 0000" },
            { label: "Support", value: "+93 78 000 0000" }
        ],
        location: {
            en: "Kabul, Afghanistan",
            dari: "کابل، افغانستان"
        },
        address: {
            en: "Main Street, Kabul, Afghanistan",
            dari: "سرک عمومی، کابل، افغانستان"
        },
        workingHours: [
            { day: { en: "Saturday – Wednesday", dari: "شنبه – چهارشنبه" }, time: "8:00 AM – 5:00 PM" },
            { day: { en: "Thursday", dari: "پنجشنبه" }, time: "8:00 AM – 1:00 PM" },
            { day: { en: "Friday", dari: "جمعه" }, time: { en: "Closed", dari: "تعطیل" } }
        ],
        social: {
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        }
    },


    // ========================================================
    // 04. TRANSLATIONS — ENGLISH + DARI
    // ========================================================

    translations: {
        en: {
            home: "Home",
            about: "About Us",
            courses: "Courses",
            instructors: "Instructors",
            contact: "Communicative Sources",
            search: "Search",
            language: "دری",

            academyName: "Hope Worldwide Academy",

            heroEyebrow: "WELCOME TO HOPE WORLDWIDE",
            heroDescription: "Discover your potential with professional training in Web Development, Graphic Design and Mobile Engineering. Build practical skills for a brighter future.",
            heroButton: "Explore Programs",
            heroSecondary: "Contact Us",
            trustedStudents: "Loved by 500+ students",

            students: "Students",
            coursesCount: "Courses",
            instructorsCount: "Expert Instructors",
            satisfaction: "Student Satisfaction",

            programsTitle: "Explore Our Programs",
            programsDescription: "Choose a learning path that matches your passion and turn your ambitions into real-world skills.",
            webDesign: "Web Design",
            graphicDesign: "Graphic Design",
            mobileEngineering: "Mobile Engineering",
            webDescription: "Learn to design and develop beautiful, responsive and modern websites.",
            graphicDescription: "Turn creative ideas into powerful visual designs and professional brand identities.",
            mobileDescription: "Build innovative Android and cross-platform mobile applications.",
            learnMore: "Learn More",

            popularCourses: "Popular Courses",
            popularDescription: "Explore our carefully designed courses and start building your future.",
            allCourses: "View All Courses",
            courseInstructor: "Instructor",
            courseDuration: "Duration",
            courseLevel: "Level",
            beginner: "Beginner",
            intermediate: "Intermediate",
            advanced: "Advanced",
            weeks: "Weeks",

            galleryTitle: "Life at Hope Worldwide",
            galleryDescription: "A place where students learn, collaborate, create and achieve their goals.",

            aboutTitle: "About Hope Worldwide Academy",
            aboutDescription: "We believe education is the foundation of opportunity. Our academy is dedicated to empowering learners through practical knowledge, technology and creativity.",
            ourMission: "Our Mission",
            missionDescription: "To make quality technology education accessible and help students develop skills that create meaningful opportunities.",
            ourVision: "Our Vision",
            visionDescription: "To become a trusted learning community that inspires innovation, confidence and positive change.",

            meetInstructors: "Meet Our Instructors",
            instructorsDescription: "Learn from dedicated professionals who bring practical knowledge and real-world experience into the classroom.",
            yearsExperience: "Years of Experience",

            contactTitle: "Get in Touch",
            contactDescription: "Have a question about our programs? Reach out to us through any of the channels below.",
            emailUs: "Email Us",
            callUs: "Call Us",
            visitUs: "Visit Us",
            workingHours: "Working Hours",
            followUs: "Follow Us",

            ctaTitle: "Ready to Start Your Journey?",
            ctaDescription: "Take the first step toward a brighter future. Learn, create and grow with us.",
            registerNow: "Contact Us",

            quickLinks: "Quick Links",
            ourPrograms: "Our Programs",
            allRights: "All Rights Reserved.",

            by: "By",
            viewCourse: "View Course",
            noResults: "No results found."
        },

        dari: {
            home: "خانه",
            about: "درباره ما",
            courses: "دوره‌ها",
            instructors: "استادان",
            contact: "منابع ارتباطی",
            search: "جستجو",
            language: "English",

            academyName: "آکادمی امید جهانی",

            heroEyebrow: "به آکادمی امید جهانی خوش آمدید",
            heroDescription: "توانایی‌های خود را با آموزش‌های حرفه‌ای در زمینه توسعه وب، طراحی گرافیک و مهندسی موبایل کشف کنید. مهارت‌های عملی برای آینده‌ای روشن بسازید.",
            heroButton: "مشاهده برنامه‌ها",
            heroSecondary: "تماس با ما",
            trustedStudents: "مورد علاقه بیش از ۵۰۰ دانشجو",

            students: "دانشجویان",
            coursesCount: "دوره‌های آموزشی",
            instructorsCount: "استادان متخصص",
            satisfaction: "رضایت دانشجویان",

            programsTitle: "برنامه‌های آموزشی ما",
            programsDescription: "مسیر آموزشی متناسب با علاقه خود را انتخاب کنید و آرزوهای تان را به مهارت‌های واقعی تبدیل نمایید.",
            webDesign: "طراحی وب",
            graphicDesign: "طراحی گرافیک",
            mobileEngineering: "مهندسی موبایل",
            webDescription: "طراحی و توسعه وب‌سایت‌های زیبا، واکنش‌گرا و مدرن را بیاموزید.",
            graphicDescription: "ایده‌های خلاقانه خود را به طرح‌های گرافیکی حرفه‌ای تبدیل کنید.",
            mobileDescription: "ساخت اپلیکیشن‌های اندروید و موبایل چندسکویی را بیاموزید.",
            learnMore: "بیشتر بدانید",

            popularCourses: "دوره‌های محبوب",
            popularDescription: "دوره‌های آموزشی ما را بررسی کنید و ساختن آینده خود را آغاز نمایید.",
            allCourses: "مشاهده تمام دوره‌ها",
            courseInstructor: "استاد",
            courseDuration: "مدت دوره",
            courseLevel: "سطح",
            beginner: "مبتدی",
            intermediate: "متوسط",
            advanced: "پیشرفته",
            weeks: "هفته",

            galleryTitle: "زندگی در آکادمی امید جهانی",
            galleryDescription: "محیطی برای یادگیری، همکاری، خلاقیت و رسیدن به موفقیت.",

            aboutTitle: "درباره آکادمی امید جهانی",
            aboutDescription: "ما باور داریم که آموزش اساس فرصت‌ها است. آکادمی ما متعهد به توانمندسازی دانش‌آموزان و دانشجویان از طریق دانش عملی، فناوری و خلاقیت می‌باشد.",
            ourMission: "ماموریت ما",
            missionDescription: "فراهم‌سازی آموزش باکیفیت فناوری و کمک به دانشجویان برای کسب مهارت‌هایی که فرصت‌های ارزشمند ایجاد می‌کنند.",
            ourVision: "چشم‌انداز ما",
            visionDescription: "تبدیل شدن به یک جامعه آموزشی معتبر که الهام‌بخش نوآوری، اعتماد به نفس و تغییرات مثبت باشد.",

            meetInstructors: "با استادان ما آشنا شوید",
            instructorsDescription: "از متخصصان متعهد بیاموزید که دانش عملی و تجربه واقعی خود را در صنف‌های آموزشی شریک می‌سازند.",
            yearsExperience: "سال تجربه",

            contactTitle: "ارتباط با ما",
            contactDescription: "در مورد برنامه‌های آموزشی ما سوال دارید؟ از طریق هر یک از راه‌های زیر با ما در تماس شوید.",
            emailUs: "ایمیل به ما",
            callUs: "تماس با ما",
            visitUs: "بازدید از ما",
            workingHours: "ساعات کاری",
            followUs: "ما را دنبال کنید",

            ctaTitle: "آماده‌اید سفر آموزشی خود را آغاز کنید؟",
            ctaDescription: "اولین قدم را به سوی آینده‌ای روشن بردارید. با ما بیاموزید، خلق کنید و پیشرفت نمایید.",
            registerNow: "تماس با ما",

            quickLinks: "لینک‌های سریع",
            ourPrograms: "برنامه‌های آموزشی",
            allRights: "تمام حقوق محفوظ است.",

            by: "استاد",
            viewCourse: "مشاهده دوره",
            noResults: "نتیجه‌ای یافت نشد."
        }
    }
};


// ============================================================
// HELPER FUNCTIONS
// ============================================================

window.HopeData.getCourses = function () {
    return this.courses;
};

window.HopeData.getCourseById = function (id) {
    return this.courses.find(course => course.id === Number(id));
};

window.HopeData.getCoursesByCategory = function (category) {
    return this.courses.filter(course => course.categoryId === category);
};

window.HopeData.searchCourses = function (query) {
    const searchTerm = String(query).trim().toLowerCase();
    if (!searchTerm) return [];

    return this.courses.filter(course => {
        return (
            course.title.toLowerCase().includes(searchTerm) ||
            course.instructor.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm)
        );
    });
};

window.HopeData.getInstructor = function (name) {
    return this.instructors.find(instructor =>
        instructor.name.toLowerCase() === name.toLowerCase()
    );
};

window.HopeData.translate = function (language, key) {
    const selectedLanguage = this.translations[language] || this.translations.en;
    return selectedLanguage[key] || key;
};

// ============================================================
// END OF DATA FILE
// ============================================================