import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    background-color: var(--color-white);
    box-shadow: 0px 4px 16px -3px rgba(0, 0, 0, 0.25);
`
export const Nav = styled.nav`
    max-width: calc(var(--size-grid-width) + 2 * var(--size-padding-mobile));
    width: 100%;
    margin: 0 auto;
    padding: 15px var(--size-padding-mobile);

    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-menu {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .menu-list {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;

            a {
                display: block;
                font-family: 'Poppins';
                font-weight: normal;
                font-size: 24px;
                line-height: 36px;
                text-align: center;
                color: var(--color-black);
                text-decoration: none;
                transition: all 0.1s linear;

                &:hover {
                    color: #b1b1b1;
                }
                & + a {
                    margin-left: 60px;
                }
            }
        }

        .menu-profile {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 60px;

            .profile-image {
                width: 64px;
                height: 64px;
                img {
                    width: 100%;
                }
            }
            .profile-credentials {
                margin-left: 7px;
                h3 {
                    cursor: default;
                    display: block;
                    margin: 0px;
                    font-family: 'Poppins';
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 36px;
                    text-align: center;
                    color: var(--color-black);
                    line-height: 25px;
                }
                h4 {
                    cursor: default;
                    display: block;
                    margin: 0px;
                    font-family: Poppins;
                    font-weight: normal;
                    font-size: 18px;
                    color: var(--color-black);
                }
            }
            .profile-logout {
                cursor: pointer;
                border: none;
                background-color: transparent;
                padding: 10px 20px;
                margin-right: -20px;
            }
        }
    }
`
