import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component{
    /* 
    unsubscribeFromSnapshot = null;
    */

    componentDidMount() {
       // const collectionRef = firestore.collection('collections');

        /* 用observable pattern的方法
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot); //snapshot 是一个querySnapshot object
            updateCollections(collectionsMap);
            this.setState({ loading: false});
        }); */

        /* 用promise pattern来fetch data的方法1
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        }); */

        /* 用promise pattern来fetch data的方法2 （可能是最common的方法）API URL
        fetch('https://firestore.googleapis.com/v1/projects/my-clothing-website/databases/(default)/documents/collections')
        .then(res => res.json())
        .then(collections => console.log(collections));
        */

        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;

        return (
            <div className='shop-page'>
                <Route 
                exact 
                path={`${match.path}`} 
                render={ props => (<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} /> )}
                />
                <Route 
                path={`${match.path}/:collectionId`} 
                render={ props => (<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} /> )} 
                />
            </div>
        )
    }
}  

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
   // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);