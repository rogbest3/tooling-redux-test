import React from 'react';

const Loading = ({loading, children}) => {
    return (
        <div>
            {loading ? <p>loding...</p> : children}
        </div>
    );
};

export default Loading;