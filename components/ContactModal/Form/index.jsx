import { Form as FormikForm } from 'formik';

import Checkbox from './Checkbox';
import Input from './Input';
import styles from '../ContactModal.module.scss';

const Form = () => (
  <FormikForm>
    <Input className={styles.input} label="Nombre" name="firstname" type="text" />
    <Input className={styles.input} label="Apellidos" name="lastname" type="text" />
    <Input className={styles.input} label="Email" name="email" type="email" />
    <Input className={styles.textarea} label="Mensaje" name="message" as="textarea" />
    <Checkbox
      className={styles.checkbox}
      label="He leído y acepto los términos legales"
      type="checkbox"
      name="accept_terms"
    />
    <button className="button" type="submit">
      Enviar
    </button>
  </FormikForm>
);

export default Form;
