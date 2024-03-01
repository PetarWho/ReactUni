import React, { useState } from 'react';
import './home.css';

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    // Function to handle search input change
    const handleSearchChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
        // Here you can implement logic to fetch search results from the database
        // and update the searchResults state accordingly
    };

    // Function to handle adding items to the selected items table
    const handleAddItemClick = (item) => {
        setSelectedItems([...selectedItems, item]);
    };

    // Table columns configuration
    const columns = [
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Kcal',
            dataIndex: 'kcal',
            key: 'kcal',
        },
        {
            title: 'Protein(g)',
            dataIndex: 'protein',
            key: 'protein',
        },
        {
            title: 'Fat(g)',
            dataIndex: 'fat',
            key: 'fat',
        },
        {
            title: 'Carbs(g)',
            dataIndex: 'carbs',
            key: 'carbs',
        },
    ];

    return (
        <div className='main'>
            <div className="selected-table">
                <div className='selected-row'>
                    <p className='selected-food'>Selected foods</p>
                </div>
                <div className="table-container">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                {columns.map(column => (
                                    <th key={column.key}>{column.title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {selectedItems.map(item => (
                                <tr key={item.key}>
                                    {columns.map(column => (
                                        <td key={column.key}>{item[column.dataIndex]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="search-table">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search foods..."
                        value={searchValue}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <svg
                        className="search-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => console.log('Search clicked')}
                    >
                        <path
                            d="M22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L17.5448 18.959C16.2717 19.7612 14.7573 20.2287 13.1716 20.2287C9.65548 20.2287 6.76116 17.3344 6.76116 13.8183C6.76116 10.3022 9.65548 7.40791 13.1716 7.40791C16.6877 7.40791 19.582 10.3022 19.582 13.8183C19.582 15.404 19.1145 16.9184 18.3123 18.1915L22.0605 21.9397C22.451 22.3302 23.0842 22.3302 23.4747 21.9397C23.8652 21.5492 23.8652 20.916 23.4747 20.5255L22.7071 21.2929ZM13.1716 17.6679C15.8093 17.6679 17.9162 15.5611 17.9162 12.9234C17.9162 10.2857 15.8093 8.17888 13.1716 8.17888C10.5339 8.17888 8.42711 10.2857 8.42711 12.9234C8.42711 15.5611 10.5339 17.6679 13.1716 17.6679Z"
                            fill="#777777"
                        />
                    </svg>
                </div>
                <div className="table-container">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                {columns.map(column => (
                                    <th key={column.key}>{column.title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {selectedItems.map(item => (
                                <tr key={item.key}>
                                    {columns.map(column => (
                                        <td key={column.key}>{item[column.dataIndex]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;