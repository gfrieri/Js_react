import { useState, useCallback, useContext } from "react";
import Acarreo from "../../components/acarreo";
import Fruta from "../../components/fruta";
import Datacontext from "../../dataContext/dataContext";

const Car = () => {
  const [total, setTotal] = useState(0);
  const data = useContext(Datacontext);

  const acarreo = useCallback(({ price, operation }) => {
    setTotal((totalActual) => {
      return operation ? totalActual + price : totalActual - price;
    });
  }, []);

 const petttt = async () => {
  const url = 'https://api.predic8.de/shop/v2/products/'
  const peticion = await fetch(url)

  if (!peticion.ok) {
    console.log('Petición fallida')
  }

  const results = await peticion.json()
  const frutas = results
  let templateHTML = ''

  //frutas.array.forEach(({id}) => {
    
  //});

  console.log(frutas)
 }
  petttt()

  return (
    <>
      <Fruta name={"Manzana"} price={1000} bus={acarreo} />
      <Fruta name={"Pera"} price={600} bus={acarreo} />
      <Fruta name={"Mango"} price={800} bus={acarreo} />
      <Fruta name={"Guanabana"} price={1200} bus={acarreo} />
      <Fruta name={"Piña"} price={3000} bus={acarreo} />
      <hr />
      <Acarreo total={total} />
      <div>Context Car: {data[0]}</div>
    </>
  );
};

export default Car;
