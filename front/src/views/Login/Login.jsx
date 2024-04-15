import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateLogin } from "../../helpers/validateLogin";
import { useState } from "react";
import axios from "axios";
import styles from "../../styles/Login/Register.module.css";

const Login = () => {

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    return (
        <Formik
            initialValues={form}
            validate={validateLogin}
            onSubmit={(form,{setSubmitting, resetForm }) => {
                const fetchLoginData = async () => {
                    try {
                        const response = await axios.post("http://localhost:4040/users/login", form)
                        resetForm();
                        alert("Usuario logueado con éxito");
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
                <p>¿No tienes una cuenta? <a href="/front/src/views/Login/Register.jsx">Registrate Aqui</a></p>
            </Form>
            )}

        </Formik>
    );
};

export default Login;