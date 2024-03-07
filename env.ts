/*
|--------------------------------------------------------------------------
| Validating Environment Variables
|--------------------------------------------------------------------------
|
| In this file we define the rules for validating environment variables.
| By performing validation we ensure that your application is running in
| a stable environment with correct configuration values.
|
| This file is read automatically by the framework during the boot lifecycle
| and hence do not rename or move this file to a different location.
|
*/

import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  HOST: Env.schema.string({ format: 'host' }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  APP_NAME: Env.schema.string(),
  CACHE_VIEWS: Env.schema.boolean(),
  SESSION_DRIVER: Env.schema.string(),
  DRIVE_DISK: Env.schema.enum(['local'] as const),
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  // MYSQL
  MYSQL_HOST: Env.schema.string({ format: 'host' }),
  MYSQL_PORT: Env.schema.number(),
  MYSQL_USER: Env.schema.string(),
  MYSQL_PASSWORD: Env.schema.string.optional(),
  MYSQL_DB_NAME: Env.schema.string(),
})

/*
CREATE TABLE users (
  id INT PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50)
);

CREATE TABLE todos (
  id INT PRIMARY KEY,
  label VARCHAR(256),
  description VAR CHAR(256)
);

CREATE TABLE tags (
  id INT PRIMARY KEY,
  label VARCHAR(50),
);

CREATE TABLE haveTags (
  user_id INT,
  tag_id INT,
  PRIMARY KEY (user_id, tag_id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (tag_id) REFERENCES tags (id)
);
*/
