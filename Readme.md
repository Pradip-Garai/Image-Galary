# Image Gallery - Full Stack Application

A modern, responsive image gallery application built with React and Node.js that allows users to upload, view, and manage images.

## 🚀 Features

- Image upload with drag and drop support
- Responsive image grid layout
- Individual image detail views
- Real-time image size and type information
- Modern and intuitive user interface
- Bootstrap styling for responsive design

## 🛠️ Tech Stack

### Frontend
- React (v19)
- Vite
- React Router DOM (v7)
- React Dropzone
- Bootstrap
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB (for image metadata storage)
- Multer (for image upload handling)

## 📁 Project Structure

```
Image-Gallery/
├── Frontend/
│   ├── src/
│   │   ├── Component/
│   │   │   ├── ImageGalary.jsx
│   │   │   └── ImageDetalis.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── Backend/
    ├── Models/
    │   ├── db.js
    │   └── imageModel.js
    ├── Routes/
    │   └── ImageRoutes.js
    ├── Middleware/
    │   └── ImageUploader.js
    └── Server.js
```

## 🚦 Getting Started

### Prerequisites
- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install Backend Dependencies
```bash
cd Backend
npm install
```

3. Install Frontend Dependencies
```bash
cd Frontend
npm install
```

### Running the Application

1. Start the Backend Server
```bash
cd Backend
npm start
```

2. Start the Frontend Development Server
```bash
cd Frontend
npm run dev
```

## 🌐 Deployment

The application is configured for deployment on Vercel:

- Frontend: Vite-built React application
- Backend: Node.js API with MongoDB connection

Both frontend and backend include `vercel.json` configuration files for seamless deployment.

## 🔑 Key Features Implementation

### Image Upload
- Drag and drop functionality
- File type validation
- Size restrictions
- Progress feedback

### Gallery View
- Responsive grid layout
- Image previews
- Lazy loading
- Click to view details

### Image Details
- Full-size image view
- File information display
- Back to gallery navigation

## 📝 Environment Variables

Create a `.env` file in the backend directory:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.