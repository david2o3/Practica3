# web/Dockerfile
FROM nginx
COPY ./ /usr/share/nginx/html
Dockerfile
Copy code
# api/Dockerfile
FROM node

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY ./ /app

CMD ["node", "index.js"]