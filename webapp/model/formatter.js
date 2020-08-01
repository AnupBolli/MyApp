sap.ui.define([],
	function () {
		"use strict";

		return {
			delivery: function (unitPrice) {
				var sResult = "";
				var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

				sResult = unitPrice > 60 ? oResourceBundle.getText("fomatterFreeDel") : oResourceBundle.getText("fomatterStdDel");
				return sResult;
			}
		};
	});