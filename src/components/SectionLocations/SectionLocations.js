import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import helsinkiImage from './images/location_helsinki.jpg';
import rovaniemiImage from './images/location_rovaniemi.jpg';
import rukaImage from './images/location_ruka.jpg';


import yishunImage from './images/yishun.jpg';
import amkImage from './images/amk.jpg';
import changiImage from './images/changi.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Yishun',
          yishunImage,
          '?address=Yishun%2C%20Singapore&bounds=1.4340823527707152%2C103.84255163220033%2C1.4161160472292853%2C103.82457976779969'
        )}
        {locationLink(
          'AMK',
          amkImage,
          '?address=AMK%2C%20Singapore&bounds=1.3874348055414298%2C103.86684693877476%2C1.3515021944585701%2C103.83090406122523'
        )}
        {locationLink(
          'Changi',
          changiImage,
          '?address=Singapore%20Changi%20Airport%2C%20Airport%20Boulevard%2C%20Singapore%2C%20South%20East%20819643%2C%20Singapore&bounds=1.3739845555414298%2C104.00646583841429%2C1.3380519444585701%2C103.97052316158572'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
