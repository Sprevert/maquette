import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

import "assets/css/font-awesome.min.css";
import "assets/css/plumeo.css";
import "assets/css/bootstrap.4-6.min.css";
import "assets/css/nextjs-argon-dashboard.min.css";

Router.events.on("routeChangeStart", (url) => {
	console.log(`Loading: ${url}`);
	document.body.classList.add("body-page-transition");
	ReactDOM.render(
		<PageChange path={url} />,
		document.getElementById("page-transition")
	);
});
Router.events.on("routeChangeComplete", () => {
	ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
	document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
	ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
	document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
	componentDidMount() {
		let comment = document.createComment(`
`);
		document.insertBefore(comment, document.documentElement);
	}
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}
	render() {
		const { Component, pageProps } = this.props;

		const Layout = Component.layout || (({ children }) => <>{children}</>);

		return (
			<React.Fragment>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<title>Pluméo : Votre portail auteur</title>
					<meta name="description" content="Plumeo, votre portail auteur." />
					<link rel="apple-touch-icon" sizes="180x180" href={require("assets/img/plumeo/apple-touch-icon.png")} />
					<link rel="icon" type="image/png" sizes="32x32" href={require("assets/img/plumeo/favicon-32x32.png")} />
					<link rel="icon" type="image/png" sizes="16x16" href={require("assets/img/plumeo/favicon-16x16.png")} />
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</React.Fragment>
		);
	}
}
