import { useState, useCallback, useContext, useEffect } from "react";
import Acarreo from "../../components/acarreo";
import Fruta from "../../components/fruta";
import Datacontext from "../../dataContext/dataContext";

const Car = () => {
  const [total, setTotal] = useState(0);
  const data = useContext(Datacontext);
  const [fruta, setFruta] = useState([]);

  const acarreo = useCallback(({ price, operation }) => {
    setTotal((totalActual) => {
      return operation ? totalActual + price : totalActual - price;
    });
  }, []);

  const Peticion = async (url) => {
    const pet = await fetch(url);
    if (!pet.ok) {
      console.log("Petición fallida");
    }
    const res = await pet.json();
    return res;
  };

  useEffect(() => {
    const Frutas = async (acarreo) => {
      const url_api = "https://api.predic8.de/shop/v2/products/";

      const pet_fruta = await Peticion(url_api);
      const frutas = pet_fruta.products;

      const total_frutas_promise = frutas.map((frutas) =>
        Peticion(`${url_api}${frutas.id}`)
      );
      const total_frutas_resultado = await Promise.all(total_frutas_promise);

      const total_frutas = total_frutas_resultado.map((info_fruta) => {
        return (
          <Fruta
            key={info_fruta.id}
            name={info_fruta.name}
            price={info_fruta.price}
            img={`https://api.predic8.de${info_fruta.image_link}`}
            bus={acarreo}
          />
        );
      });
      setFruta(total_frutas);
    };
    Frutas(acarreo);
  }, [acarreo]);

  return (
    <>
      {fruta}
      <hr />
      <Acarreo total={total} />
      <div>Context Car: {data[0]}</div>
    </>
  );
};

export default Car;
