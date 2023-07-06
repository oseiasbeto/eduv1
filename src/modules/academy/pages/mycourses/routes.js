export default [
    {
        name: 'Meus cursos - Eduka',
        path: '/epanel/mycourses',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]