FROM node:alpine AS builder

WORKDIR /app

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/
