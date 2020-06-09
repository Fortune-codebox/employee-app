import Vue from 'vue'
import Router from 'vue-router'
import EmployeesOverview from '../pages/employees/employees-overview/EmployeesOverview.vue'
import EditEmployee from '../pages/employees/edit-employee/EditEmployee.vue';
import AddEmployee from '../pages/employees/edit-employee/EditEmployee.vue'

Vue.use(Router);
let router = new Router({
    mode: 'history',
    routes: [
       {
        path: '/',
        component: () => import('../pages/layout/Layout.vue'),
        redirect: {
            name: 'employees-overview'
        },
        children: [
            {
                path: '/all-employees',
                name: 'employees-overview',
                component: EmployeesOverview
            },

            {
                path: '/edit-employee/:employeeId',
                name: 'edit-employee',
                component: EditEmployee
            },
            {
                path: '/add-employee',
                name: 'add-employee',
                component: AddEmployee
            }
        ]

       }]
});

export default router;