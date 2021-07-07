import React from 'react'
import { Container } from './styles'
import Link from 'next/link'
import { api } from '../../services/api'

const Subject: React.FC = () => {
    return (
        <Container>
            <main>
                <div className="home">
                    <div className="titles">
                        <h1></h1>
                        <h2></h2>
                    </div>
                    <select name="Filtro" defaultValue="recentes">
                        <option value="recentes">Mais recentes</option>
                        <option value="antigos">Mais antigos</option>
                        <option value="a-z">A - Z</option>
                        <option value="z-a">Z - A</option>
                    </select>
                </div>
            </main>
        </Container>
    )
}

export default Subject
