# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files to the container
COPY . .

# Expose the Vite default port
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev", "--", "--host"]
