import React from 'react';

const AnimatedProgress = () => {
    return (
        <div>
            <div className="progress">
                <div className="progress-bar bg-main-1 progress-bar-striped progress-bar-animated" role="progressbar" style={{width:"75%"}}></div>
            </div>
        </div>
    );
};

export default AnimatedProgress;