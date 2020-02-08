import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MainUserMenu = props => (
    <div>
        <ol className='main-user-menu'>
            {props.menuItems.map((i) =>
                <li
                    key={i.roleId}
                    className={i.roleId === props.activeItem ? "active-menu-item" : ""}
                    onClick={
                        () => {
                            props.setRoleId(i.roleId);
                        }
                    }
                >
                    <Link to={i.url}>{i.name}</Link>
                </li>
            )}
        </ol>
    </div>
);

MainUserMenu.propTypes = {
    activeItem: PropTypes.number,
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        roleId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired).isRequired,
    setRoleId: PropTypes.func.isRequired
};

export default MainUserMenu;
