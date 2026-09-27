/* =================================
   OPPORTUNITY DATA
================================= */

const opportunities = [

    /* =========================
       INTERNSHIPS - COMPANY
       ========================= */

    {
        id: 1,
        title: "Microsoft University Internships",
        company: "Microsoft",
        type: "Internship",
        mode: "Various",
        duration: "Various",
        deadline: "Check current openings",
        skills: ["Software Engineering", "AI", "Cloud", "Data Science"],
        description: "Explore Microsoft's university internship programs and student opportunities.",
        link: "https://careers.microsoft.com/v2/global/en/universityinternship"
    },

    {
        id: 2,
        title: "Google Student & Graduate Opportunities",
        company: "Google",
        type: "Internship",
        mode: "Various",
        duration: "Various",
        deadline: "Check current openings",
        skills: ["Software Engineering", "AI", "Cloud", "Data"],
        description: "Explore internships and early-career opportunities at Google.",
        link: "https://www.google.com/about/careers/applications/"
    },

    {
        id: 3,
        title: "Amazon Student Internships",
        company: "Amazon",
        type: "Internship",
        mode: "Various",
        duration: "Various",
        deadline: "Check current openings",
        skills: ["Software Development", "AWS", "Data", "Cloud"],
        description: "Explore internships and university opportunities at Amazon.",
        link: "https://www.amazon.jobs/teams/internships-for-students"
    },

    {
        id: 4,
        title: "IBM Internships",
        company: "IBM",
        type: "Internship",
        mode: "Various",
        duration: "Various",
        deadline: "Check current openings",
        skills: ["AI", "Cloud", "Software", "Data"],
        description: "Explore official IBM internship opportunities for students.",
        link: "https://www.ibm.com/careers/internships"
    },

    {
        id: 5,
        title: "Adobe University Internships",
        company: "Adobe",
        type: "Internship",
        mode: "Various",
        duration: "Various",
        deadline: "Check current openings",
        skills: ["Software", "AI", "Design", "Engineering"],
        description: "Explore Adobe internships and university graduate opportunities.",
        link: "https://careers.adobe.com/us/en/intern-and-graduate"
    },

    {
        id: 6,
        title: "NVIDIA University Internships",
        company: "NVIDIA",
        type: "Internship",
        mode: "Various",
        duration: "12+ Weeks",
        deadline: "Check current openings",
        skills: ["AI", "Machine Learning", "Deep Learning", "Software"],
        description: "Explore internship opportunities for students at NVIDIA.",
        link: "https://www.nvidia.com/en-in/about-nvidia/university-recruiting/"
    },

    {
        id: 7,
        title: "Oracle Technical Internships",
        company: "Oracle",
        type: "Internship",
        mode: "Various",
        duration: "Various",
        deadline: "Check current openings",
        skills: ["Java", "Cloud", "AI", "Software Engineering"],
        description: "Explore Oracle's technical and student internship programs.",
        link: "https://www.oracle.com/careers/students-grads/internships/"
    },


    /* =========================
       INTERNSHIP PLATFORMS
       ========================= */

    {
        id: 8,
        title: "Internship Opportunities",
        company: "Internshala",
        type: "Internship",
        mode: "Remote / On-site",
        duration: "Various",
        deadline: "Various",
        skills: ["Python", "Java", "Web Development", "Data Science"],
        description: "Find internships across technology, engineering, business and other fields.",
        link: "https://internshala.com/internships/"
    },

    {
        id: 9,
        title: "National Internship Portal",
        company: "AICTE",
        type: "Internship",
        mode: "Online / Hybrid",
        duration: "Various",
        deadline: "Various",
        skills: ["Engineering", "Technology", "AI", "Web Development"],
        description: "Explore internship opportunities through the official AICTE internship portal.",
        link: "https://internship.aicte-india.org/"
    },


    /* =========================
       SCHOLARSHIPS
       ========================= */

    {
        id: 10,
        title: "National Scholarship Portal",
        company: "Government of India",
        type: "Scholarship",
        mode: "Online",
        duration: "Academic Year",
        deadline: "Depends on scheme",
        skills: ["Scholarship", "Education", "Students"],
        description: "Find and apply for government scholarship schemes through the official National Scholarship Portal.",
        link: "https://scholarships.gov.in/"
    },

    {
        id: 11,
        title: "AICTE Pragati Scholarship",
        company: "AICTE",
        type: "Scholarship",
        mode: "Online",
        duration: "Academic Year",
        deadline: "31 October 2026",
        skills: ["Engineering", "Technical Education", "Scholarship"],
        description: "Explore the AICTE Pragati Scholarship Scheme for eligible girl students pursuing technical education.",
        link: "https://scholarships.gov.in/All-Scholarships"
    },

    {
        id: 12,
        title: "AICTE Swanath Scholarship",
        company: "AICTE",
        type: "Scholarship",
        mode: "Online",
        duration: "Academic Year",
        deadline: "31 October 2026",
        skills: ["Engineering", "Technical Education", "Scholarship"],
        description: "Explore the AICTE Swanath Scholarship Scheme for eligible technical-degree students.",
        link: "https://scholarships.gov.in/All-Scholarships"
    },

    {
        id: 13,
        title: "PM-USP Central Sector Scholarship",
        company: "Government of India",
        type: "Scholarship",
        mode: "Online",
        duration: "Academic Year",
        deadline: "Check portal",
        skills: ["Higher Education", "Scholarship", "Students"],
        description: "Explore the Central Sector Scholarship Scheme for college and university students.",
        link: "https://scholarships.gov.in/All-Scholarships"
    },


    /* =========================
       COURSES
       ========================= */

    {
        id: 14,
        title: "NPTEL Online Courses",
        company: "IITs & IISc",
        type: "Course",
        mode: "Online",
        duration: "4 / 8 / 12 Weeks",
        deadline: "Various",
        skills: ["Programming", "Computer Science", "Engineering", "AI"],
        description: "Learn from IITs and IISc through NPTEL online courses.",
        link: "https://nptel.ac.in/"
    },

    {
        id: 15,
        title: "SWAYAM Courses",
        company: "Government of India",
        type: "Course",
        mode: "Online",
        duration: "Various",
        deadline: "Various",
        skills: ["Engineering", "Programming", "Technology", "Management"],
        description: "Explore online courses offered through India's SWAYAM learning platform.",
        link: "https://www.swayam.gov.in/"
    },

    {
        id: 16,
        title: "Microsoft Learn",
        company: "Microsoft",
        type: "Course",
        mode: "Online",
        duration: "Self-paced",
        deadline: "Open",
        skills: ["Azure", "AI", "Cloud", ".NET"],
        description: "Learn Microsoft technologies through interactive learning paths and modules.",
        link: "https://learn.microsoft.com/en-us/training/"
    },

    {
        id: 17,
        title: "Google Cloud Skills",
        company: "Google Cloud",
        type: "Course",
        mode: "Online",
        duration: "Self-paced",
        deadline: "Various",
        skills: ["Cloud", "AI", "Machine Learning", "Google Cloud"],
        description: "Build cloud and AI skills through Google Cloud learning resources and hands-on labs.",
        link: "https://cloud.google.com/learn/training"
    },

    {
        id: 18,
        title: "freeCodeCamp",
        company: "freeCodeCamp",
        type: "Course",
        mode: "Online",
        duration: "Self-paced",
        deadline: "Open",
        skills: ["HTML", "CSS", "JavaScript", "Python", "Web Development"],
        description: "Learn programming and web development through interactive lessons and projects.",
        link: "https://www.freecodecamp.org/learn/"
    },


    /* =========================
       HACKATHONS & COMPETITIONS
       ========================= */

    {
        id: 19,
        title: "Student Hackathons",
        company: "Unstop",
        type: "Hackathon",
        mode: "Online / Offline",
        duration: "Various",
        deadline: "Various",
        skills: ["Coding", "AI", "Web Development", "Innovation"],
        description: "Discover hackathons and student competitions from different organizations.",
        link: "https://unstop.com/hackathons"
    },

    {
        id: 20,
        title: "Microsoft Imagine Cup",
        company: "Microsoft",
        type: "Competition",
        mode: "Online",
        duration: "Various",
        deadline: "Check current competition",
        skills: ["AI", "Software", "Innovation", "Entrepreneurship"],
        description: "Explore Microsoft's global technology competition for student founders.",
        link: "https://imaginecup.microsoft.com/"
    },

    {
    id: 21,
    title: "Hack-A-Throne National Hackathon 2026",
    company: "Hack-A-Throne",
    type: "Hackathon",
    mode: "Online",
    duration: "Various",
    deadline: "14 October 2026",
    skills: ["AI", "FinTech", "HealthTech", "EdTech", "Sustainability"],
    description: "National hackathon for students, developers, designers and innovators to build technology solutions for real-world problems.",
    link: "https://api.unstop.com/hackathons/hack-a-throne-national-hackathon-2026-hack-a-throne-1759760"
},

{
    id: 22,
    title: "Hack-O-Octo 4.0",
    company: "GDG Chandigarh University",
    type: "Hackathon",
    mode: "Offline",
    duration: "24 Hours",
    deadline: "30 September 2026",
    skills: ["Coding", "AI", "Web Development", "Innovation"],
    description: "A 24-hour coding hackathon for university students to solve real-world challenges.",
    link: "https://api.unstop.com/hackathons/hack-o-octo-40-chandigarh-university-cu-ajitgarh-punjab-1747159"
},

{
    id: 23,
    title: "HackMatrix 5.0",
    company: "PCCOE",
    type: "Hackathon",
    mode: "Offline",
    duration: "24 Hours",
    deadline: "Check registration status",
    skills: ["AI", "Machine Learning", "Software Development"],
    description: "Student hackathon with a 24-hour offline build round at Pimpri Chinchwad College of Engineering, Pune.",
    link: "https://api.unstop.com/hackathons/hackmatrix-50-pccoes-gfg-student-chapter-1750988"
},

{
    id: 24,
    title: "36-Hour Hackathon",
    company: "GL Bajaj Institute of Technology",
    type: "Hackathon",
    mode: "Offline",
    duration: "36 Hours",
    deadline: "4 October 2026",
    skills: ["Coding", "AI", "Software", "Innovation"],
    description: "A multi-round student hackathon including an offline 36-hour build round.",
    link: "https://unstop.com/hackathons/36-hour-hackathon-vibrant-2k26-gl-bajaj-institute-of-technology-and-management-delhi-ncr-uttar-pradesh-1755057"
},

{
    id: 25,
    title: "Hacks 2026",
    company: "Nari Nexus",
    type: "Hackathon",
    mode: "Online + Offline",
    duration: "24 Hours",
    deadline: "25 October 2026",
    skills: ["Software Development", "AI", "Innovation"],
    description: "Online idea submission followed by an offline 24-hour hackathon for shortlisted teams.",
    link: "https://unstop.com/o/1759592"
},

{
    id: 26,
    title: "Grevix AfterCode",
    company: "Grevix",
    type: "Hackathon",
    mode: "Online",
    duration: "24 Hours",
    deadline: "10 October 2026",
    skills: ["AI", "Web Development", "Software", "Problem Solving"],
    description: "A 24-hour online solo hackathon where participants build and adapt their solution through multiple challenge phases.",
    link: "https://api.unstop.com/hackathons/grevix-aftercode-grevix-1755080"
}

];
            


/* =================================
   HOME SEARCH
================================= */

function homeSearch() {

    const input = document.getElementById("homeSearch");

    if (!input) return;

    const query = input.value.trim();

    if (query === "") {

        window.location.href = "opportunities.html";

    } else {

        window.location.href =
            "opportunities.html?search=" +
            encodeURIComponent(query);

    }

}


/* =================================
   CATEGORY FILTER
================================= */

function filterCategory(category) {

    window.location.href =
        "opportunities.html?category=" +
        encodeURIComponent(category);

}


/* =================================
   DISPLAY OPPORTUNITIES
================================= */

function displayOpportunities(list) {

    const container = document.getElementById("opportunityList");

    if (!container) return;

    container.innerHTML = "";


    if (list.length === 0) {

        container.innerHTML = `

            <div class="col-12">

                <div class="empty-state">

                    <i class="bi bi-search"></i>

                    <h4>No opportunities found</h4>

                    <p>
                        Try another keyword or category.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    list.forEach(item => {

        container.innerHTML += `

            <div class="col-md-6 col-lg-4">

                <div class="opportunity-card">

                    <div class="card-top">

                        <span class="type-badge ${item.type.toLowerCase()}">
                            ${item.type}
                        </span>

                        <button
                            class="bookmark-btn"
                            onclick="bookmarkOpportunity(${item.id})"
                        >
                            <i class="bi bi-bookmark"></i>
                        </button>

                    </div>

                    <h4>${item.title}</h4>

                    <p class="company">
                        <i class="bi bi-building"></i>
                        ${item.company}
                    </p>

                    <div class="card-info">

                        <span>
                            <i class="bi bi-geo-alt"></i>
                            ${item.mode}
                        </span>

                        <span>
                            <i class="bi bi-calendar"></i>
                            ${item.deadline}
                        </span>

                    </div>

                    <div class="skills">

                        ${item.skills.map(skill =>
                            `<span>${skill}</span>`
                        ).join("")}

                    </div>

                    <a
                        href="details.html?id=${item.id}"
                        class="details-btn"
                    >
                        View Details
                        <i class="bi bi-arrow-right"></i>
                    </a>

                </div>

            </div>

        `;

    });

}


/* =================================
   SEARCH OPPORTUNITIES
================================= */

function searchOpportunities() {

    const searchInput =
        document.getElementById("searchInput");

    const category =
        document.getElementById("categoryFilter");

    const mode =
        document.getElementById("modeFilter");


    if (!searchInput) return;


    const search =
        searchInput.value.toLowerCase();

    const categoryValue =
        category.value;

    const modeValue =
        mode.value;


    const filtered =
        opportunities.filter(item => {

            const matchesSearch =
                item.title.toLowerCase().includes(search) ||
                item.company.toLowerCase().includes(search) ||
                item.skills.join(" ").toLowerCase().includes(search);


            const matchesCategory =
                categoryValue === "All" ||
                item.type === categoryValue;


            const matchesMode =
                modeValue === "All" ||
                item.mode === modeValue;


            return (
                matchesSearch &&
                matchesCategory &&
                matchesMode
            );

        });


    displayOpportunities(filtered);

}


/* =================================
   FILTER OPPORTUNITIES
================================= */

function filterOpportunities() {
    searchOpportunities();
}


/* =================================
   BOOKMARK
================================= */

function bookmarkOpportunity(id) {

    let saved =
        JSON.parse(localStorage.getItem("savedOpportunities")) || [];


    if (saved.includes(id)) {

        saved = saved.filter(item => item !== id);

        alert("Removed from bookmarks.");

    } else {

        saved.push(id);

        alert("Opportunity saved!");

    }


    localStorage.setItem(
        "savedOpportunities",
        JSON.stringify(saved)
    );

}


/* =================================
   LOAD OPPORTUNITY DETAILS
================================= */

function loadDetails() {

    const container =
        document.getElementById("detailsContainer");

    if (!container) return;


    const params =
        new URLSearchParams(window.location.search);

    const id =
        Number(params.get("id"));


    const opportunity =
        opportunities.find(item => item.id === id);


    if (!opportunity) {

        container.innerHTML = `

            <div class="empty-state">

                <h3>Opportunity not found</h3>

                <a href="opportunities.html"
                   class="btn btn-primary">
                    Explore Opportunities
                </a>

            </div>

        `;

        return;

    }


    container.innerHTML = `

        <div class="details-card">

            <span class="type-badge ${opportunity.type.toLowerCase()}">
                ${opportunity.type}
            </span>

            <h1>${opportunity.title}</h1>

            <p class="details-company">
                <i class="bi bi-building"></i>
                ${opportunity.company}
            </p>


            <div class="detail-grid">

                <div class="detail-item">

                    <span>Mode</span>

                    <strong>
                        ${opportunity.mode}
                    </strong>

                </div>


                <div class="detail-item">

                    <span>Duration</span>

                    <strong>
                        ${opportunity.duration}
                    </strong>

                </div>


                <div class="detail-item">

                    <span>Deadline</span>

                    <strong>
                        ${opportunity.deadline}
                    </strong>

                </div>

            </div>


            <h4>About this opportunity</h4>

            <p class="mt-3 text-secondary">
                ${opportunity.description}
            </p>


            <h4 class="mt-4">Skills</h4>

            <div class="skills mt-3">

                ${opportunity.skills.map(skill =>
                    `<span>${skill}</span>`
                ).join("")}

            </div>


            <div class="mt-4">

                <a
                    href="${opportunity.link}"
                    target="_blank"
                    class="btn btn-primary me-2"
                >
                    Visit Opportunity
                    <i class="bi bi-box-arrow-up-right"></i>
                </a>


                <button
                    class="btn btn-outline-primary"
                    onclick="bookmarkOpportunity(${opportunity.id})"
                >
                    <i class="bi bi-bookmark"></i>
                    Save
                </button>

            </div>

        </div>

    `;

}


/* =================================
   PROFILE
================================= */

function saveProfile(event) {

    event.preventDefault();


    const name =
        document.getElementById("profileName").value;

    const email =
        document.getElementById("profileEmail").value;

    const education =
        document.getElementById("education").value;

    const year =
        document.getElementById("year").value;

    const skills =
        document.getElementById("skills").value;


    const interests =
        [...document.querySelectorAll(
            ".interest-item input:checked"
        )]
        .map(input => input.value);


    const profile = {

        name,
        email,
        education,
        year,
        skills,
        interests

    };


    localStorage.setItem(
        "studentProfile",
        JSON.stringify(profile)
    );


    alert("Profile saved successfully!");


    window.location.href = "dashboard.html";

}


/* =================================
   LOAD PROFILE
================================= */

function loadProfile() {

    const profile =
        JSON.parse(
            localStorage.getItem("studentProfile")
        );


    if (!profile) return;


    const name =
        document.getElementById("profileName");

    const email =
        document.getElementById("profileEmail");

    const education =
        document.getElementById("education");

    const year =
        document.getElementById("year");

    const skills =
        document.getElementById("skills");


    if (name) name.value = profile.name || "";

    if (email) email.value = profile.email || "";

    if (education) education.value = profile.education || "";

    if (year) year.value = profile.year || "";

    if (skills) skills.value = profile.skills || "";


    if (profile.interests) {

        document
            .querySelectorAll(".interest-item input")
            .forEach(input => {

                input.checked =
                    profile.interests.includes(input.value);

            });

    }

}


/* =================================
   DASHBOARD
================================= */

function loadDashboard() {

    const profile =
        JSON.parse(
            localStorage.getItem("studentProfile")
        );


    const greeting =
        document.getElementById("dashboardGreeting");


    const status =
        document.getElementById("profileStatus");


    if (profile && greeting) {

        greeting.innerText =
            `Welcome back, ${profile.name}!`;

    }


    if (profile && status) {

        status.innerText = "Complete";

    }


    /* Recommendations */

    const recommended =
        document.getElementById("recommendedList");


    if (recommended) {

        let list = opportunities.slice(0, 3);


        if (profile && profile.interests) {

            const matched =
                opportunities.filter(item =>
                    profile.interests.includes(item.type)
                );


            if (matched.length > 0) {

                list = matched.slice(0, 3);

            }

        }


        recommended.innerHTML = "";


        list.forEach(item => {

            recommended.innerHTML += `

                <div class="col-md-4">

                    <div class="opportunity-card">

                        <span class="type-badge ${item.type.toLowerCase()}">
                            ${item.type}
                        </span>

                        <h4 class="mt-3">
                            ${item.title}
                        </h4>

                        <p class="company">
                            ${item.company}
                        </p>

                        <a
                            href="details.html?id=${item.id}"
                            class="details-btn"
                        >
                            View Details
                            <i class="bi bi-arrow-right"></i>
                        </a>

                    </div>

                </div>

            `;

        });

    }


    /* Saved opportunities */

    const savedList =
        document.getElementById("savedList");


    const count =
        document.getElementById("bookmarkCount");


    const saved =
        JSON.parse(
            localStorage.getItem("savedOpportunities")
        ) || [];


    if (count) {

        count.innerText = saved.length;

    }


    if (savedList && saved.length > 0) {

        savedList.innerHTML = "";

        saved.forEach(id => {

            const item =
                opportunities.find(
                    opportunity => opportunity.id === id
                );


            if (!item) return;


            savedList.innerHTML += `

                <div class="saved-item">

                    <strong>
                        ${item.title}
                    </strong>

                    <span>
                        ${item.type} • ${item.company}
                    </span>

                    <a href="details.html?id=${item.id}">
                        View
                    </a>

                </div>

            `;

        });

    }

}


/* =================================
   URL FILTERS
================================= */

function applyUrlFilters() {

    const params =
        new URLSearchParams(window.location.search);


    const search =
        params.get("search");

    const category =
        params.get("category");


    const searchInput =
        document.getElementById("searchInput");


    const categoryFilter =
        document.getElementById("categoryFilter");


    if (search && searchInput) {

        searchInput.value = search;

    }


    if (category && categoryFilter) {

        categoryFilter.value = category;

    }


    if (search || category) {

        searchOpportunities();

    } else {

        displayOpportunities(opportunities);

    }

}


/* =================================
   PAGE INITIALIZATION
================================= */

document.addEventListener("DOMContentLoaded", function () {

    applyUrlFilters();

    loadDetails();

    loadProfile();

    loadDashboard();

});