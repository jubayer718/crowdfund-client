# 🌍 Crowdfund Hub  
![Image](https://github.com/user-attachments/assets/ee414fd8-2ffb-4ca1-a740-b0a99e7c2556)
## 📌 About  
**Crowdfund Hub** is a **crowdfunding platform** designed to help individuals, startups, and communities **raise funds** for their ideas. Users can:  
- **Create and manage campaigns**  
- **Contribute to causes they support**  
- **Track campaign progress in real time**  
- **Experience a seamless and user-friendly interface**  

## 📑 Table of Contents  
- [Features](#-features)  
- [Installation](#-installation)  
- [Environment Variables](#-environment-variables)  
- [Usage](#-usage)  
- [Dependencies](#-dependencies)  
- [Configuration](#-configuration)  
- [Contributing](#-contributing)  
- [License](#-license)  

## ✨ Features  
✔️ **Create Fundraising Campaigns** – Launch a campaign in minutes  
✔️ **Contribute to Causes** – Support ideas you believe in  
✔️ **Real-time Progress Tracking** – Monitor campaign funding in real time  
✔️ **User Authentication** – Secure login with Firebase  
✔️ **Engaging UI with Animations** – Smooth and interactive experience  
✔️ **Notifications & Alerts** – Get updates on campaign status  

## 📥 Installation  

### Prerequisites  
- **Node.js** (v16+ recommended)  
- **NPM or Yarn**  

### Steps  
1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/crowdfund-hub.git
   cd crowdfund-hub
   ```  
2. **Install dependencies**  
   ```bash
   npm install
   ```  
3. **Set up environment variables**  
   Create a `.env` file in the root directory and add:  
   ```plaintext
   VITE_apiKey=YOUR_FIREBASE_API_KEY
   VITE_authDomain=YOUR_AUTH_DOMAIN
   VITE_projectId=YOUR_PROJECT_ID
   VITE_storageBucket=YOUR_STORAGE_BUCKET
   VITE_messagingSenderId=YOUR_MESSAGING_SENDER_ID
   VITE_appId=YOUR_APP_ID
   VITE_API_URL=YOUR_BACKEND_API_URL
   ```  
4. **Start the development server**  
   ```bash
   npm run dev
   ```  

## 🔑 Environment Variables  
| Variable                   | Description                          |  
|----------------------------|--------------------------------------|  
| `VITE_apiKey`              | Firebase API key                    |  
| `VITE_authDomain`          | Firebase authentication domain      |  
| `VITE_projectId`           | Firebase project ID                 |  
| `VITE_storageBucket`       | Firebase storage bucket             |  
| `VITE_messagingSenderId`   | Firebase messaging sender ID        |  
| `VITE_appId`               | Firebase app ID                     |  
| `VITE_API_URL`             | Backend API URL                     |  

## 🛠 Usage  
- **Sign up/log in** using Firebase authentication  
- **Create a campaign**, set a funding goal, and start fundraising  
- **Contribute to campaigns** using a seamless checkout process  
- **Track campaign progress** and get notified of milestones  

## 📦 Dependencies  
This project uses the following major dependencies:  
- **React** (`18.3.1`)  
- **React Router DOM** (`7.0.2`) – Routing  
- **Axios** (`1.7.9`) – API requests  
- **Firebase** (`11.0.2`) – Authentication & storage  
- **React Awesome Reveal** (`4.2.14`) – Smooth animations  
- **React Lottie** (`1.2.10`) – Lottie animations  
- **React Simple Typewriter** (`5.0.1`) – Typing animations  
- **React Toastify** (`10.0.6`) – Notifications  
- **SweetAlert2** (`11.14.5`) – Alert modals  

For the full list, see [`package.json`](./package.json).  

## ⚙️ Configuration  
- **Backend API:** Configured using `VITE_API_URL`  
- **Authentication:** Firebase Authentication for secure login  
- **Real-time Updates:** Implemented using Firebase & React state management  

## 🤝 Contributing  
Want to contribute? Follow these steps:  
1. Fork the repository  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Add new feature"`)  
4. Push to your branch (`git push origin feature-name`)  
5. Open a pull request  

## 📜 License  
This project is licensed under the **MIT License**.  

## This is Live site URL

* [Live Site](https://crowd-funding-85c71.web.app/myCampaign)
