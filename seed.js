const { User, Project, Team } = require('./models');

const main = async () => {
  await User.destroy({
    where: {}
  })


  process.exit()
}


main()