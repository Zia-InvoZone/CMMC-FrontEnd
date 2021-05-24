import { Settings, Home, Copy } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'secondPage',
    title: 'Settings',
    icon: <Settings size={20} />,
    navLink: '/settings'
  },
  {
    id: 'form',
    title: 'Assessment Form',
    icon: <Copy size={20} />,
    navLink: '/assessment-form'
  }
]
