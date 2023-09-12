import React from 'react';

function Title({children}) {
    return (
        <section className="menu">
            <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
            </div>
            <div>
                {children}
            </div>
        </section>

    );
}

export default Title;