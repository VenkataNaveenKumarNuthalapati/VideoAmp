import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeVideos from "./components/HomeVideos";

// const HomeVideos = lazy(() => import('./HomeVideos'))

function App() {
    return (
        <div className="h-screen m-0">
            <Header />
            <div className="flex h-full ">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
}

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Something went wrong!</h1>,
        children: [
            {
                path: "/",
                element: <HomeVideos />,
                children: [],
            },
        ],
    },
];

const rootRouter = createBrowserRouter(routes, {
    future: {
        v7_skipActionErrorRevalidation: true,
    },
});

export default () => <RouterProvider router={rootRouter} />;
