const Feature = ({ iconClass, title, description }) => {
  return (
    <>
      <div className="icon me-4 align-self-start">
        <i className={`fa-solid ${iconClass}`}></i>
      </div>
      <div className="text">
        <h2 className="text-uppercase">{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Feature;
