import { getApiClient } from '../apiClient'

import { CREATE_SESSION } from './Sessions'
import { CREATE_USER } from './Users'
import { RESET_PASSWORD, SEND_EMAIL_FORGOT_PASSWORD } from './Passwords'
import { LIST_SUBJECTS } from './Subjects'

const baseURL = 'http://localhost:3333/v1'

const api = getApiClient({ baseURL })

export {
    api,
    baseURL,
    // SESSION
    CREATE_SESSION,
    // USER
    CREATE_USER,
    // PASSWORD
    RESET_PASSWORD,
    SEND_EMAIL_FORGOT_PASSWORD,
    // SUBJECTS
    LIST_SUBJECTS,
}
