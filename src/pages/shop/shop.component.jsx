import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component{

    componentDidMount() {
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
        const { match } = this.props;

        return (
            <div className='shop-page'>
                <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionsOverviewContainer}
                />
                <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
                />
            </div>
        )
    }
}  

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);