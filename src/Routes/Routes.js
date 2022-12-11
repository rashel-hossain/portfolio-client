import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/Home/Projects/ProjectDetails";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/projectdetails/:id',
                element: <ProjectDetails></ProjectDetails>
            },

        ]

    }
])

export default router;