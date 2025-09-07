# AI Image Generation

 • A web application that allows users to generate AI images based on custom prompts or a “Surprise
 Me” feature.
 
 • Built a community section where users can browse, search, and download images shared by others.

---

## Features

- Upload images or prompts through the client interface
- AI-based image generation or modification
- Display generated images in the client
- Fully functional MERN stack architecture
- Secure handling of API keys via `.env` files

---

## Tech Stack

- **Frontend:** React.js,tailwind css
- **Backend:** Node.js, Express.js  
-  **Cloud Storage:** Cloudinary
-  **DataBase:** MongoDB
- **AI Integration:** Rapid API 
- **Version Control:** Git, GitHub

---

## Project Structure

ai_image_generation/

├─ client/       # React frontend

├─ server/       # Node.js backend

├─ .gitignore    # To ignore node_modules, .env, etc.

└─ README.md     # Project documentation

## Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/<your-username>/AI-Image-Generator.git
cd AI-Image-Generator

2. **Install dependencies**
cd client
npm install
cd ../server
npm install

3. **Add `.env` files**

Create `.env` files in both `client` and `server` folders with the required keys.  
**Do not push these files to GitHub.**  

Example of `server/.env`:
```env
MONGODB_URL=your_mongodb_connection_string
RAPIDAPI_KEY=your_rapidapi_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4. **Run the project**
cd client
npm dev

# Start backend
cd ../server
npm run start

