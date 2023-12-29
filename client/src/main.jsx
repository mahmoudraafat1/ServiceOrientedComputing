// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
//import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

// eslint-disable-next-line react/no-deprecated
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);