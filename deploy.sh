#!/bin/bash

echo "🚀 Lahari Jumbo Xerox - India-Optimized Deployment"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🌏 Indian Data Centers Available:${NC}"
echo "• Vercel: Mumbai (bom1) region"
echo "• Netlify: Indian CDN edge locations"
echo "• AWS: Mumbai (ap-south-1)"
echo "• DigitalOcean: Mumbai region"
echo "• Railway: Global with Indian routing"
echo ""

echo -e "${YELLOW}Choose deployment option for India:${NC}"
echo "1. ${GREEN}Vercel (Mumbai region) - RECOMMENDED${NC}"
echo "2. ${GREEN}Netlify (Indian CDN)${NC}"
echo "3. ${BLUE}AWS Amplify (Mumbai)${NC}"
echo "4. ${BLUE}Railway (Global with Indian optimization)${NC}"
echo "5. ${BLUE}DigitalOcean App Platform (Mumbai)${NC}"
echo "6. ${YELLOW}Hostinger VPS (Indian hosting)${NC}"

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo -e "${GREEN}🚀 Deploying to Vercel (Mumbai region)...${NC}"
        echo "This will give you the best performance for Indian users!"
        npx vercel --prod --regions=bom1
        ;;
    2)
        echo -e "${GREEN}🌐 Deploying to Netlify (Indian CDN)...${NC}"
        npx netlify-cli deploy --prod --dir=.next
        ;;
    3)
        echo -e "${BLUE}☁️ AWS Amplify Setup:${NC}"
        echo "1. Go to AWS Amplify Console"
        echo "2. Connect your GitHub repository"
        echo "3. Choose Mumbai region (ap-south-1)"
        echo "4. Build settings: 'npm run build', 'npm start'"
        echo "5. Custom domain: lahari-jumbo-xerox.com"
        ;;
    4)
        echo -e "${BLUE}🚂 Railway Deployment:${NC}"
        echo "1. Push code to GitHub"
        echo "2. Connect repo to railway.app"
        echo "3. Set region to Asia (if available)"
        echo "4. Railway will auto-deploy with Indian routing"
        ;;
    5)
        echo -e "${BLUE}🌊 DigitalOcean App Platform:${NC}"
        echo "1. Go to DigitalOcean App Platform"
        echo "2. Connect GitHub repo"
        echo "3. Choose Mumbai region"
        echo "4. Set build command: npm run build"
        echo "5. Set start command: npm start"
        ;;
    6)
        echo -e "${YELLOW}🏠 Hostinger VPS Setup:${NC}"
        echo "1. Get Ubuntu VPS from Hostinger India"
        echo "2. Connect via SSH"
        echo "3. Install Node.js 18+"
        echo "4. Clone your repository"
        echo "5. Run: npm install && npm run build && npm start"
        echo "6. Set up Nginx reverse proxy"
        ;;
    *)
        echo -e "${RED}Invalid choice${NC}"
        ;;
esac

echo ""
echo -e "${GREEN}📊 Expected Performance in India:${NC}"
echo "• Vercel Mumbai: <500ms latency"
echo "• Netlify India: <800ms latency"
echo "• AWS Mumbai: <300ms latency"
echo "• Indian VPS: <100ms latency (but more management)"