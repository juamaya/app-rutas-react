import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { id: 1, title: 'Inicio', link: '/' },
        { id: 2, title: 'Acerca de', link: '/A' },
        { id: 3, title: 'Servicios', link: '/B' },
        { id: 4, title: 'Contacto', link: '/C' }
      ]
    };
  }

  render() {
    const { menuItems } = this.state;

    return (
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Menu;
