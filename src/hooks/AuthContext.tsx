import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react'
import { api } from '../services/api'
import { useRouter } from 'next/router'
import { setCookie, parseCookies } from 'nookies'
import permissionRoutesConfig from '../config/permissionRoutes'

interface IAuthContextData {
    user: IUser | null
    signIn(data: ISignInDTO): Promise<void>
}

interface IAuthProviderProps {
    children: ReactNode
}

interface IUser {
    id: number
    name: string
    token: string
    avatar_url: string | null
}

interface ISignInDTO {
    email: string
    password: string
}

interface ISignUpDTO {
    name: string
    email: string
    password: string
}

export const AuthContext = createContext({} as IAuthContextData)

export function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUser | null>(null)
    const router = useRouter()

    useEffect(() => {
        async function getUserData() {
            const { '@exame:token': token } = parseCookies()
            if (token) {
                const response = await api.get('/profile')
                const data = await response.data
                setUser({
                    id: data.id,
                    name: data.name,
                    token: token,
                    avatar_url: data.avatar_url
                })
            }
        }
        getUserData()
    }, [])

    async function signIn({ email, password }: ISignInDTO): Promise<void> {
        const response = await api.post('/sessions', { email, password })
        const data = response.data

        setUser({
            id: data.user.id,
            name: data.user.name,
            token: data.token,
            avatar_url: data.avatar_url
        })

        setCookie(undefined, '@exame:token', data.token, {
            maxAge: 60 * 60 * 24, //1 dia
        })
    }

    async function signUp({
        name,
        email,
        password,


    }: ISignUpDTO): Promise<void> {}

    async function signOut() {
        localStorage.clear()
    }

    return (
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}
