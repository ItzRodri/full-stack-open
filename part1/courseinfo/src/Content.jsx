import Part from "./Part.jsx";
const Content = ({
  parts1,
  parts2,
  parts3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <div>
      <Part part={parts1} exercises={exercises1} />
      <Part part={parts2} exercises={exercises2} />
      <Part part={parts3} exercises={exercises3} />
    </div>
  );
};

export default Content;
