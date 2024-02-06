import React, { useState, useEffect } from 'react';

const Home = ({  }) => {
    const [, set] = useState();
    useEffect(() => {
        set();
    }, []);

    return (
        <>
            <h1>hi</h1>
        </>
    );
};

export default Home;
