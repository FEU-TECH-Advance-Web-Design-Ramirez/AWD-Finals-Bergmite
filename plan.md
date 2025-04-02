<a name="plan-top">

<br/>

<br />
<div align="center">
  <a href="https://github.com/zyx-0314/">
    <img src="./assets/img/ontrack-logo.png" alt="" width="130" height="100">
  </a>

  <h3 align="center">On Track: Music Lover Website Project Plan</h3>
</div>
<!-- TODO: Make a short description -->
<div align="center">

 

</div>


---

## 1. Persona

Background:
- 25-year-old
- Passionate about music
- Enjoys discovering new artists, attending concerts, and creating playlists.

### 2. App Idea
App Idea:
- A music discovery and social app that curates personalized playlists, concert alerts, and community-driven reviews.


Target Audience
- Music enthusiasts,
- Concert-goers
- Playlist Curators
- Vibes
- Energetic
- Creative
- Immersive

Mission & Vision
- To create a vibrant community where music lovers can discover, share, and celebrate their passion for music in an engaging digital space.

Offerings
- Personalized playlists
- Concert calendars, artist spotlights,
- Social sharing features.

### 3. Project Specification
UX Flow
Home Screen:
- Hero Section: Showcasing the main purpose of the website
- Main Features: Shows the features and functionalities of the website.
- Navigation bar and menu: Quick links to Home, About, Login, and Sign up page

User Authentication:
- Login/Registration: Secure sign-in via Firebase Authentication.
- Welcome/Tutorial: Quick onboarding to highlight app features.

Concerts and Review:
- Add Concerts: Lets users add concerts that wll be approved by the admin
- Add Ratings: LEts users give ratings to concerts.

Admin
- Admin Dashboard: Review and approve new concert addtions and user reviews.
- Notification System: Alert admins when new content is pending.


Layout and Navigation

Navigation Bar and Menu / Bottom Navigation Bar:
- Home: Landing Page or User/Admin dashboard upon logign in
- About: Links to About page that contains the website information and group members.
- Login and Sign up: Links to Login and sign up page
- Footer: addtional information and contacts.

Screen Layouts:
- Home Screen: Card-based layout with hero section, features and brief descriptions.
- Project Detail Screen: Scrollable view with images, text, and interactive review submission.

Design Suggestions
- Color Scheme:
- Bold
- Dynamic colors
- Deep Purple
- Electric Blue
- Black

## 4.ERD
Key Entities:

User
- user_id (Primary Key)
- name
- email
- password_hash
- profile_image_url
- date_joined


Concert
- concert_id (Primary Key)
- user_id (Foreign Key - User)
- title
- description
- image_url
- approved (Boolean)
- timestamp

Review
- review_id (Primary Key)
- concert_id (Foreign Key - DIY_Project)
- user_id (Foreign Key - User)
- rating (Numeric)
- comment
- timestamp


Data Flow

User Authentication & Registration:
- Firebase Authentication is used to create new users or sign in existing ones.
- Dataflow: User credentials → Firebase Auth → Secure session token.Concert Submission:

User Action: Submit new project using the submission form.
Dataflow:
- User inputs (text, images) → Firebase Storage (for images)
- Firebase Firestore (for project details) → approved flag set to false
- Admin reviews and updates approved to true .

Project Display & Review:
Dataflow:
- Firestore retrieves approved DIY projects → Home Screen display.
- User reviews submitted → Stored in Firestore under Review collection → concert detail screen shows cumulative ratings and comments.

Admin Confirmation Workflow:
Dataflow:
- New submissions trigger notifications (using Cloud Functions) → Admin dashboard accesses pending concerts/reviews.
- On approval, admin updates concert's approved flag → Changes reflected in the public display.