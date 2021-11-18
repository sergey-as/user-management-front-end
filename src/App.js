import './App.css';
import {useEffect, useState} from 'react';
import {User} from './components/user/User';

const baseUrl = 'http://localhost:5000/users';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(baseUrl).then(value => value.json().then((users => setUsers(users))))
    }, [])

    return (
        <div>
            <h2> Users </h2>
            <div>
                {users.map(value => <User user={value} key={value.id}/>)}
            </div>
            <div>
                <button onClick={()=>{}}>Create</button>
            </div>
        </div>
    );
}

export default App;
