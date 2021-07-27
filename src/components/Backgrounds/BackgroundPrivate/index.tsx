import React, { HtmlHTMLAttributes } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Header, Nav } from './styles'
import { useAuth } from '../../../hooks/AuthContext'

interface BackgroundPrivateProps extends HtmlHTMLAttributes<HTMLDivElement> {}

function BackgroundPrivate({ children, ...props }: BackgroundPrivateProps) {
    const { signOut } = useAuth()
    const handleLogoutClick = React.useCallback(() => {
        signOut()
        Router.push('/')
    }, [signOut, Router])
    return (
        <>
            <Header>
                <Nav>
                    <Link href="/">
                        <a className="nav-image">
                            <img
                                src="/assets/images/logo/logo.svg"
                                alt="Exame"
                            />
                        </a>
                    </Link>
                    <div className="nav-menu">
                        <ul className="menu-list">
                            <Link href="/">
                                <a>
                                    <li>Matérias</li>
                                </a>
                            </Link>
                            <Link href="/perfil">
                                <a>
                                    <li>Perfil</li>
                                </a>
                            </Link>
                        </ul>
                        <div className="menu-profile">
                            <div className="profile-image">
                                <img src="/assets/icons/public/user.svg" />
                            </div>
                            <div className="profile-credentials">
                                <h3>João Seilá</h3>
                                <h4>Aluno</h4>
                            </div>
                            <button
                                className="profile-logout"
                                onClick={handleLogoutClick}
                            >
                                <img
                                    src="/assets/icons/public/logout.svg"
                                    alt="João Seila"
                                />
                            </button>
                        </div>
                    </div>
                </Nav>
            </Header>
            {children}
        </>
    )
}

export default BackgroundPrivate
