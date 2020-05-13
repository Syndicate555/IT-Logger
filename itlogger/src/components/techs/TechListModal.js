import React, { useState, useEffect } from "react";
import AddLogModal from "../logs/AddLogModal";

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
      <div id="tech-list-modal" className="modal">
          <div className="modal-content">
              <h4>Technician List</h4>
              <ul className="collection">
                  {!loading && techs.map(tech => (
                      <li className='collection-item'>{tech.firstName}</li>
                  )}}
              </ul>
          </div>
    </div>
  );
};

export default TechListModal;
