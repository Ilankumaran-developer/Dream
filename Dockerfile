#Dream project

FROM node:8.4

MAINTAINER Ilankumaran <ilankumaran786@gmail.com>

RUN mkdir -p /usr/src/app


COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/



EXPOSE 1200

CMD ["npm","START"]
