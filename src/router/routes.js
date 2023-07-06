import { routes as authentication } from '../modules/authentication'
import { routes as users } from '../modules/users'
import { routes as academy } from '../modules/academy'

export default [
    ...authentication,
    ...users,
    ...academy
]