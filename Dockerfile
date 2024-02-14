# Use the official lightweight Node.js base image.
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build your Next.js app
RUN npm run build

# Expose port 3000 to the host
EXPOSE 3000

# Run the server command
CMD ["npm", "start"]
