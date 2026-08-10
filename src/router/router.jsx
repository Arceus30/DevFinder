import { createBrowserRouter } from "react-router";
import Names from "../services/MOCK_DATA.json";

import App from "../App";

import { HomePage } from "../pages/HomePage";
import { DeveloperPage } from "../pages/DeveloperPage";

import { ErrorPage } from "../pages/ErrorPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorBoundary: ErrorPage,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => [...new Set(Names.map((name) => name.city))],
            },
            {
                path: "/developer/:devId",
                Component: DeveloperPage,
                loader: ({ params }) =>
                    Names.find((name) => name.id === Number(params.devId)),
            },
            {
                path: "*",
                Component: NotFoundPage,
            },
        ],
    },
]);
