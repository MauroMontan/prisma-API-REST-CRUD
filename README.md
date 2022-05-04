# PRISMA CRUD WITH EXPRESS

### What is Prisma:

[Prisma](https://www.prisma.io/) is an open-source ORM that drastically simplifies data modeling, migrations, and data access for SQL databases in Node. js and TypeScript.

-   [Prisma documentatio](https://www.prisma.io/docs/)

### Steps to test the api rest

-   install dependencies:

```
npm install
```

-   create an .env file in the project root folder and connect your postgress database and add your preferred port

```
// .env content

DATABASE_URL = "YOUR DATABASE_URL"

PORT = 3030

```

-   create some records by executing

```
npm run seed
```

-   run unit tests:

```
npm run test
```

-   start the server:

```
npm run serve
```

the base url is `http://localhost:3030`, remember to set your port properly (recommended 3030)

for testing this api on [insomnia](https://insomnia.rest/) you can import the request collection from this repo on your insomnia client.

### Explorer endpoints

> GET explorers/

> GET explorers/{id}

> PUT explorers/{id}

```
// paylod request schema
{
	"name":string,
	"username":string,
	"mission":string,
	"azureCertification": boolean
}
```

> POST explorers/

```
// paylod request schema
{
	"name":string,
	"username":string,
	"mission":string,
	"azureCertification": boolean
}
```

> DELETE explorers/{id}

### Commander endpoints

> GET commanders/

> GET commanders/{id}

> PUT commanders/{id}

```
// paylod request schema
{
	"name":"commander 2",
	"lang": "javascript",
	"missionCommander":"Commander 2",
	"enrrolments":"3",
	"hasCertification":true
}
```

> POST commanders/

```
// paylod request schema
{
	"name":"commander 2",
	"lang": "javascript",
	"missionCommander":"Commander 2",
	"enrrolments":"3",
	"hasCertification":true
}

```

> DELETE explorers/{id}
