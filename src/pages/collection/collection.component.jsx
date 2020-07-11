import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    console.log(collection)
    return(
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>  
    </div>
    )
}

//second param(ownProps) is the props of the component that we're wrapping in our connect(match)
const mapStateToProps = (state, ownProps) => ({
    //needs a part of the state depending on the URL parameter
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);