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
        const cookies = parseCookies()
        const token = cookies['@exame:token']

        if (!token) {
            permissionRoutesConfig.public.forEach(route => {})
            router.push('/login')
            return
        }
    }, [])

    async function signIn({ email, password }: ISignInDTO): Promise<void> {
        const response = await api.post('/sessions', { email, password })
        const data = response.data

        setUser({
            id: data.user.id,
            name: data.user.name,
            token: data.token,
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

export const getServerSideProps = (ctx: any) => {
    console.log(ctx)
    return {
        props: {}, // will be passed to the page component as props
    }
}
