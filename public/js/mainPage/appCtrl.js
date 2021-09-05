class APPCtrl {
    constructor(){
        this.alertShown = false
    }
    //=======================================================================================================================
    //listeners
    //loads all listeners
    loadEventeListeners(dataCtrl, uiCtrl){
        document.getElementById(uiCtrl.getIdSelectors.publicoAlvoOptionsWrapper).addEventListener('click', (e)=>{
            this.filterOptionsClick(e,dataCtrl,uiCtrl)
        })
        document.getElementById(uiCtrl.getIdSelectors.sistemaRespOptionsWrapper).addEventListener('click', (e)=>{
            this.filterOptionsClick(e,dataCtrl,uiCtrl)
        })
        document.getElementById(uiCtrl.getIdSelectors.listaPrefOptionsWrapper).addEventListener('click', (e)=>{
            this.filterOptionsClick(e,dataCtrl,uiCtrl)
        })
        document.getElementById(uiCtrl.getIdSelectors.sitVincOprOptionsWrapper).addEventListener('click', (e)=>{
            this.filterOptionsClick(e,dataCtrl,uiCtrl)
        })
        document.getElementById(uiCtrl.getIdSelectors.acrdRegPorltaOptionsWrapper).addEventListener('click', (e)=>{
            if(document.getElementById(uiCtrl.getIdSelectors.acrdRegPorltaSimCheckbox).checked || document.getElementById(uiCtrl.getIdSelectors.acrdRegPorltaNaoCheckbox).checked){
                document.getElementById(uiCtrl.getIdSelectors.outrosOptionOneRadius).checked = false
                document.getElementById(uiCtrl.getIdSelectors.outrosOptionTwoRadius).checked = true
            }
            this.filterOptionsClick(e,dataCtrl,uiCtrl)
        })
        document.getElementById(uiCtrl.getIdSelectors.setQtdeFluxoId).addEventListener('keyup',(e)=>{
            this.filterOptionsClick(e,dataCtrl,uiCtrl)
        })
        document.getElementById(uiCtrl.getIdSelectors.setQtdeEstoqueId).addEventListener('keyup',(e)=>{
            this.filterOptionsClick(e,dataCtrl,uiCtrl) 
        })
        document.getElementById(uiCtrl.getIdSelectors.outrosDivContainerOptions).addEventListener('click',(e)=>{
            if(document.getElementById(uiCtrl.getIdSelectors.outrosOptionOneRadius).checked){
                document.getElementById(uiCtrl.getIdSelectors.acrdRegPorltaSimCheckbox).disabled = true
                document.getElementById(uiCtrl.getIdSelectors.acrdRegPorltaSimCheckbox).checked = false
                document.getElementById(uiCtrl.getIdSelectors.acrdRegPorltaNaoCheckbox).disabled = true
                document.getElementById(uiCtrl.getIdSelectors.acrdRegPorltaNaoCheckbox).checked = false
            }else{
                document.getElementById(uiCtrl.getIdSelectors.acrdRegPorltaSimCheckbox).disabled = false
                document.getElementById(uiCtrl.getIdSelectors.acrdRegPorltaNaoCheckbox).disabled = false
            }
            this.filterOptionsClick(e,dataCtrl,uiCtrl) 
        })
        document.getElementById(uiCtrl.getIdSelectors.createNewConfBtn).addEventListener('click',(e)=>{
            dataCtrl.clearData()
            uiCtrl.clearAllFields()
            this.getTotaisRegComFiltros(null,dataCtrl)
            uiCtrl.buttonEnableDisable(2)
        })
        document.getElementById(uiCtrl.getIdSelectors.clearConfBtn).addEventListener('click',(e)=>{
            this.loadCurrentDatabaseSavedFilters(dataCtrl, uiCtrl)
        })
        document.getElementById(uiCtrl.getIdSelectors.saveNewConfBtn).addEventListener('click', (e)=>{
            dataCtrl.validateData()
            this.saveNewConfiguration(dataCtrl,uiCtrl)
        })
        document.getElementById(uiCtrl.getIdSelectors.generateExcel).addEventListener('click',(e)=>{
            this.getSpreadSheet(dataCtrl)
        })
    }
    filterOptionsClick(e,dataCtrl,uiCtrl){
        if(e.target.classList.contains(uiCtrl.getIdSelectors.filterCheckbox)){
            this.getTotaisRegComFiltros(uiCtrl.getSelectedElementValue(e.target, 'pref-selected'),dataCtrl)
        }
    }
    //=======================================================================================================================
    //functions for service routes
    //initial page loading functions
    loadCurrentDatabaseSavedFilters(dataCtrl, uiCtrl, mostrarWarning){
        fetch('/retornaFiltrosSetados')
        .then(response => {
            return response.json()
        }).then(data => {
            dataCtrl.setInitialValues(data)
            var data = dataCtrl.getData()
            uiCtrl.updateWholeUserInterface(data)
            if(mostrarWarning && !this.alertShown){
                if(data.hasSavedValues){
                    uiCtrl.changeInnerHTMLWithID(uiCtrl.getIdSelectors.openingPageModalTitle, '<strong>Configuração existente</strong>')
                    uiCtrl.changeInnerHTMLWithID(uiCtrl.getIdSelectors.openingPageModalP1, 'Já existe uma configuração salva no banco de dados e que foi carregada na página.')
                    uiCtrl.changeInnerHTMLWithID(uiCtrl.getIdSelectors.openingPageModalP2, 'Se desejar alterá-la, clique no botão <strong>Criar Nova</strong>. Após terminada a seleção dos filtros para a nova configuração, clique no botão <strong>Salvar</strong>')
                    uiCtrl.changeInnerHTMLWithID(uiCtrl.getIdSelectors.openingPageModalP3, 'Se desejar retornar para a configuração atual, clique em <strong>Voltar configuração atual</strong>.')
                    uiCtrl.changeInnerHTMLWithID(uiCtrl.getIdSelectors.openingPageModalP4, '<strong>Atenção!!!!!</strong> </br>O botão Voltar configuração atual traz as informações da última configuração salva. Se você clicou em salvar, ele trará essa última configuração salva.')
                    $('document').ready(function(){
                        $('#openingPageModal').modal('show')
                    })
                }else{
                    uiCtrl.changeInnerHTMLWithID(uiCtrl.getIdSelectors.openingPageModalTitle,'<strong>Nenhuma</strong> configuração ativa')
                    uiCtrl.changeInnerHTMLWithID(uiCtrl.getIdSelectors.openingPageModalP1, 'Escolha os filtros desejados, informe um número para a quantidade de protocolos a serem gerados como fluxo e estoque e clique em salvar.')
                    $('document').ready(function(){
                        $('#openingPageModal').modal('show')
                    })
                }
            }
        })
        .catch(err => console.log(err))
    }
    //returns count of registers in database after applying filters
    getTotaisRegComFiltros(dataObj, dataCtrl){
        if(dataObj === null){
            dataObj = dataCtrl.getData()
        }
        fetch(`/contaRegistrosComFiltros?dados=${JSON.stringify(dataObj)}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            dataObj.totaisEstoque = parseInt(data.est)
            dataObj.totaisFluxo = parseInt(data.flu)
            return dataObj
        }).then(dataObj => {
            dataCtrl.setData(dataObj)
            uiCtrl.updateTotaisDeRegistrosNaBase(dataCtrl.getData())
        })
        .catch(err => console.log(err))
    }
    //saves new configuration to database
    saveNewConfiguration(dataCtrl, uiCtrl){
        if(!dataCtrl.getData().hasSavedValues){
            console.log(0)
            this.alertTimeOut()
            $('document').ready(function(){
                $('#dangerAlert').show('fade')
                $('#dangerAlertCloseBtn').click(function(){
                    $('#dangerAlert').hide('fade')
                })
            })
            return null
        }
        console.log(1)
        fetch('/salvaNovaConf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataCtrl.getData())
        })
        .then(response => {
            console.log(2)
            return response.json()
        })
        .then(data =>{
            console.log(3)
            if(data.error){                
                console.log(4)
            }else{
                console.log(5)
                this.loadCurrentDatabaseSavedFilters(dataCtrl,uiCtrl,false)
                this.alertTimeOut()
                $('document').ready(function(){
                    $('#successAlert').show('fade')
                    $('#successAlertCloseBtn').click(function(){
                        $('#successAlert').hide('fade')
                    })
                })
            }

        })
        .catch(err => console.log(err))
    }
    //generates spreadsheet containing all registers in database after applying selected filters
    getSpreadSheet(dataCtrl){
        var fileName
        fetch(`/geraExcelComRegistros?dados=${JSON.stringify(dataCtrl.getData())}`)
        .then(response => {
            if(!response.ok){
                throw new Error('something went wrong')
            }
            fileName = response.headers.get('fileName')
            response.blob()
            .then(blobData =>{
                return URL.createObjectURL(blobData)
            })
            .then(url =>{
                var link = document.createElement('a')
                link.download = fileName
                link.href = url
                link.click()
            })
        })
        .catch(err => console.log(err))
    }
    //=======================================================================================================================
    //cookie
    //set and read cookies to controle initial modal execution on mainPage.hbs
    //set cookie
    setCookie(){
        document.cookie = 'alertShown=true'
    }
    //read cookie
    readCookie(){
        const cookiesArray = document.cookie.split(';')
        cookiesArray.forEach(cookie =>{
            const cookieTrimmed = cookie.trim()
            if(cookieTrimmed.match(/alertShown=true/)){
                this.alertShown = true
                return null
            }
        })
    }
    //=======================================================================================================================
    //timers
    //controls timer for alerts to fade out
    alertTimeOut (){
        setTimeout(()=>{
            $('#successAlert').hide('fade')
            $('#dangerAlert').hide('fade')
        },10000)
    }
}