import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifyProvider } from '@aws-amplify/ui-react'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>React Fullstack Application with AWS Amplify</p>
			</header>

      < AmplifyProvider />
		</div>
	);
}

export default withAuthenticator(App);
