import React from "react";
import IntroCulture from "./IntroCulture/IntroCulture";

const Culture = () => {
  const [cultures, setCultures] = useState([]);

  useEffect(() => {
    axios.get("/api/culture").then((res) => setCultures(res.data));
  }, []);

  return (
    <div>
      <section>
        <IntroCulture />
      </section>
      <section>
        {!cultures
          ? null
          : cultures.map((culture) => (
              <div>
                <img
                  className="d-block w-100"
                  src={culture.image}
                  alt="image"
                  key={culture.id}
                />
                <div>{culture.paragraph}</div>
              </div>
            ))}
      </section>
    </div>
  );
};

export default Culture;
