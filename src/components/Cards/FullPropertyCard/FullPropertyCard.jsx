import React from 'react';
import PropTypes from 'prop-types';

import BaseCard from '../BaseCard/BaseCard';
import './FullPropertyCard.scss';

function FullPropertyCard(props) {
  const { property } = props;
  return (
    <BaseCard>
      <div className="FullPropertyCard">
        <div className="card__image">
          <img src={property.imageLink} alt={`${property.title} Property`} />
        </div>
        <div className="card__info">
          <div className="card__info__user">
            <h3>{property.title}</h3>
          </div>
          <p>
            {`${property.street} ${property.streetNumber}, ${property.commune}, ${property.region}`}
          </p>
          <p>{property.description}</p>
        </div>
        <div className="card__stats">
          <p className="card__stats__title">Bathrooms</p>
          <div className="card__stats__info">
            <p>{property.bathrooms}</p>
          </div>
        </div>
        <div className="card__stats">
          <p className="card__stats__title"> Bedrooms</p>
          <div className="card__stats__info">
            <p>{property.bedrooms}</p>
          </div>
        </div>
        <div className="card__stats">
          <p className="card__stats__title">Size</p>
          <div className="card__stats__info">
            <p>
              {property.size}
              <> m</>
              <sup>2</sup>
            </p>
          </div>
        </div>
        <div className="card__stats">
          <p className="card__stats__title">Type</p>
          <div className="card__stats__info">
            <p>{property.type}</p>
          </div>
        </div>
        <div className="card__stats">
          <p className="card__stats__title">Listing type</p>
          <div className="card__stats__info">
            <p>{property.listingType}</p>
          </div>
        </div>
        <div className="card__stats">
          <p className="card__stats__title">Price</p>
          <div className="card__stats__info">
            <p>
              <>$</>
              {property.price}
            </p>
          </div>
        </div>
        <div className="card__stats">
          <p className="card__stats__title">Listing made</p>
          <div className="card__stats__info">
            <p>{`${new Date(property.createdAt).toLocaleDateString()}`}</p>
          </div>
        </div>
      </div>
    </BaseCard>
  );
}

FullPropertyCard.propTypes = {
  property: PropTypes.shape({
    imageLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    streetNumber: PropTypes.number.isRequired,
    commune: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bathrooms: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    listingType: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default FullPropertyCard;
