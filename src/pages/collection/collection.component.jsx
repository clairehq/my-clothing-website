import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ match }) => (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
)

export default CollectionPage;