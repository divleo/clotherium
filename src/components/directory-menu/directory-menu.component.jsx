import React from 'react';

import './directory-menu.styles.scss';

import SECTIONS from './directory-menu.data';

import MenuItem from '../menu-item/menu-item.component';

class DirectoryMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SECTIONS,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
