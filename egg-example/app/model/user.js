'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;

  const User = app.model.define(
    'test1',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: STRING, comment: 'niceguy2182@163.com' },
      password: { type: STRING, comment: 'root' },
      reverse1: STRING,
      reverse2: STRING(1000),
      reverse3: STRING(30),
      reverse4: INTEGER,
      reverse5: TEXT,
      reverse6: TEXT('tiny'),
    },
    {
      paranoid: true,
      underscored: false,
    }
  );
  User.sync();
  return User;
};
