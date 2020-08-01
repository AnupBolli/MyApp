sap.ui.define(
	["sap/ui/core/UIComponent"],
	function(UIComponent){
		"use strict";
		return UIComponent.extend("MyApp.MyApp.Component",{
			
			metadata:{
				manifest:"json"
			},
			
			init:function(){
				// call the init function of the parent
				UIComponent.prototype.init.apply(this,arguments);
				this.getModel().setUseBatch(false);
			}
		});
});