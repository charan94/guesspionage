FROM node:14

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

COPY wait-for-it.sh .

RUN chmod +x /app/wait-for-it.sh

EXPOSE 8081

CMD ["/app/wait-for-it.sh", "db:27017", "-t", "120", "--", "npm", "run", "docker:run"]

