import React from 'react';
import Metrics from '../pages/metrics/Metrics';
import Page from "@jumbo/shared/Page";

const metricsRoutes = [
    {
        path: "metrics",
        element: <Page component={Metrics}/>
    }
];
export default metricsRoutes;
