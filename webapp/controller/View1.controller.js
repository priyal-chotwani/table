sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"table_assignment/table_assignment/formatter/reusables"

], function (Controller, reusables) {
	"use strict";
	return Controller.extend("table_assignment.table_assignment.controller.View1", {
		test: reusables,
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel("./model/data.json");
			this.getView().byId("table1").setModel(oModel);
		}
	});
});