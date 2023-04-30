import { createBrowserRouter } from "react-router-dom";
import Explore from "../layouts/Explore";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Explore/>
    }
])

export default router;