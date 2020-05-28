import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import { clearErrors } from '../../flux/actions/error-actions'
import { login } from '../../flux/actions/auth-actions'

function LoginModal() {
  const [modal, setModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState(null)

  const error = useSelector((state) => state.error)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email,
      password,
    }

    dispatch(login(user))
  }

  useEffect(() => {
    if (error.id === 'LOGIN_FAIL') {
      setMsg(error.msg)
    } else {
      setMsg(null)
    }
  }, [error])

  return (
    <>
      <NavLink
        onClick={() => {
          setModal(!modal)
        }}
        href="#"
      >
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Login</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
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
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default LoginModal
