import React, { useState, useEffect } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors } from '../../flux/actions/error-actions'
import { register } from '../../flux/actions/auth-actions'
import { REGISTER_FAIL } from '../../flux/actions/types'

function RegisterModal() {
  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState(null)

  const error = useSelector((state) => state.error)

  const dispatch = useDispatch()

  const toggle = () => {
    if (error.id === 'REGISTER_FAIL') {
      dispatch(clearErrors())
    }
    setModal(!modal)
  }

  useEffect(() => {
    if (error.id === 'REGISTER_FAIL') {
      setMsg(error.msg)
    } else {
      setMsg(null)
    }
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      name,
      email,
      password,
    }

    dispatch(clearErrors)
    dispatch(register(newUser))
  }

  return (
    <>
      <NavLink onClick={toggle} href="#">
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={(e) => setName(e.target.value)}
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button color="dark" style={{ marginTop: '2rem' }} block>
              Register
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default RegisterModal
