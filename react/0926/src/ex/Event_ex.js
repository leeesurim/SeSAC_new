import React, {useState} from 'react';

const Event_ex = () => {
    const [ infoList, setInfoList ] = useState([
        {id: 1, name: "코디", email: "codi@gmail.com"}, 
        {id: 2, name: "윤소희", email: "yoonsohee@gmail.com"}
    ]);
    const [ inputName, setInputName ] = useState('');
    const [ inputEmail, setInputEmail ] = useState('');
    const [ nextId, setNextId ] = useState(3);

    const onName = (e) => setInputName(e.target.value);
    const onEmail = (e) => setInputEmail(e.target.value);

    const onClick = () => {
        const newInfos = infoList.concat({
            id: nextId,
            name : inputName,
            email: inputEmail
        });
        console.log(newInfos);
        setNextId(nextId + 1);
        setInfoList(newInfos);
        setInputName('');
        setInputEmail('');
    }

    const onKeyPress = (e) => {
        if(e.key === "Enter"){
            onClick();
        }
    }

    const onRemove = id => {
        const newInfos = infoList.filter(info => info.id !== id);
        setInfoList(newInfos);
    }

    
    const newInfos = infoList.map(info => <h2 key={info.id} onDoubleClick={() => onRemove(info.id)}>{info.name} : {info.email}</h2> );

    return(
        <div>
            <h3>실습 1</h3>
            <input value={inputName} onChange={onName} onKeyPress={onKeyPress} placeholder='이름'></input>
            <input value={inputEmail} onChange={onEmail} onKeyPress={onKeyPress} placeholder='이메일'></input>
            <button onClick={onClick} >등록</button>

            {newInfos}
            
        </div>
    );
}

export default Event_ex;