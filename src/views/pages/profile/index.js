import { Fragment } from 'react'
import ProfileHeader from './ProfileHeader'
import { Row, Col } from 'reactstrap'

import '@styles/react/pages/page-profile.scss'

const Profile = () => {
  const data = {
    profileData: {
      header: {
        avatar: require('@src/assets/images/portrait/small/avatar-s-2.jpg')
          .default,
        username: 'Kitty Allanson',
        designation: 'UI/UX Designer',
        coverImg:
          require('@src/assets/images/profile/user-uploads/timeline.jpg')
            .default
      },
      userAbout: {
        about:
          'Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love jujubes. Topping cake wafer.',
        joined: 'November 15, 2015',
        lives: 'New York, USA',
        email: 'bucketful@fiendhead.org',
        website: 'www.pixinvent.com'
      }
    }
  }

  return (
    <Fragment>
      {data !== null ? (
        <div id='user-profile'>
          <Row>
            <Col sm='12'>
              <ProfileHeader
                data={data.profileData.header}
                aboutdata={data.profileData.userAbout}
              />
            </Col>
          </Row>
          <section id='profile-info'>
            <Row>
              <Col
                lg={{ size: 3, order: 1 }}
                sm={{ size: 12 }}
                xs={{ order: 2 }}
              ></Col>
            </Row>
          </section>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Profile
