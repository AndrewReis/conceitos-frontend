import React, { useState } from 'react';

import Header from './components/Header';

function App(){
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'FrontEnd web']);

    function handleAddProject(){
        setProjects([...projects,`Novo projeto ${Date.now()}`]);
    }
    return(
        <>
            <Header title="Techs"/>

            <ul>
                { projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject} > Adicionar +projeto </button>
        </>
    );
}

export default App;