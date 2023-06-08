import React from 'react';
import ProjectList from './ProjectList';
import AddProjectButton from './AddProjectButton';
import AddProjectModal from './AddProjectModal';

function App() {
    const [projects, setProjects] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [maxProjectId, setMaxProjectId] = React.useState(0);

    React.useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data.json')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);

                const maxId = Math.max(
                    ...data.map((project) =>
                        parseInt(project.projectIdentifier)
                    )
                );
                setMaxProjectId(maxId);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    const displayModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDeleteProject = (projectIdentifier) => {
        const newProjects = projects.filter(
            (project) => project.projectIdentifier !== projectIdentifier
        );
        setProjects(newProjects);
    };

    const handleSaveProject = (newProject) => {
        newProject.projectIdentifier = (maxProjectId + 1).toString();
        setMaxProjectId(maxProjectId + 1);

        const newProjects = [...projects, newProject];
        setProjects(newProjects);
    };

    return (
        <div className="App">
            <ProjectList projects={projects} onDelete={handleDeleteProject} />
            <AddProjectButton onClick={displayModal} />
            <AddProjectModal
                show={showModal}
                onClose={handleCloseModal}
                handleSave={handleSaveProject}
            />
        </div>
    );
}

export default App;
