const React = require('react');
const ReactDOM = require('react-dom');

const {useState} = React;

const HelloUser = (props) => {
    // BAD PRACTICE: RERENDERS INSIDE OF ITSELF
    // const handleNameChange = (e) => {
    //     ReactDOM.render(
    //         <HelloUser username={e.target.value} />,
    //         document.getElementById('app')
    //     );
    // };

    // INSTEAD: USE HOOKS
    const [username, setUsername] = useState(props.username);

    return (
        <div>
            <p>Hello {username}</p>
            <label>Change Name: </label>
            <input type="text" value={username}
                onchange={(e) => setUsername(e.target.value)}/>
        </div>
    );
};

const init = () => {
    ReactDOM.render(
        <HelloUser username='Judy' />,
        document.getElementById('app')
    );
}

window.onload = init;
