import React, { useState, useEffect } from "react";

export const LogItem = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
  };
  return <div></div>;
};
