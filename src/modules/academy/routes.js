import { routes as dashboard } from './pages/dashboard'
import { routes as marketplace } from './pages/marketplace'
import { routes as balance } from './pages/balance'
import { routes as mycourses } from './pages/mycourses'

export default [
    ...dashboard,
    ...marketplace,
    ...balance,
    ...mycourses
]