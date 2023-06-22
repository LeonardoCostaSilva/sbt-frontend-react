import React from 'react';
import Widgets from '../pages/widgets/Widgets'
import Page from "@jumbo/shared/Page";

const widgetsRoutes = [
    {
        path: "widgets",
        element: <Page component={Widgets}/>
    },
];
export default widgetsRoutes;
