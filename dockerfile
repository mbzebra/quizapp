# Step 1: Use an official Node runtime as a parent image
FROM node:latest

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy the current directory contents into the container at /usr/src/app
COPY . .

COPY env.dev ./.env

# Step 4: Install any needed packages specified in package.json
RUN npm install

# Step 5: If you are building your code for production
# RUN npm ci --only=production

# Step 6: Make port 3000 available to the world outside this container
EXPOSE 3000

# Step 7: Define environment variable
ENV REACT_APP_API_BASE_URL=http://192.168.4.223:3001/api

# Step 8: Run app.js when the container launches
CMD ["npm", "start"]
