import {useState} from 'react';

export default function Modal(){
    const [modalToggle, setModalToggle] = useState(true);

    function setToggle(){
        setModalToggle(!modalToggle);
    };

    return (
        <>
            <header className="hero">
                <div className="banner">
                    <h1>modal project</h1>
                    <button className="btn modal-btn" onClick={setToggle}>
                    open modal
                    </button>
                </div>
            </header>

            <div className={ modalToggle ? "modal-overlay":"modal-overlay open-modal"}>
                <div className="modal-container">
                    <h3>modal content</h3>
                    <button className="close-btn" onClick={setToggle}>x</button>
                </div>
            </div>
        </>
    );
};