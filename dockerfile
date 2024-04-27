FROM node:latest

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

COPY env.dev ./.env

# List installed webpack (debugging purposes)
RUN npm list webpack

# Build the app using webpack
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]