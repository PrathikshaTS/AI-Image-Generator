# AI Image Generation

A full-stack MERN project that allows users to generate images using AI. Users can upload prompts or images via the frontend, and the backend processes the requests using an AI model or API.

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

