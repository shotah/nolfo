FROM node:alpine
WORKDIR /usr/src/app

# Install app dependencies
COPY [".env", "package.json", "tsconfig.json", "./" ]
RUN npm install --omit=dev

# Expose ports
EXPOSE 80
EXPOSE 443
EXPOSE 3000

# Bundle app source
COPY src /usr/src/app/src
COPY public /usr/src/app/public

CMD [ "npm", "start" ]
