# CRUD API + Mongo

![WBS Coding School](https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:auto/h:auto/q:90/https://www.wbscodingschool.com/files/WBS_CODING_SCHOOL_logo.svg)

## Install

- Fork project
- Clone your fork:

```bash
git clone <link-to-project>
cd <project-directory>/
npm install
```

## Environment

Create a .env file with:

- MONGO_URI variable, it has to be a valid MongoDB connection string.

# Commands

## Dev

Dev commands runs app with nodemon

```bash
npm run dev
```

## Start

Start commands runs app with Node

```bash
npm start
```

# API routes and methods

- GET /posts

-- Sample response

```json
[
    {
        "_id": ObjectId,
        "title": String,
        "cover": String,
        "author": String,
        "body": String,
        "genre": String,
        "date": Date
    }
]
```

- GET /posts/:id

-- Sample response

```json
{
    "_id": ObjectId,
    "title": String,
    "cover": String,
    "author": String,
    "body": String,
    "genre": String,
    "date": Date
}
```

- POST /posts

-- Sample request:

```json
{
    "title": String,
    "cover": String,
    "author": String,
    "body": String,
    "genre": String,
    "date": Date
}
```

-- Sample response

```json
{
    "_id": ObjectId,
    "title": String,
    "cover": String,
    "author": String,
    "body": String,
    "genre": String,
    "date": Date
}
```

- PUT /posts/:id

-- Sample request:

```json
{
    "title": String,
    "cover": String,
    "author": String,
    "body": String,
    "genre": String,
    "date": Date
}
```

-- Sample response

```json
{
    "_id": ObjectId,
    "title": String,
    "cover": String,
    "author": String,
    "body": String,
    "genre": String,
    "date": Date
}
```

- DELETE /users/:id

-- Sample response:

```json
{
    "success": String
}
```
