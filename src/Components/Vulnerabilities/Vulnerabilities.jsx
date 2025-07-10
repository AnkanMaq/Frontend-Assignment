import React, { useEffect, useState } from "react";
import "./Vulnerabilities.css";

const Vulnerabilities = () => {
  const [vulnerabilitiesData, setVulnerabilitiesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/vulnerabilitiesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data");
        return res.json();
      })
      .then((data) => {
        setVulnerabilitiesData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="vulnerabilities-container">Loading...</div>;
  if (error) return <div className="vulnerabilities-container">Error: {error}</div>;
  if (!vulnerabilitiesData) return null;

  return (
    <div className="vulnerabilities-container">
      <h1>Vulnerabilities</h1>
      {["high", "medium", "low"].map((severity) => (
        <div key={severity}>
          <h2 className={severity}>
            {severity.charAt(0).toUpperCase() + severity.slice(1)} Severity
          </h2>
          {vulnerabilitiesData[severity].map((category) => (
            <div key={category.category} className="vulnerabilities-category-card">
              <h3>{category.category}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}:</strong>{" "}
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                    {item.description && (
                      <div style={{ margin: "6px 0 2px 0", color: "#444", fontSize: "0.98rem" }}>
                        {item.description}
                      </div>
                    )}
                    {item.resolution && (
                      <div style={{ margin: "2px 0 0 0", color: "#2d2d2d", fontSize: "0.97rem", fontStyle: "italic" }}>
                        <strong>Possible Resolution:</strong> {item.resolution}
                      </div>
                    )}
                    {item.fix && <span> (Fixed in: {item.fix})</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Vulnerabilities; 