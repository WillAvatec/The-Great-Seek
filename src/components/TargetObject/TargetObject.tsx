function TargetObject({
  name,
  picture,
  handleClick,
}: {
  name: string;
  picture: string;
  handleClick?: Function;
}) {
  return (
    <div>
      <img src={picture} alt={"target-" + name} />
      <div className="target-info">
        <h4 className="target--name">{name}</h4>
      </div>
    </div>
  );
}

export default TargetObject;
