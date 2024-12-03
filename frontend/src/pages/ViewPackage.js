import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getPackages, deletePackage } from "../services/api";
import { Link } from "react-router-dom";

const ViewPackage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const packagesData = await getPackages();
        setPackages(packagesData);
      } catch (error) {
        console.error("Error fetching packages", error);
      }
    };
    fetchPackages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePackage(id);
      setPackages(packages.filter((pkg) => pkg.Package_ID !== id));
      alert("Package deleted successfully!");
    } catch (error) {
      console.error("Error deleting package", error);
    }
  };

  return (
    <Container>
      <h1>View Travel Packages</h1>
      <Row>
        {packages.map((pkg) => (
          <Col key={pkg.Package_ID} md={4}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{pkg.Package_Name}</h5>
                <p className="card-text">Duration: {pkg.Duration_Days} days</p>
                <p className="card-text">Price: ${pkg.Price}</p>
                <p className="card-text">{pkg.Description}</p>
                <Link to={`/edit-package/${pkg.Package_ID}`}>
                  <Button variant="primary">Edit Package</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(pkg.Package_ID)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ViewPackage;
