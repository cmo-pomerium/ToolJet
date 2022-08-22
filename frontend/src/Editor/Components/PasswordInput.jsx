import React from 'react';

export const PasswordInput = ({ height, validate, properties, styles, setExposedVariable }) => {
  const { visibility, disabledState, borderRadius } = styles;
  const placeholder = properties.placeholder;

  const [passwordValue, setPasswordValue] = React.useState('');
  const { isValid, validationError } = validate(passwordValue);

  React.useEffect(() => {
    setExposedVariable('isValid', isValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid]);

  return (
    <div>
      <input
        disabled={disabledState}
        onChange={(e) => {
          setPasswordValue(e.target.value);
          setExposedVariable('value', e.target.value);
        }}
        type={'password'}
        className={`form-control ${!isValid ? 'is-invalid' : ''} validation-without-icon`}
        placeholder={placeholder}
        value={passwordValue}
        style={{ height, display: visibility ? '' : 'none', borderRadius: `${borderRadius}px` }}
      />

      <div className="invalid-feedback">{validationError}</div>
    </div>
  );
};
