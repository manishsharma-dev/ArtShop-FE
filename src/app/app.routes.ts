import { Routes } from "@angular/router";
import { authGuard } from "./shared/guards/auth/auth.guard";
import { adminAuthGuard } from "./shared/guards/auth/admin-auth.guard";

export const routes: Routes = [
  {
    path: "",
    canActivate: [authGuard],
    loadComponent: () => import("./pages/layout/layout.component").then(c => c.LayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./pages/dashboard/dashboard.component").then(c => c.DashboardComponent)
      }
    ]
  },
  {
    path: "login",
    loadComponent: () => import("./pages/login/login.component").then(c => c.LoginComponent)
  },
  {
    path : "admin",
    canActivate : [adminAuthGuard],
    loadComponent: () => import("./admin/layout/layout.component").then(c => c.LayoutComponent),
    children: [
      {
        path : "",
        loadComponent: () => import("./admin/dashboard/dashboard.component").then(c => c.DashboardComponent)
      }
    ]
  },
  {
    path : "admin/login",
    loadComponent: () => import("./admin/login/login.component").then(c => c.LoginComponent)
  }
];

// {
//   path : "dashboard",
//   loadComponent : () => import("./admin/dashboard/dashboard.component").then(c => c.DashboardComponent)
// }
