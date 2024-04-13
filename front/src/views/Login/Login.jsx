import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateLogin } from "../../helpers/validateLogin";
import axios from "axios";
import styles from "../../styles/Login/Register.module.css";
//import { Link } from "react-dom";

const Login = ({ onLogin }) => {

    return (
        <Formik
            initialValues={{
                username: "",
                password: ""
            }}
            validateLogin={validateLogin}
            onSubmit={(values,{setSubmitting, resetForm }) => {
                const fetchLoginData = async () => {
                    try {
                        const response = await axios.post("http://localhost:4040/users/login", values)
                        resetForm();
                        alert("Usuario logueado con éxito");
                        onLogin();
                        return response.data;
                    } catch(error){
                        alert("Datos incorrectos");
                        throw Error("Hubo un error al cargar datos", error);
                    } finally {
                        setSubmitting(false);
                    }
                }
                fetchLoginData();
            
            }}>

            {({ isValid, isSubmitting }) => (
            <Form className={styles.formContainer}>
                <h2 className={styles.title}>LOGIN</h2>
                <div>
                    <label>Username: </label>
                    <Field className={styles.formInput} type="text" name="username" placeholder="Username" />
                    <ErrorMessage name="username" component="div" style={{color: 'red'}}/>
                </div>
                <div>
                    <label>Password: </label>
                    <Field className={styles.formInput}  type="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password" component="div" style={{color: 'red'}}/>
                </div>
                <button type='submit' className={styles.formButton} disabled={!isValid || isSubmitting}>Login</button>
                <p>¿No tienes una cuenta? Registrate Aqui</p>
            </Form>
            )}

        </Formik>
    );
};

export default Login;