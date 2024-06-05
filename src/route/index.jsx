import {Layout} from "../component/layout/index.jsx";
import {Home} from "../pages/home/index.jsx";

const ROUTE = [
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path: "",
                element:<Home/>
            },
            {
                path: "home",
                element:<Home/>
            },
            {
                path: "",
                element:<></>
            }
        ]

    }
]

// eslint-disable-next-line react-refresh/only-export-components
export default ROUTE