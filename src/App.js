import React, { useState } from "react";
import Marked from "marked";
import './App.css';

function App() {
	// STATE
	const [text, setText] = useState(
		"# `Prévisualisateur de Markdown`\n### Youpi ! Voici mon premier projet React\nRéalisé entièrement avec React, je transforme le markdown en *HTML* !\n\n---\n\n### Cas d\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n\n---\n\n[Angelina Lorieux-Machova](https://)"
	);

	// FUNCTIONS
	// 1- Detect changes in textarea on event
	const detectTextHandler = (e) => {
		// Target the current value and update the state with the new text when the event is called
		setText(e.target.value);
	};

	// 2- Convert the Markdown into HTML
	const convertToHTML = () => {
		// This statement is a security from React and should never be used for real data (passwords, clients data...)
		// Marked converts the text into readable HTML
		return {__html: Marked(text)}
	};

	// JSX
	return (
		<div className="App">
			<div className="items">
				<div className="item left">
					<textarea value={text} onChange={(newText) => {detectTextHandler(newText)}}>
					</textarea>
				</div>
				<div className="item right">
					<div className="converted" dangerouslySetInnerHTML={convertToHTML()}>
					</div>
				</div>
			</div>
			
		</div>
  	);
}

export default App;

