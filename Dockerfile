FROM node:20-alpine
WORKDIR /pokemon-showdown
COPY package.json ./
COPY package-lock.json ./ 
COPY . .
RUN npm i 
RUN	npm run build
EXPOSE 8000
CMD ["node","pokemon-showdown"]  
