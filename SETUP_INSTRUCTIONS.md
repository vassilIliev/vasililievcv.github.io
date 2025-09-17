# Quick Setup Instructions

## 🚀 Get Started in 3 Steps

### 1. Update Your CV Information
Open `data.js` and replace the placeholder information with your actual details:
- Personal info (name, email, phone, location)
- Work experience
- Education
- Skills
- Projects
- Social links

### 2. Test Locally
```bash
npm start
# or
node server.js
```
Then visit: http://localhost:8000

### 3. Deploy to GitHub Pages
```bash
git add .
git commit -m "Add my CV information"
git push origin main
```

Enable GitHub Pages in your repository settings, and your CV will be live at:
`https://vasililievcv.github.io`

## 📝 What to Update in data.js

```javascript
// Replace these with your information:
name: "Your Full Name"
title: "Your Job Title"
email: "your.email@example.com"
phone: "+your-phone-number"
location: "Your City, Country"
summary: "Write a brief professional summary..."

// Add your work experience:
experience: [
    {
        company: "Company Name",
        position: "Your Role",
        startDate: "Start Year",
        endDate: "End Year or Present",
        description: "What did you do here..."
    }
]

// And update all other sections...
```

## 🎨 Features Ready for You
- ✅ Modern responsive design
- ✅ Dark/light theme toggle
- ✅ Smooth animations
- ✅ Print-friendly CV download
- ✅ Mobile optimized
- ✅ Fast loading (no frameworks)

Need help? Check the full `README.md` for detailed instructions!
