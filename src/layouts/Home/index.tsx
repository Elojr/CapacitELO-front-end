import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { api, LIST_SUBJECTS } from '../../services/api'
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
    const [materias, setMaterias] = React.useState<ISubjects[]>([])
    async function getSubjects() {
        try {
            const response = await api(LIST_SUBJECTS({}))
            const data = response.data as IResponse
            setMaterias(data.subjects)
        } catch (err) {
            console.log({ ...err })
        }
    }
    React.useEffect(() => {
        getSubjects()
    }, [])
    return (
        <Container>
            <div className="materias-title">
                <div className="title">
                    <h1>Matérias</h1>
                    <h2>Listagem de matérias</h2>
                </div>
                <div className="title-filters"></div>
            </div>
            <div className="materias-content">
                {materias.length > 0 &&
                    materias.map(item => (
                        <button className="content-card" key={item.id}>
                            <h3>{item.subject_name}</h3>
                        </button>
                    ))}
            </div>
        </Container>
    )
}

export default Home
