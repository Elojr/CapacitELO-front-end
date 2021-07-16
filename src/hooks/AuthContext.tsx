import { createContext, useContext, useState, ReactNode } from 'react'
import { setCookie, destroyCookie, parseCookies } from 'nookies'
import { api, CREATE_SESSION } from '../services/api'
import { updateTokenApiClient } from '../services/apiClient'

interface IUser {
    id: number
    name: string
    avatar_url: string | null
    type: string
}

interface ISignInDTO {
    email: string
    password: string
}
interface ISignInData {
    user: IUser
    token: string
}

interface IAuthContextData {
    user: IUser | null
    isAuthenticated: boolean
    signIn(data: ISignInDTO): Promise<void>
    signOut(): void
}

interface IAuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as IAuthContextData)

export function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUser | null>(() => {
        const { '@exame:user': user } = parseCookies()
        if (!user) {
            return null
        }
        return JSON.parse(user) as IUser
    })
    const isAuthenticated = !!user

    async function signIn({ email, password }: ISignInDTO): Promise<void> {
        const response = await api(
            CREATE_SESSION({ body: { email, password } })
        )
        const data = response.data as ISignInData
        setCookie(null, '@exame:token', data.token, {
            maxAge: 60 * 60 * 1, // 1 hour
        })
        setCookie(null, '@exame:user', JSON.stringify(data.user), {
            maxAge: 60 * 60 * 1, // 1 hour
        })
        updateTokenApiClient({ api: api, token: data.token })
        setUser({
            id: data.user.id,
            name: data.user.name,
            avatar_url: data.user.avatar_url,
            type: data.user.type,
        })
    }

    function signOut(): void {
        destroyCookie(null, '@exame:token')
        destroyCookie(null, '@exame:user')
        setUser(null)
    }

    return (
        <AuthContext.Provider
            value={{ user, isAuthenticated, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}
