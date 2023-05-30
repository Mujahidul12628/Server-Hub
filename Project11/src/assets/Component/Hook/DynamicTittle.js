import React, { useEffect } from 'react';

const DynamicTittle = (title) => {
    useEffect(() => {
        document.title = `${title} - Toys Galaxy`
    }, [title])
};

export default DynamicTittle;