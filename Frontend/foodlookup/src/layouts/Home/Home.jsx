import React, { useState, useEffect } from 'react';
import './home.css';
import ModalForm from './ModalForm';
import { Link } from 'react-router-dom';

const Home = () => {
    const ENDPOINT = "https://localhost:7283";
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [preserve, setPreserve] = useState(false);
    const [hasConnection, setHasConnection] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');


    const handleSearchChange = async (e) => {
        const { value } = e.target;
        setSearchValue(value);

        if (value.trim().length > 0) {
            try {
                const response = await fetch(`${ENDPOINT}/api/Food/get?input=${value}`);
                const data = await response.json();
                setSearchResults(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        else if (!preserve) {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        const checkConnection = async () => {
            try {
                const response = await fetch(`${ENDPOINT}/api/Food/test`);
                if (response.status !== 200) {
                    setHasConnection(false);
                }
            } catch (error) {
                console.error('Error checking connection:', error);
                setHasConnection(false);
            }
        };

        checkConnection();
    }, []);

    useEffect(() => {
        if (successMessage) {
          const timer = setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [successMessage]);

    const handleCheckboxChange = (e) => {
        setPreserve(e.target.checked);

        if (!e.target.checked && searchValue.trim() === '') {
            setSearchResults([]);
        }
    };

    const handleAddItemClick = (item) => {
        setSelectedItems([...selectedItems, item]);
    };

    const handleSubmitForm = (formData) => {
        fetch(`${ENDPOINT}/api/Food/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    setSuccessMessage('Food item added successfully');
                    setShowModal(false);
                } else {
                    throw new Error('Failed to add food');
                }
            })
            .catch(error => {
                alert('Failed to add food');
            });
    };

    const handleRemoveItemClick = (indexToRemove) => {
        const updatedSelectedItems = selectedItems.filter((item, index) => index !== indexToRemove);
        setSelectedItems(updatedSelectedItems);
    };




    const columns = [
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            isNumeric: false
        },
        {
            title: 'Kcal',
            dataIndex: 'kcal',
            key: 'kcal',
            isNumeric: true
        },
        {
            title: 'Protein(g)',
            dataIndex: 'protein',
            key: 'protein',
            isNumeric: true
        },
        {
            title: 'Fat(g)',
            dataIndex: 'fat',
            key: 'fat',
            isNumeric: true
        },
        {
            title: 'Carbs(g)',
            dataIndex: 'carbs',
            key: 'carbs',
            isNumeric: true
        },
    ];

    const calculateTotal = () => {
        const total = {};

        columns.forEach(column => {
            if (column.isNumeric) {
                total[column.dataIndex] = 0;
            }
        });

        selectedItems.forEach(item => {
            columns.forEach(column => {
                if (column.isNumeric) {
                    total[column.dataIndex] += parseFloat(item[column.dataIndex]) || 0;
                }
            });
        });

        return total;
    };

    const total = calculateTotal();

    return (
        <>
            <h2 className='heading'>Food Lookup</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <div className='main'>
                <div className='top-box'>
                    <button className="add-button" onClick={() => setShowModal(true)}>New Food</button>
                    {!hasConnection && (
                        <p className='red'>
                            You don't have connection with the API, please read <Link className='link' to="/api">this</Link> to get started
                        </p>
                    )}
                </div>
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
                                {selectedItems.map((item, index) => (
                                    <tr key={item.key}>
                                        {columns.map(column => (
                                            <td key={column.key}>{item[column.dataIndex]}</td>
                                        ))}
                                        <td>
                                            <button className='remove-btn' onClick={() => handleRemoveItemClick(index)}>X</button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className='bold'>Total</td>
                                    {columns.map(column => (
                                        column.isNumeric && <td className='bold' key={column.key}>{total[column.dataIndex]}</td>
                                    ))}
                                </tr>
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
                            referrerPolicy="no-referrer"
                        />
                        <svg
                            className="search-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L17.5448 18.959C16.2717 19.7612 14.7573 20.2287 13.1716 20.2287C9.65548 20.2287 6.76116 17.3344 6.76116 13.8183C6.76116 10.3022 9.65548 7.40791 13.1716 7.40791C16.6877 7.40791 19.582 10.3022 19.582 13.8183C19.582 15.404 19.1145 16.9184 18.3123 18.1915L22.0605 21.9397C22.451 22.3302 23.0842 22.3302 23.4747 21.9397C23.8652 21.5492 23.8652 20.916 23.4747 20.5255L22.7071 21.2929ZM13.1716 17.6679C15.8093 17.6679 17.9162 15.5611 17.9162 12.9234C17.9162 10.2857 15.8093 8.17888 13.1716 8.17888C10.5339 8.17888 8.42711 10.2857 8.42711 12.9234C8.42711 15.5611 10.5339 17.6679 13.1716 17.6679Z"
                                fill="#777777"
                            />
                        </svg>
                        <input type='checkbox'
                            onChange={handleCheckboxChange}
                            id='preserve-checkbox'
                            checked={preserve}></input>
                        <label htmlFor='preserve-checkbox' className="checkbox-label">Preserve data on empty search</label>
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
                                {searchResults.map(item => (
                                    <tr key={item.key}>
                                        {columns.map(column => (
                                            <td key={column.key}>{item[column.dataIndex]}</td>
                                        ))}
                                        <td>
                                            <button className='add-btn' onClick={() => handleAddItemClick(item)}>Add</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ModalForm visible={showModal} onClose={() => setShowModal(false)} onSubmit={handleSubmitForm} />
            </div>
        </>
    );
};

export default Home;
