<h4 align="center"> 
	♻️ The backend of a platform that provides waste disposal in an ecological way.
</h4>

## About

A platform to connect companies and entities that work with the collection of recyclable waste to people who need to dispose of their waste in an ecological way.

## Technologies

- Node.js
- TypeScript
- Express
- Cors
- Knex
- SQLite3
- Multer
- Celebrate

## Usage

Change a URL for your ip in the files:

[ItemsController](src/controllers/ItemsController.ts)
[PointsController](src/controllers/PointsController.ts)

```
image_url: `http://10.0.0.105:3333/uploads/${point.image}`,
```


Run migrates

```
npm run knex:migrate
```

Add collection items

```
npm run knex:seed
```

Run application on http://locahost:3333/

```
npm run dev
```
