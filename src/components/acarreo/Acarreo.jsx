import { useContext } from "react";
import Datacont from "../../dataContext/dataContext";

export default function Acarreo(props) {
  // eslint-disable-next-line react/prop-types
  const { total } = props;
  const data = useContext(Datacont);
  return (
    <div>
      <h3>total: {total}</h3>
      <h3>Context Acarreo: {data}</h3>
    </div>
  );
}
