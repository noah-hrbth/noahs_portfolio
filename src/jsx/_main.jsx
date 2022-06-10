import React from "react";
import { createRoot } from "react-dom/client";
import { initJavaScript } from "../js/_main";
import { Header } from "./header";
import { SettingsSidebar } from "./settings-sidebar";

class App extends React.Component {
	render() {
		initJavaScript();
		return (
			<>
				<Header />
				<SettingsSidebar />
			</>
		);
	}
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
