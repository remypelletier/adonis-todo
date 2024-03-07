import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {

  public async up() {
    this.schema.raw(`
      CREATE TABLE users (
        id INT PRIMARY KEY,
        firstName VARCHAR(50),
        lastName VARCHAR(50)
      );
    `)
    this.schema.raw(`
      CREATE TABLE todos (
        id INT PRIMARY KEY,
        label VARCHAR(256),
        description VARCHAR(256)
      );
    `)
    this.schema.raw(`
      CREATE TABLE tags (
        id INT PRIMARY KEY,
        label VARCHAR(50)
      );
    `)
    this.schema.raw(`
      CREATE TABLE haveTags (
        user_id INT,
        tag_id INT,
        PRIMARY KEY (user_id, tag_id),
        FOREIGN KEY (user_id) REFERENCES users (id),
        FOREIGN KEY (tag_id) REFERENCES tags (id)
      );
    `)
  }

  public async down() {
    this.schema.raw('DROP TABLE haveTags, tags, todos, users')
  }
}
