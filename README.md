# Vasil Iliev - Software Engineer CV Website

A modern, responsive single-page CV website built with vanilla JavaScript, HTML, and CSS. Designed for GitHub Pages deployment with local development capabilities.

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with preference persistence
- **Print Friendly**: Optimized for PDF generation and printing
- **Fast Loading**: No frameworks, pure vanilla JavaScript for optimal performance
- **Local Development**: Simple local server for development and testing
- **GitHub Pages Ready**: Configured for seamless GitHub Pages deployment
- **Data Driven**: Easy to update CV content through JavaScript data file

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/vasililievcv/vasililievcv.github.io.git
   cd vasililievcv.github.io
   ```

2. **Start the local server**
   ```bash
   # Using Node.js (recommended)
   npm start
   
   # Or directly with Node.js
   node server.js
   
   # Custom port
   node server.js 3000
   ```

3. **Open in browser**
   - Visit: http://localhost:8000 (or your custom port)

### Alternative: Simple HTTP Server

If you don't have Node.js, you can use Python's built-in server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

## ✅ Your CV Information is Complete!

Your `data.js` file has been populated with all your professional information:

### 🎯 **What's Included:**

- **Personal Information**: Full Stack Software Engineer profile with your complete summary
- **Work Experience**: 5 detailed projects including IAV GmbH, Telerik, Celonis, and more
- **Education**: From Telerik Academy, CISCO certifications, to NATFA degree
- **Skills**: Comprehensive technology stack organized by categories
- **Projects**: Real projects with detailed descriptions and tech stacks
- **Languages**: Bulgarian (Native), English (Fluent), German (Basic)
- **Certifications**: Professional certifications and training

### 🔧 **Easy Customization Options:**

If you need to make any updates, simply edit the `data.js` file:

- **Update contact information**: Change email/phone in `cvData.personal`
- **Add new experience**: Add entries to `cvData.experience` array
- **Update skills**: Modify `cvData.skills` object categories
- **Add project links**: Update `githubUrl` and `liveUrl` in projects
- **Update profile photo**: Replace `1.jpg` with your new image file, or change `profileImage` path in `cvData.personal`
- **Social links**: Update your LinkedIn/GitHub URLs in `cvData.social`

## 🎨 Customization

### Theme Colors

To customize colors, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #3b82f6;
    --accent-color: #06d6a0;
    /* Modify other colors as needed */
}
```

### Adding Sections

To add new sections (e.g., certifications, languages):

1. Add data to `data.js`
2. Create HTML structure in `index.html`
3. Add styling in `styles.css`
4. Add population logic in `script.js`

### Profile Image

1. Add your profile image to the project folder
2. Update `cvData.personal.profileImage` with the image path
3. The image will automatically replace the placeholder

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial CV website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save the settings

3. **Access your website**
   - Your CV will be available at: `https://yourusername.github.io`

### Other Hosting Platforms

The website is static and can be deployed to:
- **Netlify**: Drag and drop the folder or connect to GitHub
- **Vercel**: Import the GitHub repository
- **GitHub Pages**: Follow the steps above
- **Any static hosting service**

## 📱 Features

### Responsive Design
- Mobile-first approach
- Fluid typography and spacing
- Touch-friendly navigation

### Performance
- No external dependencies (except fonts and icons)
- Optimized images and assets
- Fast loading times

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🛠️ File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and themes
├── script.js           # Main JavaScript functionality
├── data.js             # CV data and configuration
├── server.js           # Local development server
├── package.json        # Node.js configuration
├── _config.yml         # GitHub Pages configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🔧 Advanced Usage

### Local Data Persistence

The website saves user preferences (theme, etc.) to localStorage. To clear saved data:

```javascript
localStorage.clear();
```

### Print Optimization

The website includes print-specific CSS for generating PDFs:
- Clean layout without navigation
- Optimized typography
- Black and white friendly

### Theme Customization

You can add custom themes by extending the CSS variables and theme toggle functionality.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you need help customizing your CV website:
1. Check the documentation above
2. Open an issue on GitHub
3. Contact: [your-email@example.com]

---

**Note**: After extracting information from your Word document, you can delete it from the repository and update the `.gitignore` file to exclude Word documents in the future.
