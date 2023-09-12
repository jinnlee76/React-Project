import {MdAdd} from 'react-icons/md';
import './TodoTemplate.css';
import React, { useState } from 'react';

const TodoInsert = ({onInsert}) => {
    const [value,setValue] = useState('');

    function onChange(e) {
        return setValue(e.target.value);
    };

    const onSubmit = (e) => {
            e.preventDefault();
            onInsert(value);
            setValue('');
    };

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder='할일을 입력하세요' 
                value={value}
                onChange={onChange}/>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default React.memo(TodoInsert);