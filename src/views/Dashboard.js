import { useState } from 'react'
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  ModalFooter
} from 'reactstrap'
import BarChart from './Charts/BarChart'
import PiChart from './Charts/PiChart'
import BarChart2 from './Charts/BarChart2'

const Home = () => {
  const [basicModal, setBasicModal] = useState(false)

  const labelColor = '#6e6b7b',
    tooltipShadow = 'rgba(0, 0, 0, 0.25)',
    gridLineColor = 'rgba(200, 200, 200, 0.2)',
    successColorShade = '#28dac6',
    successColorShade2 = '#2b9bf4'

  return (
    <div>
      <Row className='match-height mb-2'>
      <Col sm='12' className="text-right">
          <div className=''>
            <Button.Ripple
              color='primary'
              outline
              onClick={() => setBasicModal(!basicModal)}
            >
              Select Certification
            </Button.Ripple>
          </div>
          <Modal
            isOpen={basicModal}
            toggle={() => setBasicModal(!basicModal)}
            className='modal-dialog-centered'
          >
            <ModalHeader toggle={() => setBasicModal(!basicModal)}>
              Select Certification
            </ModalHeader>
            <ModalBody>
              <div className='mb-2'>
                <Label for='select-custom'>Target</Label>
                <Input type='select' name='select' id='select-basic'>
                  <option>Level 1</option>
                  <option>Level 2</option>
                  <option>Level 3</option>
                  <option>Level 4</option>
                  <option>Level 5</option>
                </Input>
              </div>
              <div className='mb-2'>
                <Label for='select-custom'>Reference Family</Label>
                <Input type='select' name='select' id='select-basic'>
                  <option>FAR Clause 52.204-21</option>
                  <option>NIST SP 800-171 Rev. 1</option>
                  <option>CIS Controls V7.1</option>
                  <option>NIST CSF v1.1</option>
                  <option>CERT RMM v1.2</option>
                  <option>NIST SP 800-53 Rev 4</option>
                  <option>AU ACSC</option>
                  <option>UK NCSC</option>
                </Input>
              </div>
              <ModalFooter>
                <Button
                  color='primary'
                  onClick={() => setBasicModal(!basicModal)}
                >
                  Accept
                </Button>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </Col>
        </Row>
      <Row className='match-height'>
        <Col xl='8' sm='12'>
          <BarChart
            successColorShade={successColorShade}
            successColorShade2={successColorShade2}
            labelColor={labelColor}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor}
          />
        </Col>
        <Col xl='4' lg='12'>
          <PiChart />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xl='4' lg='12'>
          <BarChart2
            successColorShade={successColorShade}
            successColorShade2={successColorShade2}
            labelColor={labelColor}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor}
          />
        </Col>
        
      </Row>
    </div>
  )
}

export default Home
