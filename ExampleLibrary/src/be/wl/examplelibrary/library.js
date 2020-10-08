/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library be.wl.examplelibrary.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * Demo Lib
		 *
		 * @namespace
		 * @name be.wl.examplelibrary
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "be.wl.examplelibrary",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			noLibraryCSS: true,
			types: [],
			interfaces: [],
			controls: [
				"be.wl.examplelibrary.controls.Example"
			],
			elements: []
		});

		/* eslint-disable */
		return be.wl.examplelibrary;
		/* eslint-enable */

	}, /* bExport= */ false);