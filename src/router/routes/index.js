import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - CMMC Dashoard'

// ** Default Route
const DefaultRoute = '/Dashboard'

// ** Merge Routes
const Routes = [
  {
    path: '/Dashboard',
    component: lazy(() => import('../../views/Dashboard'))
  },
  {
    path: '/certifications',
    component: lazy(() => import('../../views/Certifications'))
  },
  {
    path: '/assessment-form',
    component: lazy(() => import('../../views/AssessmentForm'))
  },
  {
    path: '/pages/profile',
    component: lazy(() => import('../../views/pages/profile'))
  },
  {
    path: '/register',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/Register')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../views/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
