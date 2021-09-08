FROM node:16.8.0 AS client-deps

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm install
RUN npm install --unsafe-perm -g expo-cli

FROM client-deps

COPY . /app

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD ["npm", "start"]
