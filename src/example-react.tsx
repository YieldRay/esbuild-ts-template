// npm i react react-dom @types/react @types/react-dom

import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return <div>Hello, React.</div>;
}

ReactDOM.createRoot(document.getElementById("app")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
