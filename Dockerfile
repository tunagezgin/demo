FROM node:20-alpine

# App dizini
WORKDIR /app

# package.json ve package-lock.json ekle
COPY package*.json ./

# Dependencies
RUN npm install

# Uygulama dosyalarını ekle
COPY . .

# Container 3000 portunu expose et
EXPOSE 3000

# Start command
CMD ["node", "index.js"]
