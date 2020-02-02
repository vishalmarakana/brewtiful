import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/Brewery.css";
import { capitalizeFirstLetter } from "../helper/utility";
import { BreweryContext } from "../context/Context";
import BreweryImage from "./BreweryImage";

const Brewery = ({ brewery, index }) => {
  const { setBrewery } = useContext(BreweryContext);

  return (
    <>
      {brewery && (
        <div className="card brewery-card">
          <div className="brewery-card-section">
            <div className="p-2">
              <BreweryImage id={brewery.id} />
            </div>
            <div className="p-2">
              <div className="d-flex">
                <div className="flex-item p-1">
                  <h5>{index + 1}.</h5>
                </div>
                <div className="flex-item p-1">
                  <h5>{brewery.name}</h5>
                </div>
              </div>

              {brewery.brewery_type && (
                <div className="d-flex">
                  <div className="flex-item p-1">
                    <span className="badge badge-primary">
                      {capitalizeFirstLetter(brewery.brewery_type)}
                    </span>
                  </div>
                </div>
              )}

              {brewery.phone && (
                <div className="d-flex">
                  <div className="flex-item p-1">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </div>
                  <div className="flex-item p-1">
                    <a href={`tel:${brewery.phone}`}>{brewery.phone}</a>
                  </div>
                </div>
              )}

              {brewery.city && (
                <div className="d-flex brewery-location">
                  <div className="flex-item p-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="flex-item p-1">
                    <a href="#" onClick={() => setBrewery(brewery)}>
                      {brewery.street}
                      <br></br>
                      {brewery.city}, {brewery.state}
                      <br></br>
                      {brewery.postal_code}
                    </a>
                  </div>
                </div>
              )}

              <div className="brewery-buttons-section">
                {brewery.website_url && (
                  <a
                    className="btn btn-sm btn-dark m-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={brewery.website_url}
                  >
                    Website
                  </a>
                )}

                {brewery.latitude && brewery.longitude && (
                  <a
                    href={`https://www.google.com/maps/place/${brewery.latitude},${brewery.longitude}`}
                    className="btn btn-sm btn-dark m-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Directions
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Brewery;
