const Address = ({ location, addressDetail }) => {
  return (
    <div className="p-4 border mb-3">
      <span className="d-block text-primary h6 text-uppercase">{location}</span>
      <p className="mb-0">{addressDetail}</p>
    </div>
  );
};

export default Address;
