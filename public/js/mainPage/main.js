var appCtrl = new APPCtrl()
var uiCtrl = new UICtrl()
var dataCtrl = new DataCtrl()

appCtrl.readCookie()
appCtrl.loadCurrentDatabaseSavedFilters(dataCtrl, uiCtrl, true)
appCtrl.setCookie()
appCtrl.loadEventeListeners(dataCtrl, uiCtrl)

