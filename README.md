# API Rest :: Twitter :: 2021

```
Academic purpose
```

## Prerequisites

- [Node](https://nodejs.org/)
- NPM, built into Node.
- [MongoDB](https://www.mongodb.com/try/download/community) or [MondoDB Atlas](https://www.mongodb.com/cloud/atlas2)
- [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) or any client api rest.

## Clone the repo

```sh
> git clone https://github.com/jestrade/api-twitter.git
```

## Enter to folder project

```sh
> cd api-twitter
```

## Install the app

```sh
> npm i
```

## Create .env file

- Configuration Example:
  - HTTP_HOST -> IP of server, default is 127.0.0.1.
  - HTTP_PORT -> Node listening port, default is 3000.
  - LOG_ACCESS -> Path where the logs will be stored, don't specify the path, just the file name, default `access.log`.
  - JWTKEY -> Is used by [JWT](https://www.npmjs.com/package/jsonwebtoken) to sign the token.
  - APIWEATHERKEY -> Is used to consume the [API](https://openweathermap.org/api).
  - DB_CONNECTION_STRING -> Connection string to connect [mongodb](https://mongoosejs.com/docs/connections.html) database
  - SALT_ROUNDS -> Controls how much time is needed to calculate a single BCrypt hash, default is 10.
  - MAILER_HOST -> xx
  - MAILER_PORT -> xx
  - MAILER_USER -> xx
  - MAILER_PASSWORD -> xx
  - MAIL_FROM -> xx
  - TWITTER_CONSUMER_KEY -> xx
  - TWITTER_CONSUMER_SECRET -> xx
  - TWITTER_TOKEN_KEY -> xx
  - TWITTER_TOKEN_SECRET -> xx

Example connection string local, more info. [MongoDB](https://www.mongodb.com/try/download/community).

```sh
mongodb://username:password@host:port/database
```

Example connection string in cloud, more info [MondoDB Atlas](https://www.mongodb.com/cloud/atlas2).

```sh
mongodb+srv://<username>:<password>@cluster0.rwp0b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

Rename .env.example to .env, and set parameters required, please dont include `env:`.

```yaml
env:

# This is parameters required.
HTTP_HOST=
HTTP_PORT=
LOG_ACCESS=
JWTKEY=
APIWEATHERKEY=
DB_CONNECTION_STRING=
SALT_ROUNDS=
MAILER_HOST=
MAILER_PORT=
MAILER_USER=
MAILER_PASSWORD=
MAIL_FROM=
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_TOKEN_KEY=
TWITTER_TOKEN_SECRET=
```

## Install nodemon as development dependency

```sh
> npm i --save-dev nodemon
```

## Run the seeds

```sh
> npm run seeds
```

## Run the app

### Without nodemon

Run project without nodemon

```sh
> npm start
```

### With nodemon

Run project with nodemon

```sh
> npm run dev
```

### Run tests

```sh
> npm run test
```

## Access points

domain/api/\*

## Authenticacion

´´´
headers:
{
x-access-token: ""
}
´´´

## API

<table>
  <tr>
   <td>
   </td>
   <td colspan="4" ><strong>Methods</strong>
   </td>
  </tr>
  <tr>
   <td><strong>URL</strong>
   </td>
   <td><strong>GET</strong>
   </td>
   <td><strong>POST</strong>
   </td>
   <td><strong>PUT</strong>
   </td>
   <td><strong>DELETE</strong>
   </td>
  </tr>
  <tr>
   <td>/
   </td>
   <td>error </td>
   <td>error
   </td>
   <td>error
   </td>
   <td>error
   </td>
  </tr>
  <tr>
   <td>/users
   </td>
   <td>List all users
<p>
<strong><code>private</code></strong>
<strong><code>
- Authentication</code></strong>
   </td>
   <td>Create user
<p>
body:
<p>
<code>{</code>
<p>
<code>name,</code>
<p>
<code>email,</code>
<p>
<code>username,</code>
<p>
<code>password</code>
<p>
<code>passwordConfirmation</code>
<p>
<code>}</code>
<p>
<strong><code>public</code></strong>
   </td>
   <td>error
   </td>
   <td>Delete user
<p>
body:
<p>
<code>{</code>
<p>
<code>id</code>
<p>
<code>}</code>
<p>
<strong><code>private:</code></strong>
<strong><code>
- Authentication \
- Authorization</code></strong>
   </td>
  </tr>
  <tr>
   <td>/users<strong>/:id</strong>
   </td>
   <td>Display user information: id
<p>
<strong><code>public</code></strong>
   </td>
   <td>error
   </td>
   <td>Update user: id
<p>
<code>{</code>
<p>
<code>name,</code>
<p>
<code>email,</code>
<p>
<code>password</code>
<p>
<code>}</code>
<p>
<strong><code>private:</code></strong>
<strong><code>
- Authentication \
- Authorization</code></strong>
   </td>
   <td>error
   </td>
  </tr>
  <tr>
   <td>/users/login
   </td>
   <td>error
   </td>
   <td>Authenticate user
<p>
<code>{</code>
<p>
<code>username,</code>
<p>
<code>password</code>
<p>
<code>}</code>
<p>
<strong><code>public</code></strong>
   </td>
   <td>error
   </td>
   <td>error
   </td>
  </tr>
  <tr>
   <td>/tweets
   </td>
   <td>List all tweets
<p>
<strong><code>private</code></strong>
<strong><code>
- Authentication</code></strong>
   </td>
   <td>Create tweet
<p>
body:
<p>
<code>{</code>
<p>
<code>content</code>
<p>
<code>}</code>
<p>
<strong><code>private</code></strong>
   </td>
   <td>error
   </td>
   <td>Delete tweet
<p>
body:
<p>
<code>{</code>
<p>
<code>tweetId</code>
<p>
<code>}</code>
<p>
<strong><code>private:</code></strong>
<strong><code>
- Authentication \
- Authorization</code></strong>
   </td>
  </tr>
  <tr>
   <td>/tweets/:id
   </td>
   <td>List tweet info and comments
<p>
<strong><code>public</code></strong>
   </td>
   <td>error
   </td>
   <td>error
   </td>
   <td>error
   </td>
  </tr>
  <tr>
   <td>/tweets/comments
   </td>
   <td>error
   </td>
   <td>Create tweet
<p>
body:
<p>
<code>{</code>
<p>
<code>comment,</code>
<p>
<code>tweetId,</code>
<p>
<code>}</code>
<p>
<strong><code>private</code></strong>
   </td>
   <td>error
   </td>
   <td>Delete tweet
<p>
body:
<p>
<code>{</code>
<p>
<code>tweetId,</code>
<p>
<code>commentId</code>
<p>
<code>}</code>
<p>
<strong><code>private:</code></strong>
<strong><code>
- Authentication \
- Authorization</code></strong>
   </td>
  </tr>
  <tr>
   <td>/tweets/likes
   </td>
   <td>error
   </td>
   <td>error
   </td>
   <td>Create tweet
<p>
body:
<p>
<code>{</code>
<p>
<code>like(1|0),</code>
<p>
<code>tweetId,</code>
<p>
<code>}</code>
<p>
<code>1: like</code>
<p>
<code>0: unlike</code>
<p>
<strong><code>private</code></strong>
   </td>
   <td>error
   </td>
  </tr>
  <tr>
   <td>/tweets/comments/:id
   </td>
   <td>
   </td>
   <td>error
   </td>
   <td>
   </td>
   <td>error
   </td>
  </tr>
  <tr>
   <td>/tweets/external/:username
   </td>
   <td>
   Get tweets from real Twitter
   </td>
   <td>error
   </td>
   <td>
   </td>
   <td>error
   </td>
  </tr>
  <tr>
   <td>/weather/:city
   </td>
   <td>Get weather from city
<p>
<strong><code>public</code></strong>
   </td>
   <td>error
   </td>
   <td>error
   </td>
   <td>error
   </td>
  </tr>

  <tr>
   <td>/tasks
   </td>
   <td>List all tasks
<p>
<strong><code>public</code></strong>
   </td>
   <td>Create task
<p>
body:
<p>
<code>{</code>
<p>
<code>content</code>
<p>
<code>}</code>
<p>
<strong><code>public</code></strong>
   </td>
   <td>error
   </td>
   <td>Delete task
<p>
body:
<p>
<code>{</code>
<p>
<code>id</code>
<p>
<code>}</code>
<p>
<strong><code>public</code></strong>
   </td>
  </tr>
</table>
