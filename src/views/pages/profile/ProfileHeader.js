import { useState } from 'react'
import { AlignJustify, Info, Settings, Lock } from 'react-feather'
import {
  Card,
  CardImg,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button,
  TabContent,
  TabPane
} from 'reactstrap'
import ProfileAbout from './ProfileAbout'
import ChangePasswordTab from './ChangePasswordTab'

const ProfileHeader = ({ data, aboutdata }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('1')

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Card className='profile-header mb-2'>
        <CardImg src={data.coverImg} alt='User Profile Image' top />
        <div className='position-relative'>
          <div className='profile-img-container d-flex align-items-center'>
            <div className='profile-img'>
              <img
                className='rounded img-fluid'
                src={data.avatar}
                alt='Card image'
              />
            </div>
            <div className='profile-title ml-3'>
              <h2 className='text-white'>{data.username}</h2>
              <p className='text-white'>{data.designation}</p>
            </div>
          </div>
        </div>
        <div className='profile-header-nav'>
          <Navbar
            className='justify-content-end justify-content-md-between w-100'
            expand='md'
            light
          >
            <Button
              color=''
              className='btn-icon navbar-toggler'
              onClick={toggle}
            >
              <AlignJustify size={21} />
            </Button>
            <Collapse isOpen={isOpen} navbar>
              <div className='profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
                <Nav className='mb-0' pills>
                  <NavItem>
                    <NavLink
                      className='font-weight-bold'
                      active={active === '1'}
                      onClick={() => {
                        setActive('1')
                      }}
                    >
                      <span className='d-none d-md-block'>About</span>
                      <Info className='d-block d-md-none' size={14} />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='font-weight-bold'
                      active={active === '2'}
                      onClick={() => {
                        setActive('2')
                      }}
                    >
                      <span className='d-none d-md-block'>Change Password</span>
                      <Lock className='d-block d-md-none' size={14} />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='font-weight-bold'
                      active={active === '3'}
                      onClick={() => {
                        setActive('3')
                      }}
                    >
                      <span className='d-none d-md-block'>Settings</span>
                      <Settings className='d-block d-md-none' size={14} />
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Collapse>
          </Navbar>
        </div>
      </Card>

      <Card className='p-2'>
        <TabContent className='py-50' activeTab={active}>
          <TabPane tabId='1'>
            <ProfileAbout data={aboutdata} />
          </TabPane>
          <TabPane tabId='2'>
            <ChangePasswordTab />
          </TabPane>
          <TabPane tabId='3'>
            <h4>Settings</h4>
          </TabPane>
        </TabContent>
      </Card>
    </div>
  )
}

export default ProfileHeader
