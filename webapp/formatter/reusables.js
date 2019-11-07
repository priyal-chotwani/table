sap.ui.define([],
	function () {
		"use strict";
		return {
			fnOnFormatDate: function (date) {
				var formattedDate = date.substring(0, 2) + "-" + date.substring(2, 4) + "-" + date.substring(4);
				return formattedDate;
			},
			fnOnFormatLanguage: function (lang) {
				var formattedLang = "";
				if (lang === "EN") {
					formattedLang = "English";
				}
				if (lang === "DE") {
					formattedLang = "German";
				}
				if (lang === "HI") {
					formattedLang = "Hindi";
				}
				if (lang === "FR") {
					formattedLang = "French";
				}
				return formattedLang;
			}
		};
	});