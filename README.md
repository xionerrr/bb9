## BB9 description

### Installation

- Create .env file in root directory and copy all fields from .env.example

#### Docker image

- Open _elastic.conf_ to set up your dev SQS environment ( already described for optimal use )
- Open _docker-compose.yml_ to configure your Docker environment ( already described for optimal use )
- $ `docker-compose up` ( to start your DB and ElasticMQ )

#### Back-End (NestJS, Prisma, PostgreSQL, Apollo Server)

- $ `yarn` ( install dependencies )
- $ `yarn prisma migrate dev --create-only` ( new DB migration )
- $ `yarn prisma db push`
- $ `yarn prisma studio` ( to run prisma studio in your web-browser )

- $ `yarn start:dev graphql` ( to run graphql server )
- $ `yarn start:dev rest` ( to run rest server )

#### Front-End (React, Styled-Components, React-router-dom, Apollo Client)

- $ `yarn`
- $ `yarn dev`

### ElasticMQ-UI url by default is `http://localhost:9325/`

### ElasticMQ-REST-SQS url by default is `http://localhost:9324/`

### Back-End GraphQL url by default is `http://localhost:8000/`

### Back-End REST url by default is `http://localhost:8001/`

### Front-End url by default is `http://localhost:5173/`
