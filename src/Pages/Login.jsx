import { useFormik } from 'formik';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { LoginSchema } from '../Util/validationSchema';
//let incomingEmail = 'mahmoudmohammed@gmail.com';
function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',  // incomingEmail ? incomingEmail : '',  use this statement to pass incomingemail value from api or other way
      password: '',
    },
    //enableReinitialize: true, // you shouid write this statement to handle showing the passed intialvalues
    validationSchema: LoginSchema,
    validateOnChange: true,
    validateOnBlur: true,  // to show error message after bluring field shouid use validateOnChange: true with it
    // validateOnMount:true,  to show error message when log in component render but you shoud formik.touched conditional rendering stsement
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  /*   //This method is a custom change handeler on form inputs
 const inputhandeler = (e) => {
  By the next block of code we can make any action or fire api when email field value or any field value changes
   if(e.target.name === "email"){
     console.log("Fire api or do any thing")
   }
  formik.handleChange(e)
///////////////////////////////////////////////////////////////////////
// another useage for this method
By the next block of code we can make any manpulation on any field value
  let value = e.target.value; // do the manpoulation here
  formik.setfieldValue(e.target.name,e.target.value)
 }
 */

  /*   You can use the next block of code to daispatch redux action or nourmal event if have a validation error
    useEffect(() => {
      if (Object.keys(formik.errors).length > 0) {
        console.log(formik.errors) // write your dispatch statement or action here
      }
    }, [formik])
    */

  /*  The next block of code is another way to passing intial value to form from formik  
 useEffect(()=> {
  if(!formik.values.email){
   formik.setFieldValue("email","mahmoudmohammed@gmail.com") // value might be dynamic or api data 
  }
 },[formik])
 */
  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col xs={6}>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email Address
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  name='email'
                  onChange={formik.handleChange}  // we can replace formik.handleChange with custom inputhandeler
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isValid={!formik.errors.email && formik.touched.email}
                  isInvalid={formik.errors.email && formik.touched.email}
                />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            { // This Block of code solve chrome borowser saving password when user gowing another page without submit
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
                  isValid={formik.touched.password && !formik.errors.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Button type='submit' className="mt-3" variant="primary" size="md">Log in</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Login;
