import React from 'react';

import './shop.styles.scss';

import COLLECTIONS from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: COLLECTIONS,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
