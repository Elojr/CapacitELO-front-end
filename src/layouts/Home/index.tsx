import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'
import Link from 'next/link'

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

    async function request() {
        const response = await api.get<IResponse>('/subjects', {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjU1OTczMzYsImV4cCI6MTYyNTY4MzczNiwic3ViIjoiMSJ9.pxhucipHY_u5kdYwFgxJEzsk31wjHvzFLiMSoQzzvVQ',
            },
        })
        const data = response.data
        setMaterias(data.subjects)
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
