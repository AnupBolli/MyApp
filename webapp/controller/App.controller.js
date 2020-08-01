sap.ui.define(
	["sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"MyApp/MyApp/model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	],
	function (Controller, MessageToast, formatter, Filter, FilterOperator) {
		Controller.extend("MyApp.MyApp.controller.App", {

			fFormatter: formatter,

			onPress: function () {
				var oBundle = this.getView().getModel("i18n").getResourceBundle(),
					sRec = this.getView().getModel("model1").getProperty("/recipient/name"),
					sMsg = oBundle.getText("buttonMsg", [sRec]);
				MessageToast.show(sMsg);
			},

			onFilter: function (oEvt) {
				var aFilter = [],
					sQuery = oEvt.getParameter("query"),
					oList = this.getView().byId("productList"),
					oBinding = oList.getBinding("items");
				if (sQuery) {
					if (isNaN(sQuery)) {
						aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
						oBinding.filter(aFilter);
					} else {
						aFilter.push(new Filter("ProductID", FilterOperator.EQ, sQuery));
						oBinding.filter(aFilter);
					}
				}
			},

			onItemSelected: function (oEvent) {
				var oSelectedItem = oEvent.getSource();
				var oContext = oSelectedItem.getBindingContext();
				var sPath = oContext.getPath();
				var oProductDetailPanel = this.byId("detailPanel");

				oProductDetailPanel.bindElement({
					path: sPath
				});
				this.byId("detailPanel").setVisible(true);
			}

		});
	});