FROM public.ecr.aws/docker/library/node:16

RUN mkdir /pdp-docker-graphql

WORKDIR /pdp-docker-graphql

COPY package.json /pdp-docker-graphql

RUN npm install

COPY . /pdp-docker-graphql

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
