import { Formik, Form, Field, ErrorMessage } from 'formik'
import validation from './validation'

export default function FormLogin() {
    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={handleSubmit}
                validate={validation}
            >
                <Form>

                    <Field name='email' type='email' placeholder='Email' />
                    <ErrorMessage name='email'/>

                    <Field name='password' type='password' placeholder='Password' />
                    <ErrorMessage name='password'/>

                </Form>
            </Formik>
        </div>
    )
}