import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return(
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>  
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

//second param(ownProps) is the props of the component that we're wrapping in our connect(match)
const mapStateToProps = (state, ownProps) => ({
    //needs a part of the state depending on the URL parameter(currying)
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
