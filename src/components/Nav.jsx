import {useEffect, useState} from 'react';

import React from 'react';
import { getArticles } from './utils/api';

const Nav = () => {
    const [topics, setTopics] = useState([]);

    useEffect(()=> {
        getArticles().then((articles)=> {
            console.log(articles);
        })
    })
    return (
        <div>
            <h3>Topics will be listed here</h3>
        </div>
    );
};

export default Nav;