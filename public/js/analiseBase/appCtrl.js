class AppCtrl {
    constructor(){
        this.appState
        this.listStates = {
            _INITIAL: 'INITIAL',
            _SEARCHING: 'SEARCHING',
            _FILTERED: 'FILTERED'
        }
    }
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//FETCH ALL REGISTER TO ANALIZE
    fetchAllRegistersToAnalize(dataCtrl,uiCtrl){
        fetch('/fetchAllRegistersToAnalize')
        .then(response => {return response.json()})
        .then(answer => {
            dataCtrl.addRegisters(answer)
            this.updateAppState(this.returnAppStates()._INITIAL)
            uiCtrl.updateUserInterfaceAccordingToAppState(dataCtrl,this)
            uiCtrl.showHideSpinner('hide')
        })
        .catch(err => console.log(err))
    }
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//LOAD SEARCH BOXES INPUT EVENT LISTENERS
    loadSearchBoxInputEventListeners(dataCtrl,uiCtrl){
        const searchBoxesId = uiCtrl.returnIds().searchInputs
        const searchFieldsOjb = {
            acrdPaj: null,
            unicoOld: null,
            mci: null,
            unicoNew: null,
            sistema: null,
            prefixo: null,
            npj: null, 
            vinculo: null,
            entradaBase: null,
            fluxoEstoque: null
        }
        for(const inputID in searchBoxesId){
            document.getElementById(inputID).addEventListener('focus',(e)=> {
                this.appState = this.listStates._SEARCHING
                 if(e.keyCode===13){
                      e.preventDefault() 
                }
            })
            document.getElementById(inputID).addEventListener('input',(e)=> {
                switch (inputID) {
                    case searchBoxesId.acrdPaj:
                        e.target.value = e.target.value.replace(/[\d]/,'')
                        searchFieldsOjb.acrdPaj = e.target.value === '' ? null : e.target.value
                        break;v
                    case searchBoxesId.sistema:
                        e.target.value = e.target.value.replace(/[\d]/,'')
                        searchFieldsOjb.sistema = e.target.value === '' ? null : e.target.value
                        break;
                    case searchBoxesId.fluxoEstoque:
                        e.target.value = e.target.value.replace(/[\d]/,'')
                        searchFieldsOjb.fluxoEstoque = e.target.value === '' ? null : e.target.value              
                        break;
                    case searchBoxesId.vinculo:
                        e.target.value = e.target.value.replace(/[\d]/,'')
                        searchFieldsOjb.vinculo = e.target.value === '' ? null : e.target.value
                        break;
                    case searchBoxesId.entradaBase:
                        e.target.value = e.target.value.replace(/[a-zA-Z]/,'')
                        searchFieldsOjb.entradaBase = e.target.value === '' ? null : e.target.value
                        break;
                    case searchBoxesId.npj:
                        e.target.value = e.target.value.replace(/[\D]/,'')
                        searchFieldsOjb.npj = e.target.value === '' ? null : e.target.value
                        break;
                    case searchBoxesId.prefixo:
                        e.target.value = e.target.value.replace(/[\D]/,'')
                        searchFieldsOjb.prefixo = e.target.value === '' ? null : e.target.value
                        break;
                    case searchBoxesId.mci:
                        e.target.value = e.target.value.replace(/[\D]/,'')
                        searchFieldsOjb.mci = e.target.value === '' ? null : e.target.value
                        break;
                    case searchBoxesId.unicoNew:
                        e.target.value = e.target.value.replace(/[\D]/,'')
                        searchFieldsOjb.unicoNew = e.target.value === '' ? null : e.target.value = '' ? null : e.target.value
                        break;
                    case searchBoxesId.unicoOld:
                        e.target.value = e.target.value.replace(/[\D]/,'')
                        searchFieldsOjb.unicoOld = e.target.value === '' ? null : e.target.value
                        break;
                    default: 
                        break;
                }
                dataCtrl.addSelectedValues(searchFieldsOjb)
                uiCtrl.showHideSpinner2('show')
                setTimeout(() => {
                    if(e.target.value==null||e.target.value===''){
                        var hasValues = false
                        for(const value in dataCtrl.returnData('searchValues')){
                            if(dataCtrl.returnData('searchValues')[value]!=null){hasValues=true }
                        }
                        if(!hasValues){
                            e.target.value = null
                            this.appState = this.listStates._FILTERED
                        }
                    }
                    uiCtrl.updateUserInterfaceAccordingToAppState(dataCtrl,this)
                    !hasValues ? this.loadRegistraAnaliseLimpaSelecionadosEventListeners(dataCtrl,uiCtrl) : null
                    uiCtrl.updateButtonTextValue(dataCtrl.returnData('selectedRow').length)
                }, 0);
            })
        }
    }
//LOAD CHECKBOXES INPUT EVENT LISTENERS
    loadCheckboxInputEventListeners(dataCtrl,uiCtrl){
        const className = uiCtrl.returnIds().classNames.checkboxesSelector
        for(const input of document.getElementsByClassName(className)){
            input.addEventListener('click',(e)=>{
                dataCtrl.updateRegChecked(e.target.id)
                dataCtrl.addSelectedRow(parseInt(e.target.id),e.target.checked)
                uiCtrl.updateButtonTextValue(dataCtrl.returnData('selectedRow').length)
            })
        }
    }
//LOAD PREFIXOS EVENT LISTENERS
    loadPrefixosEventListeners(dataCtrl,uiCtrl){
        const prefixos = dataCtrl.returnData('listaPrefixos')
        prefixos.forEach(prefixo => {
            document.getElementById(prefixo.prefixos).addEventListener('click',(e)=>{
                this.appState = this.listStates._FILTERED
                dataCtrl.addSelectedPrefixo(e.target.id)
                dataCtrl.clearSelectedRow()
                uiCtrl.addRemoveActiveClassFromPrefixos(e.target)
                uiCtrl.updateUserInterfaceAccordingToAppState(dataCtrl,this)
                uiCtrl.updateButtonTextValue(dataCtrl.returnData('selectedRow').length)
                this.loadRegistraAnaliseLimpaSelecionadosEventListeners(dataCtrl,uiCtrl)
            })
        })
    }
//LOAD REGISTRAR ANALISE E LIMPAR SELECIONADOS EVENT LISTENTERS
    loadRegistraAnaliseLimpaSelecionadosEventListeners(dataCtrl,uiCtrl){
        const ids = uiCtrl.returnIds().btns
        document.getElementById(ids.registrarAnalise).addEventListener('click',(e)=>{
            uiCtrl.showHideSpinner2('show')
            fetch('\analiseBase',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataCtrl.returnData('selectedRegisters'))
            })
            .then(answer => {return answer.json()})
            .then(response=> {
                console.log(response)
                alert(response.data.success)
                this.appState = this.listStates._INITIAL
                dataCtrl.updateRegAnalisado()
                dataCtrl.clearSelectedPrefixo()
                dataCtrl.clearSelectedRow()
                uiCtrl.showHideSpinner2('hide')
                uiCtrl.updateUserInterfaceAccordingToAppState(dataCtrl,this)
            })
            .catch(err => {
                console.log(err)
                alert(response.error.error)
            })
        })
        document.getElementById(ids.limparSelecionados).addEventListener('click',(e)=>{
            dataCtrl.clearSelectedRow()
            uiCtrl.clearCheckedCheckboxes()
            uiCtrl.updateButtonTextValue(dataCtrl.returnData('selectedRow').length)
        })
    }
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//APP STATE
    updateAppState(appState){
        this.appState = appState
    }
    returnAppState(){
        return this.appState
    }
    returnAppStates(){
        return this.listStates
    }
}