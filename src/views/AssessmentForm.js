import React from 'react'
import AssessmentPiChart from './Charts/AssessmentPiChart'
import { Row, Col, Card } from 'reactstrap'
import Grid from './Grid Table/Grid'

const AssessmentForm = () => {
  const p1labels = ['Processes', 'Blank']
  const p1series = [36, 64]
  const p2labels = ['Practices', 'Blank']
  const p2series = [44, 56]

  return (
    <div>
      <Row className='match-height'>
        <Col sm='12'>
          <h3 className='mb-2 p-1 bg-gradient-primary rounded'>
            Please fill your form and submit for review
          </h3>
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xl='5' sm='12'>
          <AssessmentPiChart
            plabels={p1labels}
            series={p1series}
            title='Processes Completed'
          />
        </Col>
        <Col xl='5' sm='12'>
          <AssessmentPiChart
            plabels={p2labels}
            series={p2series}
            title='Practices Implemented'
          />
        </Col>
        <Col xl='2' sm='12'>
          <Card className='p-1'>
            <div className='mt-2 text-center border'>
              <div className='bg-gradient-primary text-white fw-bold font-weight-bold font-small-3'>
                Name
              </div>
              <div className=''>Access Control</div>
            </div>

            <div className='mt-2 text-center border'>
              <div className='bg-gradient-primary text-white fw-bold font-weight-bold font-small-3'>
                Target
              </div>
              <div className=''>Level3</div>
            </div>
            <div className='mt-2 text-center border'>
              <div className='bg-gradient-primary text-white font-weight-bold  font-small-3'>
                Reference Family
              </div>
              <div className=''>UK NCSC</div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm='12'>
          <Card className='p-2'>
            <Grid />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AssessmentForm
