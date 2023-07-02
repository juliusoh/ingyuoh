# We use an official Nginx image from Docker Hub as our base image
FROM nginx:stable-alpine

# Copy the build folder from React to the root of Nginx (www)
COPY build/ /usr/share/nginx/html

# We expose port 80 to outside world
EXPOSE 80

# Start Nginx when the container has provisioned.
CMD ["nginx", "-g", "daemon off;"]
