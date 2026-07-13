// Instagram Clone JavaScript Logic

// Mock Data
const users = [
    { username: "sarah_travels", name: "Sarah Jenkins", avatar: "https://picsum.photos/200/300" },
    { username: "alex_adventures", name: "Alex Mercer", avatar: "https://picsum.photos/200/300" },
    { username: "emily_design", name: "Emily Watson", avatar: "https://picsum.photos/200/300" },
    { username: "david_clicks", name: "David Miller", avatar: "https://picsum.photos/200/300" },
    { username: "chloe_bakes", name: "Chloe Dupont", avatar: "https://picsum.photos/200/300" },
    { username: "james_fit", name: "James Vance", avatar: "https://picsum.photos/200/300" }
];

const feedPosts = [
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
    { image: "https://picsum.photos/200/300", likes: "1.2k", comments: 45 },
    { image: "https://picsum.photos/200/300", likes: "892", comments: 32 },
    { image: "https://picsum.photos/200/300", likes: "1.5k", comments: 55 },
    { image: "https://picsum.photos/200/300", likes: "2.1k", comments: 78 },
    { image: "https://picsum.photos/200/300", likes: "1.1k", comments: 23 },
    { image: "https://picsum.photos/200/300", likes: "980", comments: 19 },
    { image: "https://picsum.photos/200/300", likes: "3.2k", comments: 110 },
    { image: "https://picsum.photos/200/300", likes: "2.4k", comments: 64 },
    { image: "https://picsum.photos/200/300", likes: "1.7k", comments: 40 }
];

const suggestions = [
    { username: "dev_mindset", reason: "Followed by alex_adventures", avatar: "https://picsum.photos/200/300" },
    { username: "pixel_pioneer", reason: "Suggested for you", avatar: "https://picsum.photos/200/300" },
    { username: "creative_codes", reason: "New to Instagram", avatar: "https://picsum.photos/200/300" }
];

// Initialize DOM elements & events
window.addEventListener("DOMContentLoaded", () => {
    renderStories();
    renderPosts();
    renderSuggestions();
    renderProfileGrid();
    setupNavigation();
    setupCommentHandlers();
});

// Render stories horizontal bar
function renderStories() {
    const container = document.getElementById("stories-scroll-container");
    if (!container) return;

    let html = `
        <div class="story-item">
            <div class="avatar-story-ring" style="background: none; border: 1px solid #dbdbdb; padding:0;">
                <div class="story-avatar-inner" style="border:none;">
                    <img src="https://picsum.photos/200/300" alt="Your Story">
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
                            <span class="post-username">${user.username}</span>
                            <span class="post-location">${post.location}</span>
                        </div>
                    </div>
                    <button class="post-menu-btn"><span class="material-symbols-rounded">more_horiz</span></button>
                </div>

                <!-- Post Media -->
                <div class="post-image-container" data-post-index="${index}">
                    ${mediaHtml}
                    <span class="material-symbols-rounded heart-pop-animation">favorite</span>
                </div>

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
