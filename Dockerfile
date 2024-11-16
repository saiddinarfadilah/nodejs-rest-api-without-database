# Gunakan base image Node.js versi tertentu
FROM node:18-alpine

# Set working directory di dalam container
WORKDIR /usr/src/app

# Salin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file ke dalam container
COPY . .

# Tentukan port yang akan digunakan aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "dev"]
