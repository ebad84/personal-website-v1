# Docker Deployment Guide for Liara

This guide explains how to deploy your React portfolio to Liara using Docker.

## Prerequisites

- Docker installed on your local machine
- Liara CLI installed (`npm install -g @liara/cli`)
- Liara account

## Local Development with Docker

### Build the Docker image:
```bash
docker build -t mohammad-reza-portfolio .
```

### Run the container locally:
```bash
docker run -p 3000:80 mohammad-reza-portfolio
```

Your application will be available at `http://localhost:3000`

## Deployment to Liara

### 1. Login to Liara:
```bash
liara login
```

### 2. Deploy the application:
```bash
liara deploy
```

### 3. Alternative: Deploy with specific configuration:
```bash
liara deploy --app mohammad-reza-portfolio --platform docker
```

## Configuration Files

- **Dockerfile**: Multi-stage build configuration
- **nginx.conf**: Nginx server configuration with optimizations
- **liara.json**: Liara deployment configuration
- **.dockerignore**: Files to exclude from Docker build context

## Features

- **Multi-stage build**: Optimized for production with minimal image size
- **Nginx server**: High-performance static file serving
- **Gzip compression**: Reduced bandwidth usage
- **Security headers**: Basic security configurations
- **Client-side routing**: Support for React Router (if added later)
- **Static asset caching**: Optimized caching for better performance

## Environment Variables

If you need to add environment variables for production, create a `.env.production` file and modify the Dockerfile to copy it during the build stage.

## Troubleshooting

1. **Build fails**: Check that all dependencies are properly installed
2. **Port issues**: Ensure port 80 is exposed and matches Liara configuration
3. **Static files not loading**: Verify nginx configuration and file paths

## Performance Optimizations

The Docker setup includes:
- Gzip compression for text files
- Long-term caching for static assets
- Optimized nginx configuration
- Multi-stage build to reduce image size