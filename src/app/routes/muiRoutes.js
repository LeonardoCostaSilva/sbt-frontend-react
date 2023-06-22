import React from 'react';
import Buttons from "../pages/components/mui/Buttons";
import Chips from "../pages/components/mui/Chips";
import Avatars from "../pages/components/mui/Avatars"
import Badges from "../pages/components/mui/Badges"
import Alerts from "../pages/components/mui/Alerts";
import Dialogs from "../pages/components/mui/Dialogs";
import Steppers from "../pages/components/mui/Steppers";
import AutoCompletes from "../pages/components/mui/AutoCompletes";
import BottomNavigations from "../pages/components/mui/BottomNavigations";
import Breadcrumbs from "../pages/components/mui/Breadcrumbs";
import Dividers from "../pages/components/mui/Dividers";
import Lists from "../pages/components/mui/Lists";
import Progress from "../pages/components/mui/Progress";
import Snackbars from "../pages/components/mui/Snackbars";
import Tabs from "../pages/components/mui/Tabs";
import Pickers from "../pages/components/mui/Pickers";
import Popovers from "../pages/components/mui/Popovers";
import Selects from "../pages/components/mui/Selects";
import TextFields from "../pages/components/mui/TextFields";
import Tooltips from "../pages/components/mui/Tooltips";
import Checkboxes from "../pages/components/mui/Checkboxes";
import Ratings from "../pages/components/mui/Ratings";
import Sliders from "../pages/components/mui/Sliders";
import Switches from "../pages/components/mui/Switches/Switches";
import TransfersList from "../pages/components/mui/TransfersList";
import ToggleButtons from "../pages/components/mui/ToggleButtons";
import Backdrops from "../pages/components/mui/Backdrops";
import Skeletons from "../pages/components/mui/Skeletons";
import Accordions from "../pages/components/mui/Accordions";
import Links from "../pages/components/mui/Links";
import Menus from "../pages/components/mui/Menus";
import Paginations from "../pages/components/mui/Paginations";
import ImagesList from "../pages/components/mui/ImagesList";
import SpeedDials from "../pages/components/mui/SpeedDials";
import Typographies from "../pages/components/mui/Typography";
import RadioButtons from "../pages/components/mui/RadioButtons/RadioButtons";
import Stacks from "../pages/components/mui/Stacks";
import Poppers from "../pages/components/mui/Poppers";
import Papers from "../pages/components/mui/Papers";
import Containers from "../pages/components/mui/Containers";
import Grids from "../pages/components/mui/Grids/Grids";
import Modals from "../pages/components/mui/Modals";
import Transitions from "../pages/components/mui/Transitions";
import TextareaAutosizes from "../pages/components/mui/TextareaAutosizes/TextareaAutosizes";
import ClickAwayListeners from "../pages/components/mui/ClickAwayListeners";
import Timelines from "../pages/components/mui/Timelines/Timelines";
import Masonry from "../pages/components/mui/Masonry";
import Treeviews from "../pages/components/mui/Treeviews";
import Portals from "../pages/components/mui/Portals";
import ButtonsGroup from "../pages/components/mui/ButtonsGroup";
import Page from "@jumbo/shared/Page";

const muiRoutes = [
    {
        path: "/mui/accordions",
        element: <Page component={Accordions}/>
    },
    {
        path: "/mui/alerts",
        element: <Page component={Alerts}/>
    },
    {
        path: "/mui/autocomplete",
        element: <Page component={AutoCompletes}/>
    },
    {
        path: "/mui/avatars",
        element: <Page component={Avatars}/>
    },
    {
        path: "/mui/backdrop",
        element: <Page component={Backdrops}/>
    },
    {
        path: "/mui/badges",
        element: <Page component={Badges}/>
    },
    {
        path: "/mui/bottom-navigation",
        element: <Page component={BottomNavigations}/>
    },
    {
        path: "/mui/breadcrumbs",
        element: <Page component={Breadcrumbs}/>
    },
    {
        path: "/mui/button-group",
        element: <Page component={ButtonsGroup}/>
    },
    {
        path: "/mui/buttons",
        element: <Page component={Buttons}/>
    },
    {
        path: "/mui/checkbox",
        element: <Page component={Checkboxes}/>
    },
    {
        path: "/mui/chips",
        element: <Page component={Chips}/>
    },
    {
        path: "/mui/click-away-listener",
        element: <Page component={ClickAwayListeners}/>
    },
    {
        path: "/mui/container",
        element: <Page component={Containers}/>
    },
    {
        path: "/mui/dialogs",
        element: <Page component={Dialogs}/>
    },
    {
        path: "/mui/dividers",
        element: <Page component={Dividers}/>
    },
    {
        path: "/mui/grid",
        element: <Page component={Grids}/>
    },
    {
        path: "/mui/images-list",
        element: <Page component={ImagesList}/>
    },
    {
        path: "/mui/links",
        element: <Page component={Links}/>
    },
    {
        path: "/mui/lists",
        element: <Page component={Lists}/>
    },
    {
        path: "/mui/masonry",
        element: <Page component={Masonry}/>
    },
    {
        path: "/mui/menus",
        element: <Page component={Menus}/>
    },
    {
        path: "/mui/modal",
        element: <Page component={Modals}/>
    },
    {
        path: "/mui/paginations",
        element: <Page component={Paginations}/>
    },
    {
        path: "/mui/papers",
        element: <Page component={Papers}/>
    },
    {
        path: "/mui/pickers",
        element: <Page component={Pickers}/>
    },
    {
        path: "/mui/popovers",
        element: <Page component={Popovers}/>
    },
    {
        path: "/mui/poppers",
        element: <Page component={Poppers}/>
    },
    {
        path: "/mui/portals",
        element: <Page component={Portals}/>
    },
    {
        path: "/mui/progress",
        element: <Page component={Progress}/>
    },
    {
        path: "/mui/radio-buttons",
        element: <Page component={RadioButtons}/>
    },
    {
        path: "/mui/rating",
        element: <Page component={Ratings}/>
    },
    {
        path: "/mui/selects",
        element: <Page component={Selects}/>
    },
    {
        path: "/mui/skeletons",
        element: <Page component={Skeletons}/>
    },
    {
        path: "/mui/slider",
        element: <Page component={Sliders}/>
    },
    {
        path: "/mui/snackbars",
        element: <Page component={Snackbars}/>
    },
    {
        path: "/mui/speed-dial",
        element: <Page component={SpeedDials}/>
    },
    {
        path: "/mui/stacks",
        element: <Page component={Stacks}/>
    },
    {
        path: "/mui/steppers",
        element: <Page component={Steppers}/>
    },
    {
        path: "/mui/switches",
        element: <Page component={Switches}/>
    },
    {
        path: "/mui/tabs",
        element: <Page component={Tabs}/>
    },
    {
        path: "/mui/textarea-autosize",
        element: <Page component={TextareaAutosizes}/>
    },
    {
        path: "/mui/text-fields",
        element: <Page component={TextFields}/>
    },
    {
        path: "/mui/timeline",
        element: <Page component={Timelines}/>
    },
    {
        path: "/mui/toggle-buttons",
        element: <Page component={ToggleButtons}/>
    },
    {
        path: "/mui/tooltips",
        element: <Page component={Tooltips}/>
    },
    {
        path: "/mui/transfers-list",
        element: <Page component={TransfersList}/>
    },
    {
        path: "/mui/transitions",
        element: <Page component={Transitions}/>
    },
    {
        path: "/mui/tree-view",
        element: <Page component={Treeviews}/>
    },
    {
        path: "/mui/typography",
        element: <Page component={Typographies}/>
    },
];

export {muiRoutes};
