const { User, Project, Team } = require('./models');

const main = async () => {
  await User.destroy({
    where: {}
  })

  const user1 = await User.create({
    username: 'mike',
    password_digest: 'fdwqfdsgre',
    name: 'mike',
    email: 'fafewf@aol.com',
    role: 'SE',
    about_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image_url: ''
  })
  const user2 = await User.create({
    username: 'Yohlanna',
    password_digest: 'fdwqfdsagt4fdsgre',
    name: 'lanna',
    email: 'fafewf@aol.com',
    role: 'SE',
    about_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet.',
    image_url: ''
  })
  const user3 = await User.create({
    username: 'Chris',
    password_digest: 'fdwqferwterdsgre',
    name: 'chris',
    email: 'fafewf@aol.com',
    role: 'SE',
    about_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque. Congue nisi vitae suscipit tellus mauris a diam.',
    image_url: ''
  })
  const user4 = await User.create({
    username: 'David',
    password_digest: 'fdwqferwterdsgre',
    name: 'dave',
    email: 'fafewf@aol.com',
    role: 'SE',
    about_me: 'auctor neque vitae tempus quam pellentesque nec nam aliquam sem',
    image_url: ''
  })

  const Project1 = await Project.create({
    name: 'SOURC',
    description: '432165gfdwsfredsa',
    image_url: '',
    github: 'fwqfdsagreafdsafew',
    slack: 'gfasfdsafdwasfew'
  })
  const Project2 = await Project.create({
    name: 'dont eat here',
    description: '432165gfdwsgerwsvdscefredsa',
    image_url: '',
    github: 'fwqfdsagreafdsafew',
    slack: 'gfasfdsafdwasfew'
  })
  const Project3 = await Project.create({
    name: 'shopping list',
    description: '432165gfdq  trewsfredsa',
    image_url: '',
    github: 'fwqfdsagreafdsafew',
    slack: 'gfasfdsafdwasfew'
  })

  await user1.addProject([Project1, Project3])
  await user2.addProject([Project2, Project3])
  await user3.addProject([Project1, Project2, Project3])
  await user4.addProject(Project1)


  process.exit()
}


main()