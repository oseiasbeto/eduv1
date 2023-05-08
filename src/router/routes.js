import { routes as authentication } from '../modules/authentication'
import { routes as dashboard } from '../modules/dashboard'

export default [
    ...authentication,
    ...dashboard
]