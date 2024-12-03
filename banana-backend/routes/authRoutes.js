const express = require("express");
const verifyToken = require('../middleware/verifyToken');
const multer = require('multer'); // Import multer for file upload
const router = express.Router();

const { 
    registerUser, loginUser, getUserProfile, getRankings, 
    deleteUser, getLeaderboard, updateHighScore,uploadProfileImage
} = require("../controllers/authController");

// Multer storage configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/'); // Specify the folder to store files
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + '-' + file.originalname); // Unique filename for each upload
    }
  });
  
  const upload = multer({ storage: storage }); // Initialize multer with the storage configuration

// Register and Login routes
router.post("/sign-up", registerUser);
router.post("/sign-in", loginUser);
router.get("/profile", verifyToken, getUserProfile);

// Route to fetch all users and their high scores, sorted by high score
router.get('/rankings', getRankings);

// Protect the route with JWT authentication
router.delete('/delete', verifyToken, deleteUser);

router.get("/leaderboard", getLeaderboard);

// Route to update the high score
router.post("/update-high-score", updateHighScore);

// Profile image upload route
router.post('/upload-profile-image', verifyToken, upload.single('profileImage'), uploadProfileImage);


module.exports = router;
