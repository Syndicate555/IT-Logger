import React, { useState, useEffect } from "react";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center" style={{ fontFamily: "Jura" }}>
          {" "}
          System Logs
        </h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show.....</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
