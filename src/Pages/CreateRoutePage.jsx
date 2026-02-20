import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRoutePage = () => {
  const [routeName, setRouteName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/info", { state: { routeName } });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={routeName} onChange={(e) => setRouteName(e.target.value)} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default CreateRoutePage;
