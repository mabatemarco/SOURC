const { User, Project, Team } = require('./models');

const main = async () => {
  await User.destroy({
    where: {}
  })

  const user1 = await User.create({
    username: 'mike',
    password_digest: 'fdwqfdsgre',
    description: 'frewfiwlnfewq'
  })
  const user2 = await User.create({
    username: 'Yohlanna',
    password_digest: 'fdwqfdsagt4fdsgre',
    description: 'frewfihytecqfcwlnfewq'
  })
  const user3 = await User.create({
    username: 'Chris',
    password_digest: 'fdwqferwterdsgre',
    description: 'frewfiwnkuqxwlnfewq'
  })
  const user4 = await User.create({
    username: 'David',
    password_digest: 'fdwqferwterdsgre',
    description: 'frewfiwnkuqxwlnfewq'
  })

  const Project1 = await Project.create({
    name: 'SOURC',
    description: '432165gfdwsfredsa'
  })
  const Project2 = await Project.create({
    name: 'dont eat here',
    description: '432165gfdwsgerwsvdscefredsa'
  })
  const Project3 = await Project.create({
    name: 'shopping list',
    description: '432165gfdq  trewsfredsa'
  })

  await user1.addProject([Project1, Project3])
  await user2.addProject([Project2, Project3])
  await user3.addProject([Project1, Project2, Project3])
  await user4.addProject(Project1)

}