import {
  Field,
  ErrorMessage,
  connect,
  getIn,
} from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FieldBoxComp({
  label, name, type, tip, children, busy, className, ...rest
}) {
  if (type === 'select' && !children) {
    return <></>;
  }

  const error = getIn(rest.formik.errors, name);
  const touch = getIn(rest.formik.touched, name);

  return (
    <div className={`${error && touch ? 'invalid-field' : ''} ${className || 'col-md-12 mb-3'}`}>
      <label htmlFor={name}>
        {`${label}: `}
        {tip && <span className="field--tip">{`(${tip})`}</span>}
      </label>
      {type === 'select'
        ? (
          <Field {...rest} as="select" type={type} name={name} id={name} className="form-control">
            {children}
          </Field>
        )
        : <Field {...rest} type={type} name={name} id={name} className="form-control" />}
      {busy && <span className="input-busy"><FontAwesomeIcon icon="fa-spin fa-spinner" /></span>}
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
}

export const FieldBox = connect(FieldBoxComp);
