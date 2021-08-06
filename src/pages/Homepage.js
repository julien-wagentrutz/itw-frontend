import React, {Component} from 'react';
import {disconnect, getUser, isAdmin} from "../App";

export default class Homepage extends Component
{
    constructor()
    {
        super();

    }

    render()
    {
        const user = getUser()

        return <section>
            <h2>HomePage</h2>
            {isAdmin() && <a href="/admin">Admin</a> }
            <ul>
                    <li>{user.FirstName}  {user.LastName}</li>
                    <li>{user.email}</li>
                    <li>{user.birthdate}</li>
                    <li>{user.role}</li>
            </ul>

            <a href='#' onClick={disconnect}>Déconnexion</a>
        </section>
    }
}