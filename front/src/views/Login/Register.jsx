import {Form, Formik,Field, ErrorMessage} from "formik";
import { useState } from "react";
import { validateRegister } from "../../helpers/validateRegister";
import styles from "../../styles/Login/Register.module.css"
import axios from "axios";
import { Link } from "react-router-dom";


const Register = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: ""
    });
    return (
        <div className={styles.back}>
            <Formik
            initialValues={form}
            validate={validateRegister}
            onSubmit={(form,{setSubmitting, resetForm }) => {
                const fetchRegisterData = async () => {
                    try {
                        const response = await axios.post("http://localhost:3000/users/register", form)
                        resetForm();
                        alert("Usuario registrado con éxito");
                        return response.data;
                    } catch(error){
                        alert("Hubo un error al cargar datos");
                        throw Error("Hubo un error al cargar datos", error);
                    } finally {
                        setSubmitting(false);
                    }
                }
                fetchRegisterData();
            
            }}>

            {({ isValid, isSubmitting }) => (
            <Form className={styles.formContainer}>
                <h2 className={styles.title}>REGISTER</h2>
                <div>
                    <label>Name: </label>
                    <Field className={styles.formInput} type="text" name="name" placeholder="Nombre y Apellido" />
                    <ErrorMessage name="name" component="div" style={{color: 'red'}}/>
                </div>
                <div>
                    <label>Email: </label>
                    <Field className={styles.formInput} type="text" name="email" placeholder="example@mail.com" />
                    <ErrorMessage name="email" component="div" style={{color: 'red'}}/>
                </div>
                <div>
                    <label>Birth: </label>
                    <Field className={styles.formInput} type="date" name="birthdate" placeholder="1990-01-01" />
                    <ErrorMessage name="birthdate" component="div" style={{color: 'red'}}/>
                </div>
                <div>
                    <label>DNI: </label>
                    <Field className={styles.formInput} type="number" name="nDni" placeholder="12345678" />
                    <ErrorMessage name="nDni" component="div" style={{color: 'red'}}/>
                </div>
                <div>
                    <label>User: </label>
                    <Field className={styles.formInput} type="text" name="username" placeholder="username1" />
                    <ErrorMessage name="username" component="div" style={{color: 'red'}}/>
                </div>
                <div>
                    <label>Password: </label>
                    <Field className={styles.formInput} type="password" name="password" placeholder="********" />
                    <ErrorMessage name="password" component="div" style={{color: 'red'}}/>
                </div>
                <button type='submit'  className={styles.formButton} disabled={!isValid || isSubmitting} >Submit</button>
                <p><Link to={"/login"} style={{ textDecoration: 'none', color: 'inherit' }}>Ir a Login</Link></p>
                
            </Form>
            )}

        </Formik>
        </div>
        
    );
    };

export default Register;