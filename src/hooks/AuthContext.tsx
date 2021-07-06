import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react'
import { api } from '../services/api'
import router, { useRouter } from 'next/router'

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

export const AuthContext = createContext({} as IAuthContextData)

export function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUser | null>(null)
    const router = useRouter()

    useEffect(() => {
        const user = localStorage.getItem('@exame:user')

        if (!user) {
            router.push('/login')
            return
        }

        setUser(JSON.parse(user))
    }, [])

    async function signIn({ email, password }: ISignInDTO): Promise<void> {
        const response = await api.post('/sessions', { email, password })
        const data = response.data
        setUser({
            id: data.user.id,
            name: data.user.name,
            token: data.token,
        })
        localStorage.setItem(
            '@exame:user',
            JSON.stringify({
                id: data.user.id,
                name: data.user.name,
                token: data.token,
            })
        )
        console.log(data)
    }

    async function signOut() {}

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
