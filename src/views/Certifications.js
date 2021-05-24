import React, { useState } from 'react'
import { MoreVertical, Edit, Trash } from 'react-feather'
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  ModalFooter
} from 'reactstrap'
import { Link } from 'react-router-dom'

const TableHoverAnimation = () => {
  const [basicModal, setBasicModal] = useState(false)

  return (
    <div>
      <Row className='match-height mb-2'>
        <Col sm='12' className='text-right'>
          <div className=''>
            <Button.Ripple
              color='primary'
              outline
              onClick={() => setBasicModal(!basicModal)}
            >
              Apply For Certification
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
                <Label for='select-custom'>Select Certification</Label>
                <Input type='select' name='select' id='select-basic'>
                  <option>Access Control</option>
                  <option>Asset Management</option>
                  <option>Audit and Accountability</option>
                  <option>Awareness and Training</option>
                  <option>Configuration Management</option>
                  <option>Identification and Authentication</option>
                  <option>Incident Response</option>
                  <option>Maintenance</option>
                  <option>Media Protection</option>
                  <option>Personnel Security</option>
                  <option>Physical Protection</option>
                  <option>Recovery</option>
                  <option>Risk Management</option>
                  <option>Security Assessment</option>
                  <option>Situational Awareness</option>
                  <option>System and Communications Protection</option>
                  <option>System and Information Integrity</option>
                </Input>
              </div>
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
                  <Link to='/assessment-form' className='text-white'>
                    Proceed
                  </Link>
                </Button>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
      <Table className='table-hover-animation' responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Submitted Date</th>
            <th>Approval Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className='align-middle font-weight-bold'>
                Access Control
              </span>
            </td>
            <td>10/10/2021</td>
            <td>10/10/2021</td>
            <td>
              <Badge pill color='light-primary' className='mr-1'>
                In review
              </Badge>
            </td>
            <td>
              <UncontrolledDropdown>
                <DropdownToggle
                  className='icon-btn hide-arrow'
                  color='transparent'
                  size='sm'
                  caret
                >
                  <MoreVertical size={15} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/' onClick={(e) => e.preventDefault()}>
                    <Edit className='mr-50' size={15} />{' '}
                    <span className='align-middle'>Edit</span>
                  </DropdownItem>
                  <DropdownItem href='/' onClick={(e) => e.preventDefault()}>
                    <Trash className='mr-50' size={15} />{' '}
                    <span className='align-middle'>Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </td>
          </tr>
          <tr>
            <td>
              <span className='align-middle font-weight-bold'>10/08/2021</span>
            </td>
            <td>10/07/2021</td>
            <td>10/07/2021</td>
            <td>
              <Badge pill color='light-success' className='mr-1'>
                Approved
              </Badge>
            </td>
            <td>
              <UncontrolledDropdown>
                <DropdownToggle
                  className='icon-btn hide-arrow'
                  color='transparent'
                  size='sm'
                  caret
                >
                  <MoreVertical size={15} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/' onClick={(e) => e.preventDefault()}>
                    <Edit className='mr-50' size={15} />{' '}
                    <span className='align-middle'>Edit</span>
                  </DropdownItem>
                  <DropdownItem href='/' onClick={(e) => e.preventDefault()}>
                    <Trash className='mr-50' size={15} />{' '}
                    <span className='align-middle'>Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </td>
          </tr>
          <tr>
            <td>
              <span className='align-middle font-weight-bold'>06/10/2021</span>
            </td>
            <td>20/10/2021</td>
            <td>20/10/2021</td>
            <td>
              <Badge pill color='light-danger' className='mr-1'>
                Rejected
              </Badge>
            </td>
            <td>
              <UncontrolledDropdown>
                <DropdownToggle
                  className='icon-btn hide-arrow'
                  color='transparent'
                  size='sm'
                  caret
                >
                  <MoreVertical size={15} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/' onClick={(e) => e.preventDefault()}>
                    <Edit className='mr-50' size={15} />{' '}
                    <span className='align-middle'>Edit</span>
                  </DropdownItem>
                  <DropdownItem href='/' onClick={(e) => e.preventDefault()}>
                    <Trash className='mr-50' size={15} />{' '}
                    <span className='align-middle'>Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </td>
          </tr>
          <tr>
            <td>
              <span className='align-middle font-weight-bold'>20/01/2021</span>
            </td>
            <td>20/02/2021</td>
            <td>20/02/2021</td>
            <td>
              <Badge pill color='light-warning' className='mr-1'>
                Pending
              </Badge>
            </td>
            <td>
              <UncontrolledDropdown>
                <DropdownToggle
                  className='icon-btn hide-arrow'
                  color='transparent'
                  size='sm'
                  caret
                >
                  <MoreVertical size={15} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/' onClick={(e) => e.preventDefault()}>
                    <Edit className='mr-50' size={15} />{' '}
                    <span className='align-middle'>Edit</span>
                  </DropdownItem>
                  <DropdownItem href='/' onClick={(e) => e.preventDefault()}>
                    <Trash className='mr-50' size={15} />{' '}
                    <span className='align-middle'>Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default TableHoverAnimation
