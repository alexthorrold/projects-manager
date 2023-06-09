import React from 'react';
import ProjectList from './ProjectList';
import AddProjectButton from './AddProjectButton';
import AddProjectModal from './AddProjectModal';
import Navbar from './Navbar';

function App() {
    const [projects, setProjects] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [maxProjectId, setMaxProjectId] = React.useState(0);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [sortField, setSortField] = React.useState('projectName');
    const [sortOrder, setSortOrder] = React.useState('asc');

    // Fetch projects data from data.json on first render
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

    const sortedProjects = React.useMemo(() => {
        return [...projects].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a[sortField].localeCompare(b[sortField]);
            } else {
                return b[sortField].localeCompare(a[sortField]);
            }
        });
    }, [projects, sortOrder, sortField]);

    const filteredProducts = React.useMemo(() => {
        if (searchQuery === '') {
            return sortedProjects;
        }
        return sortedProjects.filter((project) => project.projectName.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [sortedProjects, searchQuery]);

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
    };

    // Saves the new project to the projects array
    const handleSaveProject = (newProject) => {
        newProject.projectIdentifier = (maxProjectId + 1).toString();
        setMaxProjectId(maxProjectId + 1);

        setProjects([...projects, newProject]);
    };

    return (
        <div className="App">
            <Navbar onSortFieldChange={setSortField} onSortOrderChange={setSortOrder} onSearchQueryChange={setSearchQuery} />
            <ProjectList projects={filteredProducts} onDelete={handleDeleteProject} />
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
