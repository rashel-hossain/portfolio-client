const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,

    }
])

export default router;