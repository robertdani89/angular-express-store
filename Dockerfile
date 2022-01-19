FROM node:14-alpine

ENV NODE_ENV production

COPY backend/package.json .
COPY backend/package-lock.json .
COPY backend/dist .

COPY frontend/dist/frontend public

RUN npm ci --production --loglevel warn

EXPOSE 80

CMD ["node", "main.js"]