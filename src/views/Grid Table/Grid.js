import React, { useState } from 'react'
import { Input, Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Check } from 'react-feather'

const Grid = () => {
  const [basicModal, setBasicModal] = useState(false)
  return (
    <div className=''>
      <Table>
        <thead className=''>
          <tr>
            <th className=''>ID</th>
            <th className=''>Level</th>
            <th className=''>Description</th>
            <th className=''>Process Maturity Level</th>
            <th className=''>Practice Status</th>
            <th className=''>SSP (Notes)</th>
          </tr>
        </thead>
        <tbody className=''>
          <tr>
            <td className='flex-grow-1 text-center'>AC.1.001</td>
            <td className='flex-grow-1 text-center'>1</td>
            <td className='flex-grow-1 text-center'>
              Limit information system access to authorized users, processes
              acting on behalf of authorized users, or devices (including other
              information systems).
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='select'>
                <option>1: Performed</option>
                <option>2: Documented</option>
                <option>3: Managed</option>
                <option>4: Measured</option>
                <option>5: Optimized</option>
              </Input>
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='select'>
                <option>Not Implemented</option>
                <option>Partially Implemented</option>
                <option>Fully Implemented</option>
              </Input>
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='text' />
            </td>
          </tr>
          <tr>
            <td className='flex-grow-1 text-center'>AC.1.001</td>
            <td className='flex-grow-1 text-center'>1</td>
            <td className='flex-grow-1 text-center'>
              Limit information system access to authorized users, processes
              acting on behalf of authorized users, or devices (including other
              information systems).
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='select'>
                <option>1: Performed</option>
                <option>2: Documented</option>
                <option>3: Managed</option>
                <option>4: Measured</option>
                <option>5: Optimized</option>
              </Input>
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='select'>
                <option>Not Implemented</option>
                <option>Partially Implemented</option>
                <option>Fully Implemented</option>
              </Input>
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='text' />
            </td>
          </tr>
          <tr>
            <td className='flex-grow-1 text-center'>AC.1.001</td>
            <td className='flex-grow-1 text-center'>1</td>
            <td className='flex-grow-1 text-center'>
              Limit information system access to authorized users, processes
              acting on behalf of authorized users, or devices (including other
              information systems).
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='select'>
                <option>1: Performed</option>
                <option>2: Documented</option>
                <option>3: Managed</option>
                <option>4: Measured</option>
                <option>5: Optimized</option>
              </Input>
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='select'>
                <option>Not Implemented</option>
                <option>Partially Implemented</option>
                <option>Fully Implemented</option>
              </Input>
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='text' />
            </td>
          </tr>
          <tr>
            <td className='flex-grow-1 text-center'>AC.1.001</td>
            <td className='flex-grow-1 text-center'>1</td>
            <td className='flex-grow-1 text-center'>
              Limit information system access to authorized users, processes
              acting on behalf of authorized users, or devices (including other
              information systems).
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='select'>
                <option>1: Performed</option>
                <option>2: Documented</option>
                <option>3: Managed</option>
                <option>4: Measured</option>
                <option>5: Optimized</option>
              </Input>
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='select'>
                <option>Not Implemented</option>
                <option>Partially Implemented</option>
                <option>Fully Implemented</option>
              </Input>
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='text' />
            </td>
          </tr>
          <tr>
            <td className='flex-grow-1 text-center'>AC.1.001</td>
            <td className='flex-grow-1 text-center'>1</td>
            <td className='flex-grow-1 text-center'>
              Limit information system access to authorized users, processes
              acting on behalf of authorized users, or devices (including other
              information systems).
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='select'>
                <option>1: Performed</option>
                <option>2: Documented</option>
                <option>3: Managed</option>
                <option>4: Measured</option>
                <option>5: Optimized</option>
              </Input>
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='select'>
                <option>Not Implemented</option>
                <option>Partially Implemented</option>
                <option>Fully Implemented</option>
              </Input>
            </td>
            <td className='flex-grow-1 text-center'>
              <Input type='text' />
            </td>
          </tr>
        </tbody>
      </Table>
      <div className='text-right'>
        <Button.Ripple
          color='primary'
          onClick={() => setBasicModal(!basicModal)}
        >
          {' '}
          Submit For Review{' '}
        </Button.Ripple>
        <Modal
          isOpen={basicModal}
          toggle={() => setBasicModal(!basicModal)}
          className='modal-dialog-centered'
        >
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>
            Confirmation
          </ModalHeader>
          <ModalBody className='text-center'>
            <div className='bg-light-success p-2 d-inline-block rounded-circle'>
              <Check size={30} />
            </div>
            <div className='d-block my-1'>
              <h5>
                {' '}
                Your certification Request has been submitted successfully!
              </h5>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  )
}

export default Grid
