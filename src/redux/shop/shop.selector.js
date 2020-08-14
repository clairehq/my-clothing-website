import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections //input是shop的initial state，return的里面的collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    //get all keys off the object and give it in an array format, map to collections[key]
    collections => 
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => 
    (collections ? collections[collectionUrlParam] : null) //collectionUrlParam is a string
)
