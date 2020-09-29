/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library com.balta.examplelibrary.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * Demo Lib
		 *
		 * @namespace
		 * @name com.balta.examplelibrary
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "com.balta.examplelibrary",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			noLibraryCSS: true,
			types: [],
			interfaces: [],
			controls: [
				"com.balta.examplelibrary.controls.Example"
			],
			elements: []
		});

		/* eslint-disable */
		return com.balta.examplelibrary;
		/* eslint-enable */

	}, /* bExport= */ false);