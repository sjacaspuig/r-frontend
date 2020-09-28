import { Field, useField } from 'formik';

import styles from '../ContactModal.module.scss';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <Field {...field} {...props} />
      {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null}
    </div>
  );
};

export default Input;
