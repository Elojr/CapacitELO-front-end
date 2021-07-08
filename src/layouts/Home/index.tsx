import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'
import Link from 'next/link'
import { parseCookies, destroyCookie } from 'nookies'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

interface ISubjects {
    id: number
    subject_name: string
}

interface IResponse {
    subjects: ISubjects[]
    count: number
}

function Home() {
    const [materias, setMaterias] = useState<ISubjects[]>([])
    const router = useRouter()
    const cookies = parseCookies()
    const token = cookies['@exame:token']

    async function request() {
        try {
            const response = await api.get<IResponse>('/subjects', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = response.data
            setMaterias(data.subjects)
        } catch (err: any) {
            toast.error(err.response.data.message)
        }
    }

    function handleSignOut() {
        destroyCookie(undefined, '@exame:token')
        router.push('/login')
    }

    useEffect(() => {
        request()
    }, [])

    return (
        <Container>
            <main>
                <div className="home">

                    <div className="titles">
                        <h1>Matérias</h1>
                        <h2>Listagem das matérias</h2>
                        <button onClick={handleSignOut}>sair</button>
                    </div>
                    <select name="Filtro" defaultValue="recentes">
                        <option value="recentes">Mais recentes</option>
                        <option value="antigos">Mais antigos</option>
                        <option value="a-z">A - Z</option>
                        <option value="z-a">Z - A</option>
                    </select>

                    <div className="container-cards">
                        {materias.map(materia => {
                            return (
                                <Link
                                    href={`/materias/${materia.id}`}
                                    key={materia.id}
                                    passHref
                                >
                                    <a className="card">
                                        {materia.subject_name}
                                    </a>
                                </Link>
                            )
                        })}

                    </div>
                </div>
            </main>
        </Container>
    )
}

export default Home
