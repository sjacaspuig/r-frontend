import { Field, useField } from 'formik';

import styles from '../ContactModal.module.scss';

const Checkbox = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={className}>
      <label className={styles.label} htmlFor={props.id || props.name}>
        <Field {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null}
    </div>
  );
};

export default Checkbox;
