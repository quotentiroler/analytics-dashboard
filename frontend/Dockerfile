FROM node:20
WORKDIR /app
COPY package.json .
RUN npm install
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY . .
CMD ["npm", "run", "start"]
