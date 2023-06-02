const FormInputs = ({ label, type, formName, require }) => {
  return (
    <>
      <label htmlFor={formName} className="text-black">
        {label} {require ? <span className="text-danger">*</span> : null}
      </label>
      {formName === "message" ? (
        <textarea
          name={formName}
          id={formName}
          cols="30"
          rows="7"
          className="form-control"
        ></textarea>
      ) : (
        <input
          type={type}
          className="form-control"
          id={formName}
          name={formName}
        />
      )}
    </>
  );
};

export default FormInputs;
