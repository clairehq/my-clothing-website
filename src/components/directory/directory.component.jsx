import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

// import './directory.styles.scss';
import { DirectoryMenuContainer } from './directory.styles';


const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {
      sections.map(({title, imageUrl, id, size, linkUrl}) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
      ))
    }
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);