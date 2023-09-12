import {useState} from 'react';
import {FaPlusSquare,FaMinusSquare} from 'react-icons/fa';

const Question = () => {
    const [reply, setReply] = useState(false);

    function showReply(){
        setReply(!reply);
    };

    return(
        <main>
            <section className="questions">
                <div className="title">
                <h2>general questions</h2>
                </div>

            <div className="section-center">
        
                <article className={!reply ? "question": "question show-text"}>
                    
                    <div className="question-title" >
                    <p>do you accept all major credit cards?</p>
                    <button type="button" className="question-btn" onClick={showReply}>
                        <span className="plus-icon">
                            <FaPlusSquare/>
                        </span>
                        <span className="minus-icon">
                            <FaMinusSquare/>
                        </span>
                    </button>
                    </div>
                
                    <div className="question-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                        dolore illo dolores quia nemo doloribus quaerat, magni numquam
                        repellat reprehenderit.
                    </p>
                    </div>
                </article>
                
                <article className={!reply ? "question": "question show-text"}>
                    <div className="question-title">
                    <p>do you suppport local farmers?</p>
                    <button type="button" className="question-btn" onClick={showReply}>
                        <span className="plus-icon">
                            <FaPlusSquare/>
                        </span>
                        <span className="minus-icon">
                            <FaMinusSquare/>
                        </span>
                    </button>
                    </div>
                    
                    <div className="question-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                        dolore illo dolores quia nemo doloribus quaerat, magni numquam
                        repellat reprehenderit.
                    </p>
                    </div>
                </article>
            
                <article className={!reply ? "question": "question show-text"}>
            
                    <div className="question-title">
                    <p>do you use organic ingredients?</p>
                    <button type="button" className="question-btn" onClick={showReply}>
                        <span className="plus-icon">
                            <FaPlusSquare/>
                        </span>
                        <span className="minus-icon">
                            <FaMinusSquare/>
                        </span>
                    </button>
                    </div>
            
                    <div className="question-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                        dolore illo dolores quia nemo doloribus quaerat, magni numquam
                        repellat reprehenderit.
                    </p>
                    </div>
                </article>
            </div>
            </section>       
        </main>
    );
};

export default Question;
