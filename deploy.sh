#!/bin/bash

# Deployment script for Atul Maurya Portfolio
echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files generated in 'out' directory"
    echo ""
    echo "🌐 Ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Push to GitHub: git add . && git commit -m 'Deploy' && git push"
    echo "2. Or manually upload 'out' folder to Netlify"
    echo ""
    echo "🎉 Your portfolio is ready to go live!"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi