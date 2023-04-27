import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData()
    return (
        <div>
            <h2>Home Home ...Sweet...Home {tshirts.length}</h2>
        </div>
    );
};

export default Home;<h2>Home Home sweet Home</h2>