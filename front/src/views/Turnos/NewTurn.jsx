import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { validateTurn } from "../../helpers/validateTurn";
import styles from "../../styles/Turn/newTurno.module.css"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const NewTurn = () => {

    const user = useSelector((state) => state.userActive);


    const [form, setForm] = useState({
        date: "",
        time: "",
        description: "",
        user: user.id
    });

    const navigate = useNavigate();

    // useEffect(() => {
    //     if(form.date && !isWeekDay(form.date)){
    //         setErrors({
    //             ...errors,
    //             date: ""
    //         })
    //     }
    //     if(form.time && !isValidTime(form.time)){
    //         setErrors({
    //             ...errors,
    //             time: ""
    //         })
    //     } else {
    //         setErrors({
    //             ...errors,
    //             user: user.id
    //         })
    //     }
    // }, [form])


    return (
        <>
        <div className={styles.container} >
            <Formik
                initialValues={form}
                validate={validateTurn}
                onSubmit={(form, { setSubmitting, resetForm }) => {
                    const fetchTurnData = async () => {
                        try {
                            const response = await axios.post("http://localhost:3000/appointments/schedule", form)
                            resetForm();
                            console.log(response);
                            navigate("/appointments");
                            return response.data;
                        } catch (error) {
                            alert("Hubo un error al cargar datos");
                            throw Error("Hubo un error al cargar datos", error);
                        } finally {
                            setSubmitting(false);
                        }
                    }
                    fetchTurnData();
                }}
                >
                {({ isValid, isSubmitting }) => (
                    <Form className={styles.form}>
                    <h2>Crea cita nueva</h2>
                        <div>
                            <label>Date:</label>
                            <Field type="date" name="date" />
                            <ErrorMessage className={styles.error} name="date" component="div" />
                        </div>
                        <div>
                            <label>Time:</label>
                            <Field type="time" name="time" />
                            <ErrorMessage className={styles.error} name="time" component="div" />
                        </div>
                        <div>
                            <label>Description:</label>
                            <Field type="text" name="description" />
                            <ErrorMessage className={styles.error} name="description" component="div" />
                        </div>
                        <button type="submit" disabled={!isValid || isSubmitting}>Submit</button>
                    </Form>
                )
                }
                
                
            </Formik>
            
        </div>
        </>
    );
};

export default NewTurn;