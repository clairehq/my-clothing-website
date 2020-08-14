import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import { CollectionPageContainer, Title, ItemsContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return(
        <CollectionPageContainer>
            <Title>{ title }</Title>  
            <ItemsContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </ItemsContainer>
        </CollectionPageContainer>
    )
}

//second param(ownProps) is the props of the component that we're wrapping in our connect(match)
const mapStateToProps = (state, ownProps) => ({
    //needs a part of the state depending on the URL parameter(currying)
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
