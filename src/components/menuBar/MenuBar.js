import React from 'react';
import { Link } from 'react-router-dom';
import './menu-bar.css';

function MenuBar({ categoriesData }) {
    const { loading, error, categories } = categoriesData;

    return (
        <div className="nav-bar">
            {loading ?
                <p className="loading">loading..</p>
                :
                error ?
                    <p>Categories not found</p>
                    :
                    <ul className="list-container">
                        {categories && categories.map(category => (
                            <li selected key={category.id}>
                                <Link to={`/cats/${category.id}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>}
        </div>
    )
}

export default MenuBar;