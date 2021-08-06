import React, {Component} from 'react';
import {disconnect} from "../App";
import Database from "../utils/Database";

export default class Admin extends Component
{
    constructor()
    {
        super();
    this.users = new Database().getUsers()
        console.log(this.users)
    }

    render()
    {
        return <section>
            <h2>Admin</h2>
            <a href="/">Homepage</a>
            <ul>
                {this.users.map((user) => (
                    <li>{user.FirstName}  {user.LastName}</li>
                ))}
            </ul>

            <a href='#' onClick={disconnect}>Déconnexion</a>
        </section>
    }

}




