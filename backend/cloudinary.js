const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dgimm1mwi',     // Replace with your Cloudinary Cloud Name
  api_key: '428615991551598',           // Replace with your Cloudinary API Key
  api_secret: '*********************************',     // Replace with your Cloudinary API Secret
});

module.exports = cloudinary;
