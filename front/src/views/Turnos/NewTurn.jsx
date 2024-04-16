import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import validateTurn from "../../helpers/validateTurn";
// import styles from "../../styles/Turn/newTurno.module.css"

const NewTurn = () => {

    const [form, setForm] = useState({
        date: "",
        time: "",
        user: ""
    });

    const navigate = useNavigate();

    return (
    <Formik
        initialValues={form}
        validate={validateTurn}
        onSubmit={(form, { setSubmitting, resetForm }) => {
            const fetchTurnData = async () => {
                try {
                    const response = await axios.post("http://localhost:4040/appointments/schedule", form)
                    resetForm();
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

        }}>

        {({ isSubmitting }) => (
        <Form >
            <h2>Turnos</h2>
            <div>
                <label>Date:</label>
                <Field type="date" name="date" />
                <ErrorMessage name="date" component="div" />
            </div>
            <div>
                <label>Time:</label>
                <Field type="time" name="time" />
                <ErrorMessage name="time" component="div" />
            </div>
            <div>
                <label>User:</label>
                <Field type="text" name="user" />
                <ErrorMessage name="user" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
    )}
    </Formik>
    );
};

export default NewTurn;