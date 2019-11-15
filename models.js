const { Sequelize } = require('sequelize')

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    define: {
      underscored: true
    }
  });
} else {
  sequelize = new Sequelize({
    database: 'sourc_db',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  });
}

class User extends Sequelize.Model { }
class Project extends Sequelize.Model { }
class Team extends Sequelize.Model { }

User.init({
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password_digest: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: Sequelize.STRING,
  email_address: Sequelize.STRING,
  role: Sequelize.STRING,
  about_me: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  image_url: {
    type: Sequelize.TEXT,
    allowNull: true
  }
},
  {
    sequelize,
    modelName: 'users'
  })

Project.init({
  name: Sequelize.TEXT,
  description: Sequelize.TEXT,
  image_url: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  github: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  slack: {
    type: Sequelize.TEXT,
    allowNull: true
  },
}, {
  sequelize,
  modelName: 'projects'
})

Team.init({
  user_id: Sequelize.INTEGER,
  project_id: Sequelize.INTEGER,
  is_leader: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  is_member: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
},
  {
    sequelize,
    modelName: 'teams'
  })

User.belongsToMany(Project,
  {
    through: Team,
  });

Project.belongsToMany(User,
  {
    through: Team,
  });

module.exports = {
  sequelize,
  User,
  Project,
  Team
}