FROM node:latest
RUN git clone https://github.com/karamnaser/pokemon-showdown.git
WORKDIR pokemon-showdown
RUN npm ci
EXPOSE 8000
CMD ./pokemon-showdown