FROM node:16.8.0 AS client-deps

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm install
RUN npm install -g expo-cli

FROM client-deps

COPY . /app

EXPOSE 19000

CMD ["expo", "start"]
