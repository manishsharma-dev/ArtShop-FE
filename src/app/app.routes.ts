import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        loadComponent : () => import("./pages/login/login.component").then(m => m.LoginComponent)
    },
    {
        path: "",
        loadComponent : () => import("./pages/layout/layout.component").then(m => m.LayoutComponent),
        children: [
            {
             path : "dashboard",
             loadComponent : () => import("./pages/dashboard/dashboard.component").then(m => m.DashboardComponent)
            },
            {
                path : "employee",
                loadComponent : () => import("./pages/employee/employee.component").then(m => m.EmployeeComponent)
            },
            {
                path : "projects",
                loadComponent : () => import("./pages/project/project.component").then(m => m.ProjectComponent) 
            },
            {
                path : "project-employee",
                loadComponent : () => import("./pages/project-employee/project-employee.component").then(m => m.ProjectEmployeeComponent)
            }
        ]
    }
];
