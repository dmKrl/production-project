import { routeConfig } from "app/config";

import { useRoutes } from "react-router-dom";

export const AppRouter = () => {
    const elementRoutes = useRoutes(routeConfig);

    return elementRoutes;

};

