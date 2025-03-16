import React from 'react';

const Alert = (props) => {

    const capatalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
            <div style={{ height: '45px' }}>
                {props.alertbar && <div className={`alert alert-${props.alertbar.type} alert-dismissible fade show `} role="alert">
                    <strong>{capatalize(props.alertbar.type)}</strong> :{props.alertbar.message}
                </div>}
            </div>
        </>
    )
}

export default Alert;