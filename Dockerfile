# Base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Set environment variables
ENV API_URL=https://lijinfeng021-8181.theiadockernext-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
