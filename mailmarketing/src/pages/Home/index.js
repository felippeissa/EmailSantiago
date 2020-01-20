import React from 'react';
import './index.css';
import NewEmail from '../../components/NewEmail';
import Menu from '../../components/Menu';


function Home({ history }) {
    function Logout() {
        history.push('/');
    }
    return (
        <div id="home">
            <aside className="Menu">
                <button className="btns" type="submit" onClick={Logout}>
                    Deslogar    
                </button>
            </aside>
            <NewEmail />
        </div>
    );
}

export default Home;
