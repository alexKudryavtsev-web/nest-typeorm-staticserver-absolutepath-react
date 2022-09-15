# Nest (9.0.0) + TypeOrm (0.3.9) + Static Serve + Absolute path + React

Install template:

- `git clone https://github.com/alexKudryavtsev-web/nest-typeorm-staticserver-absolutepath-react.git`
- `npm install` 
- `cd client`
- `npm install`

Build project:
- `npm run build`
- `cd client`
- `npm run build`

Start production version:

```
npm run start:prod
```

Work with database:

- Create empty migration: `npm run migration:create <migration name>`
- Create migration from entity: `npm run migration:generate <migration name>`
- Run migrations: `npm run migration:run`
- Drop database: `npm run schema:drop`

.env:

```
SERVER_PORT=3000
API_URL=http://localhost:3000/api
CLIENT_URL=http://localhost:3001

DB_USER=root
DB_PASSWORD=password
DB_NAME=database
```