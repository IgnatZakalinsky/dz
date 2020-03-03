import React, {useState, ChangeEvent, KeyboardEvent} from 'react';

const Monday = () => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(false);

    const onAddTaskClick = () => {
        const newText = title;

        if (newText === '') setError(true);
        else {
            setTitle('');
            alert(newText);
        }
    };

    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setTitle(e.currentTarget.value);
    };

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onAddTaskClick();
    };

    return (
        <div>
            Monday
            <div>
                <input
                    type="text"
                    placeholder="New task name"
                    style={{borderColor: error ? 'red' : undefined}}
                    value={title}
                    onChange={onTitleChange}
                    onKeyPress={onKeyPress}
                />
                <button onClick={onAddTaskClick}>Add</button>
            </div>
        </div>
    );
};

export default Monday;
