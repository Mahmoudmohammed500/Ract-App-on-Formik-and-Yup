import { useFormik } from 'formik';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { SignupSchema } from '../Util/validationSchema';
const Emails = ['mahmoudmohammed@gmail.com', 'mahmoudmohammed123@gmail.com', 'mahmoudmohammed2652001@gmail.com'];
function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    validateOnChange: true,
    validateOnBlur: true,  // to show error message after bluring field shouid use validateOnChange: true with it
    onSubmit: (values, formikHelper) => {
      // Check if the entered email is already and show message error
      if (Emails.find((email) => email.includes(values.email))) {
        formikHelper.setFieldError("email", "This email is already exist")
      } else {
        alert(JSON.stringify(values, null, 2));
      }
    },
  });
  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col xs={6}>

          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                First Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type='text'
                  name='firstName'
                  onChange={formik.handleChange}  // we can replace formik.handleChange with custom inputhandeler
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  isValid={!formik.errors.firstName && formik.touched.firstName}
                  isInvalid={formik.errors.firstName && formik.touched.firstName}
                  autoComplete="off"
                />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{formik.errors.firstName}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Last Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type='text'
                  name='lastName'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  isValid={!formik.errors.lastName && formik.touched.lastName}
                  isInvalid={formik.errors.lastName && formik.touched.lastName}
                  autoComplete="off"
                />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{formik.errors.lastName}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email Address
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  name='email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isValid={!formik.errors.email && formik.touched.email}
                  isInvalid={formik.errors.email && formik.touched.email}
                  autoComplete="off"
                />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            {// This Block of code solve chrome borowser saving password when user gowing another page without submit
              <div style={{ display: "none" }}>
                <input type="password" name="hidden-password" />
              </div>}
            <Form.Group controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  name='password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isValid={!formik.errors.password && formik.touched.password}
                  isInvalid={formik.errors.password && formik.touched.password}
                />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group controlId="formPlaintextPassword">
              <Form.Label column sm="10">
                Confirm Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  name='confirmPassword'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  isValid={!formik.errors.confirmPassword && formik.touched.confirmPassword}
                  isInvalid={formik.errors.confirmPassword && formik.touched.confirmPassword}
                />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{formik.errors.confirmPassword}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Button type="submit" className="mt-3" variant="primary" size="md">Register</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Register;
