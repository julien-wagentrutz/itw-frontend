export default class Database
{
    constructor(props)
    {
        this.data =
            {
              users:
                  [
                    {
                        id: 1,
                        email: "user@mail.com",
                        FirstName: "Julien",
                        LastName: "Wagentrutz",
                        password: "SourceParis",
                        birthdate: "03/09/1997",
                        role: "USER"
                    },
                    {
                        id: 2,
                            email: "admin@mail.com",
                        FirstName: "Gaetan",
                        LastName: "Alvez",
                        password: "SourceParis",
                        birthdate: "03/09/1997",
                        role: "ADMIN"
                    }
                  ]
            }
    }

    //get All users
    getUsers()
    {
        return this.data.users
    }

    // Get one user by his id
    getUserById(id)
    {
        return this.data.users.find((element) => element.id == id)
    }

    // Authentification of the user by is email and password
    authentification(email, password)
    {
        let user = this.data.users.find((element) => element.email === email)
        if(user !== undefined)
        {
             return user.password == password ? user : undefined
        }

    }
}