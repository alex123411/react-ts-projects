import React, { useState } from 'react'
import { IFormProps } from 'models/propsModels'

import AuthService from '@services/AuthService'
import { IUser, UserRoles } from '@models/userModel'


const SignInForm = ()  => {
     
    const authService = new AuthService(null)
    console.log(UserRoles.USER)
    const [user, setUser] = useState({ name: '', email: '', password: '', role: UserRoles.ADMIN } as IUser)
    console.log(user)

    const users: IUser[] = [

    ]
  
    const AddUser = (user: IUser) => {
      console.log("FROM PARENT COMPONENT", user)
      users.push(user)
      console.log(users)
    }

    const createUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        // AddUser(user)   
        console.log(user)
        // setUser({ email: '', password: '', name: '' } as IUser)

        // authService.register(user)
    }

    return (
        <div className='sing-in-form'>
            <h2>Sign in</h2>
            <input
                value={user.name}
                type="text"
                placeholder='Input your name'
                onChange={e => setUser({ ...user, name: e.target.value })}
            />
            <input
                value={user.email}
                type="email"
                placeholder='Input your email'
                onChange={e => setUser({ ...user, email: e.target.value })}
            />
            <input
                value={user.password}
                type="password"
                placeholder='Input your password'
                onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <button className='btn' onClick={createUser}>Submit</button>
        </div>
    )
}


export default SignInForm
