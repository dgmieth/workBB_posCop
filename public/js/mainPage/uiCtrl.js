class UICtrl {
    //=======================================================================================================================
    //ui properties
    constructor() {
        this.alertSuccess= 'successAlert',
        this.alertSuccessCloseBtn= 'successAlertCloseBtn',
        this.dangerAlert= 'dangerAlert',
        this.dangerAlertCloseBtn= 'dangerAlertCloseBtn',
        this.openingPageModalTitle= 'openingPageModal-title',
        this.openingPageModalP1 = 'openingPageModal-p1'
        this.openingPageModalP2 = 'openingPageModal-p2',
        this.openingPageModalP3 = 'openingPageModal-p3',
        this.openingPageModalP4 = 'openingPageModal-p4',
        this.publicoAlvoWrapper= 'ff-title-content-wrapper',
        this.publicoAlvoOptionsWrapper= 'ff-options-content-wrapper',
        this.publicoAlvoSimWrapper= 'ff-option1-content-wrapper',
        this.publicoAlvoSimCheckbox= 'ff-option1-checkbox',
        this.publicoAlvoNaoWrapper= 'ff-option2-content-wrapper',
        this.publicoAlvoNaoCheckbox= 'ff-option2-checkbox',
        this.publicoAlvoAlvaWrapper= 'ff-option3-content-wrapper',
        this.publicoAlvoAlvaCheckbox= 'ff-option3-checkbox',
        this.sistemaRespWrapper= 'secondFilter-content-wrapper',
        this.sistemaRespOptionsWrapper= 'sf-options-content-wrapper',
        this.sistemaRespXERWrapper= 'sf-option1-content-wrapper',
        this.sistemaRespXERCheckbox= 'sf-option1-checkbox',
        this.sistemaRespCOPWrapper= 'sf-option2-content-wrapper',
        this.sistemaRespCOPCheckbox= 'sf-option2-checkbox',
        this.listaPrefWrapper= 'thirdFilter-content-wrapper',
        this.listaPrefOptionsWrapper= 'tf-options-content-wrapper',
        this.sitVincOprWrapper= '4Filter-content-wrapper',
        this.sitVincOprOptionsWrapper= '4f-options-content-wrapper',
        this.sitVincOprNaoVinculadaWrapper= '4f-option1-content-wrapper',
        this.sitVincOprNaoVinculadaCheckbox= '4f-option1-checkbox',
        this.sitVincOprVinculadaWrapper= '4f-option2-content-wrapper',
        this.sitVincOprVinculadaCheckbox= '4f-option2-checkbox',
        this.sitVincOprVinculadaOutroNPJWrapper= '4f-option3-content-wrapper',
        this.sitVincOprVinculadaOutroNPJCheckbox= '4f-option3-checkbox',
        this.acrdRegPorltaWrapper= '5Filter-content-wrapper',
        this.acrdRegPorltaOptionsWrapper= '5f-options-content-wrapper',
        this.acrdRegPorltaSimWrapper= '5f-option1-content-wrapper',
        this.acrdRegPorltaSimCheckbox= '5f-option1-checkbox',
        this.acrdRegPorltaNaoWrapper= '5f-option2-content-wrapper',
        this.acrdRegPorltaNaoCheckbox= '5f-option2-checkbox',
        this.acrdRegPorltaDuplicadosWrapper= '5f-option3-content-wrapper',
        this.acrdRegPorltaDuplicadosCheckbox= '5f-option3-checkbox',
        this.totaisRegistrosWrapper= 'mp-totalProt-content-wrapper',
        this.totaisRegistrosFluxoWrapper= 'fluxo-number-content-wrapper',
        this.totaisRegistroFluxoId= 'registrosFluxo',
        this.totaisRegistroEstoqueWrapper= 'estoque-number-content-wrapper',
        this.totaisRegistroEstoqueId= 'registrosEstoque',
        this.setQtdFluxoEstoqueWrapper= 'mp-fluxoEstoque-content-wrapper',
        this.setQtdeFluxoWrapper= 'mp-fluxoEstoque-qtdeFluxo-contentWrapper',
        this.setQtdeFluxoId= 'fluxoNumber',
        this.setQtdeEstoqueWrapper= 'mp-fluxoEstoque-qtdeEstoque-contentWrapper',
        this.setQtdeEstoqueId= 'estoqueNumber',
        this.createNewConfBtn = 'createNewConfBtn',
        this.saveNewConfBtn = 'saveNewConfBtn',
        this.clearConfBtn = 'clearConfBtn',
        this.generateExcel = 'generateExcel',
        this.prefSelected = 'pref-selected',
        this.prefCheckboxes = 'pref-checkboxes',
        this.filterCheckbox = 'filter-checkbox',

        this.outrosWrapper = '6Filter-content-wrapper',
        this.outrosTitleWrapper = '6f-title-content-wrapper',
        this.outrosDivContainerOptions = '6f-options-content-wrapper',
        this.outrosDivOptionOneContainer = '6f-option1-content-wrapper',
        this.outrosOptionOneRadius = '6f-option1-checkbox',
        this.outrosDivOptionTwoContainer = '6f-option2-content-wrapper',
        this.outrosOptionTwoRadius = '6f-option2-checkbox',
        this.outrosDivOptionThreeContainer = '6f-option3-content-wrapper',
        this.outrosOptionThreeRadius = '6f-option3-checkbox',
        this.outrosDivOptionFourContainer = '6f-option4-content-wrapperr',
        this.outrosOptionFourRadius = '6f-option4-checkbox'
    }
    // =====================================================================================================================================================================
    // public methods
    // user interface updates
    // interface update
    updateWholeUserInterface(data){
        data.publicoAlvoSim > 0 ? document.getElementById(this.publicoAlvoSimCheckbox).checked = true : document.getElementById(this.publicoAlvoSimCheckbox).checked = false
        data.publicoAlvoNao > 0 ? document.getElementById(this.publicoAlvoNaoCheckbox).checked = true : document.getElementById(this.publicoAlvoNaoCheckbox).checked = false
        data.publicoAlvoALVA > 0 ? document.getElementById(this.publicoAlvoAlvaCheckbox).checked = true : document.getElementById(this.publicoAlvoAlvaCheckbox).checked = false

        data.XER > 0 ? document.getElementById(this.sistemaRespXERCheckbox).checked = true : document.getElementById(this.sistemaRespXERCheckbox).checked = false
        data.COP > 0 ? document.getElementById(this.sistemaRespCOPCheckbox).checked = true : document.getElementById(this.sistemaRespCOPCheckbox).checked = false

        data.operacaoNaoVinculada > 0 ? document.getElementById(this.sitVincOprNaoVinculadaCheckbox).checked = true : document.getElementById(this.sitVincOprNaoVinculadaCheckbox).checked = false
        data.operacaoVinculada > 0 ? document.getElementById(this.sitVincOprVinculadaCheckbox).checked = true : document.getElementById(this.sitVincOprVinculadaCheckbox).checked = false
        data.operacaoVinculadaEmOutroNPJ > 0 ? document.getElementById(this.sitVincOprVinculadaOutroNPJCheckbox).checked = true : document.getElementById(this.sitVincOprVinculadaOutroNPJCheckbox).checked = false

        data.acordoRegPortalSim > 0 ? document.getElementById(this.acrdRegPorltaSimCheckbox).checked = true : document.getElementById(this.acrdRegPorltaSimCheckbox).checked = false
        data.acordoRegPortalNao > 0 ? document.getElementById(this.acrdRegPorltaNaoCheckbox).checked = true : document.getElementById(this.publicoAlvoSimCheckbox).checked = false
        //data.acordoRegPortalDuplicados > 0 ? document.getElementById(this.acrdRegPorltaDuplicadosCheckbox).checked = true : document.getElementById(this.acrdRegPorltaDuplicadosCheckbox).checked = false

        data.totaisEstoque > 0 ? document.getElementById(this.totaisRegistroEstoqueId).innerHTML = `<strong>${data.totaisEstoque}</strong>` : document.getElementById(this.totaisRegistroEstoqueId).innerHTML = `<strong>0</strong>`
        data.totaisFluxo > 0 ? document.getElementById(this.totaisRegistroFluxoId).innerHTML = `<strong>${data.totaisFluxo}</strong>` : document.getElementById(this.totaisRegistroFluxoId).innerHTML = `<strong>0</strong>`

        data.estoqueNumber > 0 ? document.getElementById(this.setQtdeEstoqueId).value = `${data.estoqueNumber}` : document.getElementById(this.setQtdeEstoqueId).value = ''
        data.fluxoNumber > 0 ? document.getElementById(this.setQtdeFluxoId).value = `${data.fluxoNumber}` : document.getElementById(this.setQtdeFluxoId).value = ''

        data.duplicadoSimNao > 0 ? document.getElementById(this.outrosOptionOneRadius).checked = true : document.getElementById(this.outrosOptionTwoRadius).checked = true
        data.analisadoSimNao > 0 ? document.getElementById(this.outrosOptionThreeRadius).checked = true : document.getElementById(this.outrosOptionFourRadius).checked = true

        data.listaPrefixos.forEach(pref => {
            const ele = document.getElementById(`${pref}`)
            if(ele.classList.contains(`${this.prefSelected}`)){
                ele.classList.remove(`${this.prefSelected}`)
                ele.checked = false
            }else{
                ele.classList.add(`${this.prefSelected}`)
                ele.checked = true
            }
        })
        if(data.hasSavedValues){
            this.buttonEnableDisable(1)
        }else{
            this.buttonEnableDisable(3)
        }
    }
    // just total regisers 
    updateTotaisDeRegistrosNaBase(data){
        data.totaisEstoque > 0 ? document.getElementById(this.totaisRegistroEstoqueId).innerHTML = `<strong>${data.totaisEstoque}</strong>` : document.getElementById(this.totaisRegistroEstoqueId).innerHTML = `<strong>0</strong>`
        data.totaisFluxo > 0 ? document.getElementById(this.totaisRegistroFluxoId).innerHTML = `<strong>${data.totaisFluxo}</strong>` : document.getElementById(this.totaisRegistroFluxoId).innerHTML = `<strong>0</strong>`
    }
    //clear all fields
    clearAllFields(){
        document.getElementById(this.publicoAlvoSimCheckbox).checked = false
        document.getElementById(this.publicoAlvoNaoCheckbox).checked = false
        document.getElementById(this.publicoAlvoAlvaCheckbox).checked = false

        document.getElementById(this.sistemaRespXERCheckbox).checked = false
        document.getElementById(this.sistemaRespCOPCheckbox).checked = false

        document.getElementById(this.sitVincOprNaoVinculadaCheckbox).checked = false
        document.getElementById(this.sitVincOprVinculadaCheckbox).checked = false
        document.getElementById(this.sitVincOprVinculadaOutroNPJCheckbox).checked = false

        document.getElementById(this.acrdRegPorltaSimCheckbox).checked = false
        document.getElementById(this.acrdRegPorltaNaoCheckbox).checked = false
        //document.getElementById(this.acrdRegPorltaDuplicadosCheckbox).checked = false

        //document.getElementById(this.outrosOptionOneRadius).checked = false
        document.getElementById(this.outrosOptionTwoRadius).checked = true
        //document.getElementById(this.outrosOptionThreeRadius).checked = false
        document.getElementById(this.outrosOptionFourRadius).checked = true

        document.getElementById(this.setQtdeEstoqueId).value = ''
        document.getElementById(this.setQtdeFluxoId).value = ''
        
        for(let ele of document.getElementsByClassName(`${this.prefSelected}`)){
            ele.classList.remove(`${this.prefSelected}`)
            ele.checked = false
        }
    }
    // =====================================================================================================================================================================
    // functions for public methods
    // enables/disables buttons
    buttonEnableDisable(type){
        if(type===1){
            createNewConfBtn.classList.remove('disabled')
            createNewConfBtn.disabled = false
            saveNewConfBtn.classList.add('disabled')
            saveNewConfBtn.disabled = true
            clearConfBtn.classList.add('disabled')
            clearConfBtn.disabled = true
            this.enableDisableCheckBoxes(true)
        } else if(type===2){
            createNewConfBtn.classList.add('disabled')
            createNewConfBtn.disabled = true
            saveNewConfBtn.classList.remove('disabled')
            saveNewConfBtn.disabled = false
            clearConfBtn.classList.remove('disabled')
            clearConfBtn.disabled = false
            this.enableDisableCheckBoxes(false)
        } else if(type===3){
            createNewConfBtn.classList.add('disabled')
            createNewConfBtn.disabled = true
            saveNewConfBtn.classList.remove('disabled')
            saveNewConfBtn.disabled = false
            clearConfBtn.classList.add('disabled')
            clearConfBtn.disabled = true
            this.enableDisableCheckBoxes(false)
        } 
    }
    //enables/disables checkboxes/input fields
    enableDisableCheckBoxes(trueOrFalse){
        document.getElementById(this.publicoAlvoSimCheckbox).disabled = trueOrFalse
        document.getElementById(this.publicoAlvoNaoCheckbox).disabled = trueOrFalse
        document.getElementById(this.publicoAlvoAlvaCheckbox).disabled = trueOrFalse

        document.getElementById(this.sistemaRespXERCheckbox).disabled = trueOrFalse
        document.getElementById(this.sistemaRespCOPCheckbox).disabled = trueOrFalse

        document.getElementById(this.sitVincOprNaoVinculadaCheckbox).disabled = trueOrFalse
        document.getElementById(this.sitVincOprVinculadaCheckbox).disabled = trueOrFalse
        document.getElementById(this.sitVincOprVinculadaOutroNPJCheckbox).disabled = trueOrFalse

        document.getElementById(this.acrdRegPorltaSimCheckbox).disabled = trueOrFalse
        document.getElementById(this.acrdRegPorltaNaoCheckbox).disabled = trueOrFalse
        //document.getElementById(this.acrdRegPorltaDuplicadosCheckbox).disabled = trueOrFalse

        for(let ele of document.getElementsByClassName(`${this.prefCheckboxes}`)){
            ele.disabled = trueOrFalse
        }

        document.getElementById(this.setQtdeEstoqueId).disabled = trueOrFalse
        document.getElementById(this.setQtdeFluxoId).disabled = trueOrFalse
        if(!trueOrFalse){
            document.getElementById(this.setQtdeEstoqueId).classList.add('disabled')
            document.getElementById(this.setQtdeFluxoId).classList.add('disabled')
        }else{
            document.getElementById(this.setQtdeEstoqueId).classList.remove('disabled')
            document.getElementById(this.setQtdeFluxoId).classList.remove('disabled')
        }
        document.getElementById(this.outrosOptionOneRadius).disabled = trueOrFalse
        document.getElementById(this.outrosOptionTwoRadius).disabled = trueOrFalse
        document.getElementById(this.outrosOptionThreeRadius).disabled = trueOrFalse
        document.getElementById(this.outrosOptionFourRadius).disabled = trueOrFalse
    }
    // =====================================================================================================================================================================
    // methods to grab information from UI
    // returns information from clicked ui element to appCtrl
    getSelectedElementValue(ele,classString){
        let array = []
        if(ele.classList.contains(classString)){
            ele.classList.remove(classString)
        } else {
            ele.classList.add(classString)
        }
        for(let e of document.getElementsByClassName(`${this.prefCheckboxes} ${this.prefSelected}`)){
            array.push(parseInt(e.id))
        }
        return {
                publicoAlvoSim: document.getElementById(this.publicoAlvoSimCheckbox).checked ? 1 : 0,
                publicoAlvoNao: document.getElementById(this.publicoAlvoNaoCheckbox).checked ? 1 : 0,
                publicoAlvoALVA: document.getElementById(this.publicoAlvoAlvaCheckbox).checked ? 1 : 0,
                XER: document.getElementById(this.sistemaRespXERCheckbox).checked ? 1 : 0,
                COP: document.getElementById(this.sistemaRespCOPCheckbox).checked ? 1 : 0,
                listaPrefixos: array,
                operacaoNaoVinculada: document.getElementById(this.sitVincOprNaoVinculadaCheckbox).checked ? 1 : 0,
                operacaoVinculada: document.getElementById(this.sitVincOprVinculadaCheckbox).checked ? 1 : 0,
                operacaoVinculadaEmOutroNPJ: document.getElementById(this.sitVincOprVinculadaOutroNPJCheckbox).checked ? 1 : 0,
                acordoRegPortalSim: document.getElementById(this.acrdRegPorltaSimCheckbox).checked ? 1 : 0,
                acordoRegPortalNao: document.getElementById(this.acrdRegPorltaNaoCheckbox).checked ? 1 : 0,
                //acordoRegPortalDuplicados: document.getElementById(this.acrdRegPorltaDuplicadosCheckbox).checked ? 1 : 0,
                estoqueNumber: document.getElementById(this.setQtdeEstoqueId).value !== '' ? parseInt(document.getElementById(this.setQtdeEstoqueId).value) : 0,
                fluxoNumber: document.getElementById(this.setQtdeFluxoId).value !== '' ? parseInt(document.getElementById(this.setQtdeFluxoId).value) : 0,
                duplicadoSimNao: document.getElementById(this.outrosOptionOneRadius).checked ? 1 : 0,
                analisadoSimNao: document.getElementById(this.outrosOptionThreeRadius).checked ? 1 : 0
        }
    }
    // =====================================================================================================================================================================
    // modals
    // manipulates modals text
    changeInnerHTMLWithID(id, text){
        var ele = document.getElementById(`${id}`)
        ele.innerHTML = text
    }
    // =====================================================================================================================================================================
    // manipulation of this instance
    // returns instace's properties
    get getIdSelectors(){
        return this
    }
}