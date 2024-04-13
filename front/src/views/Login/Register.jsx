import {Form, Formik,Field, ErrorMessage} from "formik";
import { validateRegister } from "../../helpers/validateRegister";
import styles from "../../styles/Login/Register.module.css"
import axios from "axios";


const Register = () => {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                birthdate: "",
                nDni: "",
                username: "",
                password: ""
            }}
            validateRegister={validateRegister}
            onSubmit={(values,{setSubmitting, resetForm }) => {
                const fetchRegisterData = async () => {
                    try {
                        const response = await axios.post("http://localhost:4040/users/register", values)
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
                
            </Form>
            )}

        </Formik>
    );
    };

export default Register;