# Instagram Clone - Premium Web UI

A pixel-perfect UI clone of Instagram's web layout built with HTML5, Vanilla CSS, and JavaScript.

## 📸 Features Shipped

1. **Persistent Sidebar Navigation**:
   - Matches Instagram Web's responsive sidebar.
   - Includes Instagram text logo which collapses to the glyph icon on tablet/mobile screens.
   - Fully active navigation item status (Home, Search, Explore, Messages, Profile, etc.).

2. **Main Feed view**:
   - **Horizontal Stories Bar**: Scrollable profile stories with Instagram's signature pink-purple-orange gradient borders.
   - **Post Cards**: Layout with user headers, location tags, action button trays, like counters, captions, preview comment threads, and timestamps.
   - **Right Suggestions Column**: Contains suggestions, user switch action, and metadata (automatically hides on tablet/mobile sizes to prevent clipping).

3. **Profile page view**:
   - Header with details: user avatar with story ring, statistics (Posts, Followers, Following count), verified name, verified category, bio descriptions, and custom web links.
   - Highlights tray: customizable story highlights.
   - **3-Column Photo Grid**: Displays 9 square posts. Hovering over a post shows a translucent overlay detailing Likes & Comments.

4. **Animations & Interactivity**:
   - **Double-click Image to Like**: Double-clicking a post image displays a giant white heart overlay pop-up animation in the center of the image, updating the like count and coloring the heart red.
   - **Button Likes**: Toggling likes directly from the heart icon updates the count dynamically.
   - **Working Comment Section**: Post new comments dynamically under feed posts. Text triggers a blue "Post" button and adds comments immediately.
   - **View Switcher**: Click on "Home" or the Logo to view the feed, and "Profile" to view your personal wall.

## 🛠️ Built With
- **HTML5**: Semantic tags (`article`, `aside`, `main`, `header`, `nav`).
- **Vanilla CSS**: Custom styling variables, custom interactive elements, CSS animations (`@keyframes`), flexbox, and grid layouts.
- **JavaScript (ES6)**: State management, event listeners, double click triggers, dynamic list generators, and view swappers.
