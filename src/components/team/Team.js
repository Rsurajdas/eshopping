const Team = ({ img, name, post, description }) => {
  return (
    <>
      <div className="block-38 text-center">
        <div className="block-38-img">
          <div className="block-38-header">
            <img src={img} alt={name} className="mb-4" />
            <h3 className="block-38-heading h4">{name}</h3>
            <p className="block-38-subheading">{post}</p>
          </div>
          <div className="block-38-body">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
