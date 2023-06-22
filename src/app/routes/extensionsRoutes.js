import React from 'react';
import CkEditor from "../pages/extensions/editor/CkEditor";
import WysiwygEditor from "../pages/extensions/editor/WysiwygEditor";
import DragAndDrop from "../pages/extensions/dnd/DragAndDrop";
import ReactDropzone from "../pages/extensions/dropzone/ReactDropzone";
import SweetAlerts from "../pages/extensions/sweetalert/SweetAlert";
import Page from "@jumbo/shared/Page";

const extensionsRoutes = [
    {
        path: "extensions/editors/ck",
        element: <Page component={CkEditor}/>
    },
    {
        path: "extensions/editors/wysiwyg",
        element: <Page component={WysiwygEditor}/>
    },
    {
        path: "extensions/dnd",
        element: <Page component={DragAndDrop}/>
    },
    {
        path: "extensions/dropzone",
        element: <Page component={ReactDropzone}/>
    },
    {
        path: "extensions/sweet-alert",
        element: <Page component={SweetAlerts}/>
    },
]
export default extensionsRoutes;
