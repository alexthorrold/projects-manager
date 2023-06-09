import React from 'react';
import ProjectList from './ProjectList';
import AddProjectButton from './AddProjectButton';
import AddProjectModal from './AddProjectModal';
import Navbar from './Navbar';

function App() {
    const [projects, setProjects] = React.useState([]);
    const [projectsData, setProjectsData] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [maxProjectId, setMaxProjectId] = React.useState(0);
    const [searchValue, setSearchValue] = React.useState('');
    const [sortField, setSortField] = React.useState('projectName');
    const [sortOrder, setSortOrder] = React.useState('asc');

    // Fetch projects data from data.json on first render
    React.useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data.json')
            .then((response) => response.json())
            .then((data) => {
                setProjectsData(data);
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

    React.useEffect(() => {
        console.log(projects);
        console.log(projectsData);
        const newProjects = projectsData.filter((project) =>
            project.projectName
                .toLowerCase()
                .includes(searchValue.toLowerCase())
        );
        setProjects(newProjects);
    }, [searchValue, projectsData]);

    React.useEffect(() => {
        const newProjects = [...projects].sort((a, b) => {
            if (a[sortField] < b[sortField]) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (a[sortField] > b[sortField]) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
        });
        setProjects(newProjects);
    }, [sortField, sortOrder, projectsData]);

    // Displays AddProjectModal
    const displayModal = () => {
        setShowModal(true);
    };

    // Closes AddProjectModal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Deletes project with the given projectIdentifier
    const handleDeleteProject = (projectIdentifier) => {
        setProjects(projects.filter((project) => project.projectIdentifier !== projectIdentifier));
        setProjectsData(projectsData.filter((project) => project.projectIdentifier !== projectIdentifier));
    };

    // Saves the new project to the projects array
    const handleSaveProject = (newProject) => {
        newProject.projectIdentifier = (maxProjectId + 1).toString();
        setMaxProjectId(maxProjectId + 1);

        setProjects([...projects, newProject]);
        setProjectsData([...projectsData, newProject]);
    };

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }

    return (
        <div className="App">
            <Navbar onSearchBarChange={setSearchValue} onSortFieldChange={setSortField} onSortOrderChange={toggleSortOrder} />
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
