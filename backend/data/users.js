import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'mojo',
    email: 'mojo@mojoimpact.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ervin Howell',
    email: 'erv@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users
