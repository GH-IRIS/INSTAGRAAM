// Instagram Clone JavaScript Logic

// Mock Data
const users = [
    { username: "sarah_travels", name: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80", verified: false },
    { username: "alex_adventures", name: "Alex Mercer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80", verified: false },
    { username: "emily_design", name: "Emily Watson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80", verified: false },
    { username: "david_clicks", name: "David Miller", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80", verified: false },
    { username: "chloe_bakes", name: "Chloe Dupont", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80", verified: false },
    { username: "james_fit", name: "James Vance", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80", verified: false },
    { username: "jackiechan", name: "Jackie Chan", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80", verified: true },
    { username: "nesan_c_david", name: "Nesan c David", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80", verified: true },
    { username: "coursera", name: "Coursera", avatar: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150&auto=format&fit=crop&q=80", verified: true },
    { username: "patekphilippe", name: "Patek Philippe", avatar: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=150&auto=format&fit=crop&q=80", verified: true },
    { username: "seikowatches", name: "Seiko Watches", avatar: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=150&auto=format&fit=crop&q=80", verified: true },
    { username: "casio_edifice", name: "Casio Edifice", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80", verified: true }
];

const feedPosts = [
    {
        id: "post-jackie",
        userIndex: 6,
        type: "image",
        location: "Original audio",
        image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=600&auto=format&fit=crop&q=80",
        likes: 796200,
        caption: "I've spent my life in front of cameras. No stunt doubles. Real action. No shortcuts. I built my whole career on one... more",
        comments: [
            { username: "40kahani", text: "Absolute legend! Raising the bar forever." },
            { username: "alex_adventures", text: "You are the reason I love action movies!" }
        ],
        time: "2 weeks ago",
        liked: false
    },
    {
        id: "post-nesan",
        userIndex: 7,
        type: "image",
        location: "Original audio",
        image: "https://images.unsplash.com/photo-1585699324551-f6c309eed262?w=600&auto=format&fit=crop&q=80",
        likes: 30300,
        caption: "Indians Are The Best At Giving Directions 🔥 Sh... more",
        comments: [
            { username: "dev_mindset", text: "Hahaha this is so accurate! 'Go straight, then ask anyone' 😂" },
            { username: "sarah_travels", text: "Too funny! I got lost twice last week using Maps." }
        ],
        time: "3 days ago",
        liked: false
    },
    {
        id: "post-coursera",
        userIndex: 8,
        type: "image",
        location: "Sponsored",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
        likes: 6200,
        caption: "In just 10 hours, the Google AI Professional Certificate will teach you the AI skills you need to thrive in today's... more",
        comments: [
            { username: "creative_codes", text: "Just enrolled! Excited to learn." },
            { username: "pixel_pioneer", text: "Is this suitable for beginners?" }
        ],
        time: "1 day ago",
        liked: false,
        sponsored: true,
        ctaText: "Learn more",
        ctaLink: "https://www.coursera.org/professional-certificates/google-ai-essentials"
    },
    {
        id: "post-patek-1",
        userIndex: 9,
        type: "image",
        location: "Geneva, Switzerland",
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&auto=format&fit=crop&q=80",
        likes: 12450,
        caption: "Introducing the Grand Complications Ref. 5304/301R-001 in rose gold. A masterpiece of watchmaking with a transparent dial showing the minute repeater and perpetual calendar. 🕰️✨ #PatekPhilippe #GrandComplications #HauteHorlogerie",
        comments: [
            { username: "girish_codes", text: "The skeleton dial execution is breathtaking!" },
            { username: "emily_design", text: "Pure luxury on the wrist." }
        ],
        time: "4 hours ago",
        liked: false
    },
    {
        id: "post-1",
        userIndex: 0,
        type: "image",
        location: "Yosemite National Park",
        image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop&q=80",
        likes: 1242,
        caption: "Waking up in the middle of giant pines. Nature never fails to amaze me. 🌲🏕️ #explore #nature",
        comments: [
            { username: "alex_adventures", text: "Incredible shot! Need to visit soon." },
            { username: "david_clicks", text: "Light is perfect here." }
        ],
        time: "2 hours ago",
        liked: false
    },
    {
        id: "post-2",
        userIndex: 1,
        type: "image",
        location: "Venice, Italy",
        image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&auto=format&fit=crop&q=80",
        likes: 852,
        caption: "Lost in the canals. Every corner has a story to tell. 🚣‍♂️✨ #travelgram #venice",
        comments: [
            { username: "sarah_travels", text: "My favorite city in Europe!" },
            { username: "emily_design", text: "Colors are outstanding!" }
        ],
        time: "5 hours ago",
        liked: true
    },
    {
        id: "post-seiko-1",
        userIndex: 10,
        type: "image",
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
        likes: 8320,
        caption: "Introducing the Seiko Astron GPS Solar 2026 Limited Edition. Advanced technology meets high-precision titanium engineering. 🌍🛰️ #Seiko #SeikoAstron #GPSSolar #WatchesOfInstagram",
        comments: [
            { username: "david_clicks", text: "The blue dial version is stunning." }
        ],
        time: "8 hours ago",
        liked: false
    },
    {
        id: "post-3",
        userIndex: 2,
        type: "video",
        location: "Jazz Lounge, New York",
        video: "https://assets.mixkit.co/videos/preview/mixkit-spinning-vinyl-record-player-closeup-3183-large.mp4",
        likes: 410,
        caption: "Late night jazz and warm vinyl crackles. Best way to unwind. 🎷📻 #vinyl #jazzmusic #relaxing",
        comments: [
            { username: "chloe_bakes", text: "What record is spinning?" }
        ],
        time: "1 day ago",
        liked: false
    },
    {
        id: "post-4",
        userIndex: 3,
        type: "image",
        location: "Maldives Beach Resort",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
        likes: 2315,
        caption: "Infinite shades of blue. Found my absolute happy place. 🏝️☀️ #islandlife #paradise #travel",
        comments: [
            { username: "alex_adventures", text: "Unreal view, David! Take me with you." },
            { username: "sarah_travels", text: "Omg, the water is crystal clear!" }
        ],
        time: "2 days ago",
        liked: false
    },
    {
        id: "post-casio-1",
        userIndex: 11,
        type: "image",
        location: "Nürburgring, Germany",
        image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&auto=format&fit=crop&q=80",
        likes: 6540,
        caption: "Speed and Intelligence. The Casio Edifice Night Time Edition combines high performance chronographs with bluetooth smartphone link. 🏎️💨 #CasioEdifice #SpeedAndIntelligence #Motorsport #Chronograph",
        comments: [
            { username: "james_fit", text: "Perfect daily beater watch!" }
        ],
        time: "12 hours ago",
        liked: false
    },
    {
        id: "post-5",
        userIndex: 4,
        type: "video",
        location: "Shibuya, Tokyo",
        video: "https://assets.mixkit.co/videos/preview/mixkit-urban-city-traffic-at-night-3129-large.mp4",
        likes: 1948,
        caption: "Tokyo nights in high speed. The neon pulse of Shibuya is unmatched. 🗼🌌 #tokyo #cyberpunk #neon",
        comments: [
            { username: "emily_design", text: "The motion blur of the lights is incredible!" },
            { username: "david_clicks", text: "Brilliant capture. Handheld?" }
        ],
        time: "3 days ago",
        liked: false
    },
    {
        id: "post-6",
        userIndex: 5,
        type: "image",
        location: "Sneaker Lab",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
        likes: 984,
        caption: "Classic red never goes out of style. Clean kicks for a fresh start. 👟🔥 #sneakers #streetwear #redstyle",
        comments: [
            { username: "james_fit", text: "Instant cop! Looks so clean." }
        ],
        time: "4 days ago",
        liked: false
    }
];

const profilePhotos = [
    { image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&auto=format&fit=crop&q=80", likes: "12.4k", comments: 245 },
    { image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80", likes: "8.9k", comments: 132 },
    { image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&auto=format&fit=crop&q=80", likes: "15.1k", comments: 550 },
    { image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&auto=format&fit=crop&q=80", likes: "21.3k", comments: 784 },
    { image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80", likes: "11.2k", comments: 231 },
    { image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=80", likes: "9.8k", comments: 195 },
    { image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600&auto=format&fit=crop&q=80", likes: "32.1k", comments: 1102 },
    { image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80", likes: "24.5k", comments: 641 },
    { image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=600&auto=format&fit=crop&q=80", likes: "17.8k", comments: 409 }
];


const suggestions = [
    { username: "dev_mindset", reason: "Followed by alex_adventures", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80" },
    { username: "pixel_pioneer", reason: "Suggested for you", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80" },
    { username: "creative_codes", reason: "New to Instagram", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80" }
];

// Initialize DOM elements & events
if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

function initApp() {
    renderStories();
    renderPosts();
    renderSuggestions();
    renderProfileGrid();
    setupNavigation();
    setupCommentHandlers();
}

// Render stories horizontal bar
function renderStories() {
    const container = document.getElementById("stories-scroll-container");
    if (!container) return;

    let html = `
        <div class="story-item">
            <div class="avatar-story-ring" style="background: none; border: 1px solid #dbdbdb; padding:0;">
                <div class="story-avatar-inner" style="border:none;">
                    <img src="assets/girish_avatar.png" alt="Your Story">
                </div>
            </div>
            <span class="story-username" style="color: #8e8e8e">Your Story</span>
        </div>
    `;

    html += users.map(user => `
        <div class="story-item">
            <div class="avatar-story-ring">
                <div class="story-avatar-inner">
                    <img src="${user.avatar}" alt="${user.username}">
                </div>
            </div>
            <span class="story-username">${user.username}</span>
        </div>
    `).join('');

    container.innerHTML = html;
}

// Render Main Feed Posts
function renderPosts() {
    const container = document.getElementById("posts-container");
    if (!container) return;

    container.innerHTML = feedPosts.map((post, index) => {
        const user = users[post.userIndex];
        const commentsHtml = post.comments.map(comment => `
            <p class="caption-line">
                <span class="text-bold">${comment.username}</span> ${comment.text}
            </p>
        `).join('');

        // Media Element: Image or Video
        let mediaHtml = "";
        if (post.type === "video") {
            mediaHtml = `
                <video src="${post.video}" class="post-img post-video" loop muted autoplay playsinline></video>
            `;
        } else {
            mediaHtml = `
                <img src="${post.image}" alt="Post image" class="post-img">
            `;
        }

        // Verified Badge HTML
        const verifiedHtml = user.verified ? `
            <span class="verified-badge" title="Verified">
                <svg viewBox="0 0 86 86" fill="#0095f6" style="width: 14px; height: 14px; vertical-align: middle; margin-left: 4px;">
                    <path d="M85.748 45.452l-9.083-9.522 1.258-13.111a4.238 4.238 0 0 0-3.328-4.545l-12.898-2.694-6.837-11.251a4.239 4.239 0 0 0-5.836-1.564L37.337 9.176l-12.164-5.26a4.23 4.23 0 0 0-5.617 2.23l-5.187 12.196-12.923 2.569a4.237 4.237 0 0 0-3.298 4.567l1.328 13.104-9.026 9.576a4.238 4.238 0 0 0 0 5.795l9.026 9.576-1.328 13.104a4.237 4.237 0 0 0 3.298 4.567l12.923 2.569 5.187 12.196a4.23 4.23 0 0 0 5.617 2.23l12.164-5.26 11.687 6.411a4.238 4.238 0 0 0 5.836-1.564l6.837-11.251 12.898-2.694a4.238 4.238 0 0 0 3.328-4.545l-1.258-13.111 9.083-9.522a4.238 4.238 0 0 0 0-5.795zm-47.53 14.516l-13.37-13.37 5.195-5.195 8.175 8.175 19.387-19.387 5.195 5.195-24.582 24.582z"></path>
                </svg>
            </span>
        ` : '';

        // Sponsored CTA Banner HTML
        const ctaHtml = post.sponsored && post.ctaText ? `
            <div class="post-cta-bar" onclick="window.open('${post.ctaLink || '#'}', '_blank')">
                <span>${post.ctaText}</span>
                <span class="material-symbols-rounded">chevron_right</span>
            </div>
        ` : '';

        const isSponsored = post.location.toLowerCase() === 'sponsored';
        const locationClass = isSponsored ? 'post-location sponsored-label' : 'post-location';

        return `
            <article class="post-card" id="post-${post.id}">
                <!-- Header -->
                <div class="post-header">
                    <div class="post-user-info">
                        <div class="post-avatar-ring">
                            <div class="post-avatar-inner">
                                <img src="${user.avatar}" alt="${user.username}">
                            </div>
                        </div>
                        <div class="post-meta-details">
                            <span class="post-username">${user.username}${verifiedHtml}</span>
                            <span class="${locationClass}">${post.location}</span>
                        </div>
                    </div>
                    <button class="post-menu-btn"><span class="material-symbols-rounded">more_horiz</span></button>
                </div>

                <!-- Post Media -->
                <div class="post-image-container" data-post-index="${index}">
                    ${mediaHtml}
                    <span class="material-symbols-rounded heart-pop-animation">favorite</span>
                </div>
                ${ctaHtml}

                <!-- Action Toolbar -->
                <div class="post-actions-row">
                    <div class="actions-left">
                        <button class="action-icon-btn like-toggle-btn ${post.liked ? 'liked-active' : ''}" data-post-index="${index}">
                            <span class="material-symbols-rounded">${post.liked ? 'favorite' : 'favorite'}</span>
                        </button>
                        <button class="action-icon-btn"><span class="material-symbols-rounded">chat_bubble</span></button>
                        <button class="action-icon-btn"><span class="material-symbols-rounded">send</span></button>
                    </div>
                    <button class="action-icon-btn"><span class="material-symbols-rounded">bookmark</span></button>
                </div>

                <!-- Text & Comments Details -->
                <div class="post-text-details">
                    <span class="likes-label" id="likes-count-${index}">${post.likes.toLocaleString()} likes</span>
                    <p class="caption-line">
                        <span class="text-bold">${user.username}</span> ${post.caption}
                    </p>
                    <div class="comments-preview-list" id="comments-list-${index}">
                        ${commentsHtml}
                    </div>
                    <span class="view-comments-link">View all ${post.comments.length + 3} comments</span>
                    <span class="time-stamp">${post.time}</span>
                </div>

                <!-- Comment Input box -->
                <div class="comment-input-box">
                    <button class="emoji-btn"><span class="material-symbols-rounded">sentiment_satisfied</span></button>
                    <input type="text" placeholder="Add a comment..." class="comment-input" data-post-index="${index}">
                    <button class="post-comment-btn" id="comment-post-btn-${index}">Post</button>
                </div>
            </article>
        `;
    }).join('');

    setupPostLikes();
}

// Setup double click & button likes
function setupPostLikes() {
    // 1. Double click image
    document.querySelectorAll(".post-image-container").forEach(container => {
        container.addEventListener("dblclick", (e) => {
            const index = parseInt(container.getAttribute("data-post-index"));
            const heartPop = container.querySelector(".heart-pop-animation");
            
            // Play popup animation
            heartPop.classList.add("pop");
            setTimeout(() => {
                heartPop.classList.remove("pop");
            }, 800);

            // Register like
            const post = feedPosts[index];
            if (!post.liked) {
                post.liked = true;
                post.likes += 1;
                updateLikeUI(index);
            }
        });
    });

    // 2. Click button
    document.querySelectorAll(".like-toggle-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = parseInt(btn.getAttribute("data-post-index"));
            const post = feedPosts[index];
            post.liked = !post.liked;
            post.likes = post.liked ? post.likes + 1 : post.likes - 1;
            updateLikeUI(index);
        });
    });
}

function updateLikeUI(index) {
    const post = feedPosts[index];
    const card = document.getElementById(`post-${post.id}`);
    if (!card) return;

    // Toggle button state
    const btn = card.querySelector(".like-toggle-btn");
    if (post.liked) {
        btn.classList.add("liked-active");
    } else {
        btn.classList.remove("liked-active");
    }

    // Update count label
    const countLabel = document.getElementById(`likes-count-${index}`);
    if (countLabel) {
        countLabel.textContent = `${post.likes.toLocaleString()} likes`;
    }
}

// Render Suggestions List
function renderSuggestions() {
    const container = document.getElementById("suggestions-container");
    if (!container) return;

    container.innerHTML = suggestions.map(s => `
        <div class="suggestion-item">
            <img src="${s.avatar}" alt="${s.username}">
            <div class="suggested-meta">
                <span class="username">${s.username}</span>
                <span class="reason">${s.reason}</span>
            </div>
            <button class="action-blue-btn">Follow</button>
        </div>
    `).join('');
}

// Render Profile square photo grid
function renderProfileGrid() {
    const container = document.getElementById("profile-grid-container");
    if (!container) return;

    container.innerHTML = profilePhotos.map(photo => `
        <div class="grid-photo-cell">
            <img src="${photo.image}" alt="Profile post photo">
            <!-- Overlay with statistics -->
            <div class="photo-hover-overlay">
                <div class="overlay-stat">
                    <span class="material-symbols-rounded" style="font-variation-settings: 'FILL' 1;">favorite</span>
                    ${photo.likes}
                </div>
                <div class="overlay-stat">
                    <span class="material-symbols-rounded" style="font-variation-settings: 'FILL' 1;">chat_bubble</span>
                    ${photo.comments}
                </div>
            </div>
        </div>
    `).join('');
}

// Switch between Feed and Profile Views
function setupNavigation() {
    const feedLink = document.getElementById("nav-feed");
    const profileLink = document.getElementById("nav-profile");
    const logoHome = document.getElementById("nav-logo-home");

    const feedView = document.getElementById("feed-view");
    const profileView = document.getElementById("profile-view");

    function showFeed() {
        feedView.classList.remove("hidden");
        profileView.classList.add("hidden");
        feedLink.classList.add("active");
        profileLink.classList.remove("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function showProfile() {
        feedView.classList.add("hidden");
        profileView.classList.remove("hidden");
        feedLink.classList.remove("active");
        profileLink.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    feedLink.addEventListener("click", (e) => {
        e.preventDefault();
        showFeed();
    });

    logoHome.addEventListener("click", (e) => {
        e.preventDefault();
        showFeed();
    });

    profileLink.addEventListener("click", (e) => {
        e.preventDefault();
        showProfile();
    });
}

// Comment Additions logic
function setupCommentHandlers() {
    document.addEventListener("input", (e) => {
        if (e.target.classList.contains("comment-input")) {
            const index = e.target.getAttribute("data-post-index");
            const btn = document.getElementById(`comment-post-btn-${index}`);
            if (btn) {
                if (e.target.value.trim().length > 0) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
            }
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("post-comment-btn")) {
            const index = parseInt(e.target.id.replace("comment-post-btn-", ""));
            const input = document.querySelector(`.comment-input[data-post-index="${index}"]`);
            if (input && input.value.trim().length > 0) {
                const text = input.value.trim();
                const post = feedPosts[index];
                
                // Add to mock data
                post.comments.push({ username: "girish_codes", text: text });
                
                // Render new comment
                const commentsList = document.getElementById(`comments-list-${index}`);
                if (commentsList) {
                    const newCommentElement = document.createElement("p");
                    newCommentElement.className = "caption-line";
                    newCommentElement.innerHTML = `<span class="text-bold">girish_codes</span> ${text}`;
                    commentsList.appendChild(newCommentElement);
                }

                // Reset field
                input.value = "";
                e.target.classList.remove("active");
            }
        }
    });

    // Support enter key submission
    document.addEventListener("keydown", (e) => {
        if (e.target.classList.contains("comment-input") && e.key === "Enter") {
            const index = parseInt(e.target.getAttribute("data-post-index"));
            const btn = document.getElementById(`comment-post-btn-${index}`);
            if (btn) btn.click();
        }
    });
}
