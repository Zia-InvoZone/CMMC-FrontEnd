import { FileText, Home } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'secondPage',
    title: 'Certifications',
    icon: <FileText size={20} />,
    navLink: '/certifications'
  }
]
