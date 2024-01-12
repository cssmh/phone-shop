import { useNavigate } from "react-router-dom";

const Error = () => {
  const backNavigate = useNavigate();
  const backBtn = () => {
    backNavigate(-1);
  };

  return (
    <div className="text-center">
      <h1>Invalid url</h1>
      <div className="bg-green-200 w-24 mx-auto">
        <button onClick={backBtn}>Go back</button>
      </div>
    </div>
  );
};

export default Error;
