import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

type RoutesType = 'public' | 'private'

export const authRoutesHandler = (
    routeType: RoutesType,
    callback?: GetServerSideProps
): GetServerSideProps => {
    return async (ctx: GetServerSidePropsContext) => {
        const { '@exame:token': token } = parseCookies(ctx)
        const isPrivate = routeType === 'private'

        if (!!token === isPrivate) {
            if (!callback) {
                return {
                    props: {},
                }
            }
            return await callback(ctx)
        }

        if (isPrivate) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
        }
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
}
