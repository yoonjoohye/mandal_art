import React, {useState, useEffect, useCallback} from 'react';


const Title = (props) => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(props.title);
    },[props.title]);

    const onChange=useCallback((e)=>{
        setTitle(e.target.value);
        props.titleChange(e.target.value);
    },[props]);

    return (
        <input
            className="mandal-title"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => onChange(e)}
        />
    );

}

export default Title;