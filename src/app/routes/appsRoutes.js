import React from "react";
import MailApp from "../pages/apps/mail";
import ContactsApp from "../pages/apps/contacts/ContactsApp";
import ChatApp from "../pages/apps/chat";
import Page from "@jumbo/shared/Page";

const appsRoutes = [
    {
        path: [
            "/app/chats",
            "/app/chats/:chatBy/:id",
        ],
        element: <Page component={ChatApp}/>,
    },
    {
        path: [
            "/app/contacts/:category",
            "/app/contacts/:category/:id",
        ],
        element: <Page component={ContactsApp}/>,
    },
    {
        path: [
            "/app/mails/:category",
            "/app/mails/:category/:id",
            "/app/mails/:category/message/:messageID",
            "/app/mails/:category/:id/message/:messageID"
        ],
        element: <Page component={MailApp}/>
    }
];

export default appsRoutes;
