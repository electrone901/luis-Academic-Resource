// this is going to be user try to do it so user can log in
// const bcrypt = require('bcrypt-nodejs')
var Post = require('./Post');

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      },
    },
    cunyEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    cunyId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    college: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    passwordHash: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        notEmpty: true,
      },
    },
  })

  Student.associate = (models) => {
    // uncomment for associations when Department models is ready 
    // models.Student.hasMany(models.College)
    models.Student.hasMany(models.Post);  
  }

  // Student.beforeCreate((student) =>
  //   new sequelize.Promise((resolve) => {
  //     bcrypt.hash(Student.password, null, null, (err, hashedPassword) => {
  //       resolve(hashedPassword);
  //     });
  //   }).then((hashedPw) => {
  //     Student.password_hash = hashedPw;
  //   })
  // );

  return Student
}

