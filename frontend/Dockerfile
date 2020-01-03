# Build environment
FROM node:node:12.14.0-alpine3.9 as build

WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json /frontend/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3031 -g --silent

COPY . /frontend
RUN npm run build

# Production environment
FROM nginx:1.16.0-alpine

COPY --from=build /frontend/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
