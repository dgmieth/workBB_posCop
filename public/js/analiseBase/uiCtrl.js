class UICtrl {
    constructor(){
        this.spinner = 'spinner'
        this.spinner2 = 'spinner2'
        this.flexBoxPrefixos = 'flexBoxPrefixos'
        this.mainContent = 'mainContent'
        this.mainTable = 'mainTable'
        this.table = {
            tbody: 'tbody'
        }
        this.btns = {
            registrarAnalise: 'registrarAnalise',
            limparSelecionados: 'limparSelecionados'
        }
        this.textSelectedRows = 'textSelectedRows'
        this.searchInputs = {
            acrdPaj: 'acrdPaj',
            unicoOld: 'unicoOld',
            mci: 'mci',
            unicoNew: 'unicoNew',
            sistema: 'sistema',
            //prefixo: 'prefixo',
            npj: 'npj',
            vinculo: 'vinculo',
            entradaBase: 'entradaBase',
            fluxoEstoque: 'fluxoEstoque'
        }
        this.classNames = {
            checkboxesSelector: '_checkbox'
        }
    }
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//UPDATE USER INTERFACE ACCORDING TO APP STATE
    updateUserInterfaceAccordingToAppState(dataCtrl,appCtrl){

        // function criaInputId(reg){
        //     return `${reg.NR_UNCO_CTR_OPR}_${reg.NR_UNCO_CTR_VCLD}_${reg.NR_PRC}_${reg.quarentenaAte}`
        // }
        if(appCtrl.returnAppState()===appCtrl.returnAppStates()._INITIAL){
            const listaPrefixos = dataCtrl.returnData('listaPrefixos')
            var innerFlexBoxes = ''
            listaPrefixos.forEach(pref => {
                innerFlexBoxes = `${innerFlexBoxes}
                <div class="p-2">
                    <button id="${pref.prefixos}" class="btn btn-secondary _prefixos">${pref.prefixos}</button>
                </div>
                `
            })
            document.getElementById(this.flexBoxPrefixos).innerHTML = innerFlexBoxes
            document.getElementById(this.mainContent).innerHTML = `,
            <div class=".container-fluid h-75 w-100 text-center my-auto d-table" style="padding:40px">
                <div class="card card-body d-table-cell align-middle w-100" style="border: black 5px solid">
                    <p class="h-2">Selecione o prefixo para mostrar os registros
                </div>
            </div>
            `
            appCtrl.loadPrefixosEventListeners(dataCtrl,this)
            return 
        }
        if(appCtrl.returnAppState()===appCtrl.returnAppStates()._FILTERED){
            const registers = dataCtrl.returnData('filteredRegisters')
            const fluxoStartDate = dataCtrl.returnData('fluxoStartDate')[0].dataInicioEstoque

            var innerTable = ``
            registers.forEach(reg => {
                innerTable = `${innerTable} 
                <tr>
                    <td class=""><input type="checkbox" class="_checkbox" id="${reg.id}" ${reg.checkboxSelected === 1 ? 'checked' : ''}></td>
                    <td class="">${reg.acrdPaj}</td>
                    <td class="">${reg.NR_UNCO_CTR_OPR}</td>
                    <td class="">${reg.MCI}</td>
                    <td class="">${reg.NR_UNCO_CTR_VCLD}</td>
                    <td class="">${reg.SG_SIS_RSP_CDU_VCLD}</td>
                    <td class="">${reg.CD_PRF_DEPE_CDU_VCLD}</td>
                    <td class="">${reg.NR_PRC}</td>
                    <td class="">${reg.TX_NR_PRC_VCLD}</td>
                    <td class="">${reg.quarentenaAte.split('T')[0]}</td>
                    <td class="">${reg.fluxoEstoque}</td>
                </tr>
                `
            });
            document.getElementById(this.mainContent).innerHTML = `
            <style>
                thead tr:nth-child(1) th { position: sticky; top: 0; }
                .c0{
                    width: 45px!important;
                }
                .c1,.c8{
                    width: 185px!important;
                }
                .c2,.c4{
                    width: 156px!important;
                }
                .c3{
                    width: 85px!important;
                }
                .c5,.c6{
                    width: 70px!important;
                }
                .c7,.c9,.c10{
                    width: 130px!important;
                }
                #spinner2
                    
                }
            </style>
            <div id="spinner2" class=".container-fluid w-100 mx-auto my-auto" style="background-color: rgba(0,0,0,0.1);height: 61%!important;position: absolute;top: 35%!important;bottom: 5%!important;left: 0;right: 0;display:none">
                <img src="/img/spinner.gif" alt="" style="padding:50px!important">
            </div>
            <div class=".container-fluid w-100 mx-auto my-auto" style="height: 90%!important;overflow-y:auto">
                <table class="table table-sm table-striped">
                    <thead class="thead-dark"> 
                        <!--<tr>
                            <th></th>
                            <th class="c0002">Acordo registrado PAJ</th>
                            <th class="c0002">Nr Único Anterior</th>
                            <th class="c0002">MCI</th>
                            <th class="c0002">Nr Único Atual</th>
                            <th class="c0002">Sistema</th>
                            <th class="c0002">Prefixo</th>
                            <th class="c0002">NPJ</th>
                            <th class="c0002">Situação Vínculo</th>
                            <th class="c0002">Entrada na base</th>
                            <th class="c0002">Fluxo/Estoque</th>
                        </tr>-->
                        <tr>
                            <th class="c0">Analisado</th>
                            <th class="c1"><input type="text" id="${this.searchInputs.acrdPaj}" class="c1" placeholder="Acordo registrado PAJ"></th>
                            <th class="c2"><input type="text" id="${this.searchInputs.unicoOld}" class="c2" placeholder="Nr Único Anterior"></th>
                            <th class="c3"><input type="text" id="${this.searchInputs.mci}" class="c3" placeholder="MCI"></th>
                            <th class="c4"><input type="text" id="${this.searchInputs.unicoNew}" class="c4" placeholder="Nr Único Atual"></th>
                            <th class="c5"><input type="text" id="${this.searchInputs.sistema}" class="c5" placeholder="Sistema"></th>
                            <th class="c6">Prefixo</th>
                            <th class="c7"><input type="text" id="${this.searchInputs.npj}" class="c7" placeholder="NPJ"></th>
                            <th class="c8"><input type="text" id="${this.searchInputs.vinculo}" class="c8" placeholder="Situação Vínculo"></th>
                            <th class="c9"><input type="text" id="${this.searchInputs.entradaBase}" class="c9" placeholder="Entrada na base"></th>
                            <th class="c10"><input type="text" id="${this.searchInputs.fluxoEstoque}" class="c10" placeholder="Fluxo/Estoque"></th>
                        </tr>
                    </thead>
                    <tbody id="${this.table.tbody}">
                        ${innerTable}
                    </tbody>
                </table>
            </div>
            <div class=".container-fluid w-100 mx-auto my-auto text-center" style="padding:5px">
                <button id="${this.btns.registrarAnalise}" class="btn btn-primary">Registrar Análise</button>
                <button id="${this.btns.limparSelecionados}" class="btn btn-danger">Limpar Selecionados</button>
            </div>
            `
            appCtrl.loadSearchBoxInputEventListeners(dataCtrl,this)
        }
        if(appCtrl.returnAppState()===appCtrl.returnAppStates()._SEARCHING){
            const searchValues = dataCtrl.returnData('searchValues')
            const fluxoStartDate = dataCtrl.returnData('fluxoStartDate')[0].dataInicioEstoque
            const filteredValues = dataCtrl.returnData('filteredRegisters').filter(reg => {
                if((searchValues.acrdPaj!=null ? reg.acrdPaj.toLowerCase().match(new RegExp(searchValues.acrdPaj.toLowerCase(), 'ig')) : true )
                && (searchValues.entradaBase!=null ? reg.quarentenaAte.split(`T`)[0].toLowerCase().match(new RegExp(searchValues.entradaBase.toLowerCase(), 'ig')) : true )
                && (searchValues.mci!=null ? reg.MCI.toLowerCase().match(new RegExp(searchValues.mci.toLowerCase(), 'ig')) : true )
                && (searchValues.npj!=null ? reg.NR_PRC.toString().match(new RegExp(searchValues.npj, 'ig')) : true )
                && (searchValues.prefixo!=null ? reg.CD_PRF_DEPE_CDU_VCLD.toString().match(new RegExp(searchValues.prefixo, 'ig')) : true )
                && (searchValues.sistema!=null ? reg.SG_SIS_RSP_CDU_VCLD.toLowerCase().match(new RegExp(searchValues.sistema.toLowerCase(), 'ig')) : true )
                && (searchValues.unicoNew!=null ? reg.NR_UNCO_CTR_VCLD.toLowerCase().match(new RegExp(searchValues.unicoNew.toLowerCase(), 'ig')) : true )
                && (searchValues.unicoOld!=null ? reg.NR_UNCO_CTR_OPR.toLowerCase().match(new RegExp(searchValues.unicoOld.toLowerCase(), 'ig')) : true )
                && (searchValues.vinculo!=null ? reg.TX_NR_PRC_VCLD.toLowerCase().match(new RegExp(searchValues.vinculo.toLowerCase(), 'ig')) : true )
                && (searchValues.fluxoEstoque!=null ? reg.fluxoEstoque.toLowerCase().match(new RegExp(searchValues.fluxoEstoque.toLowerCase(), 'ig')) : true )){
                    return true
                }
            })
         
        var innerTable = ''
        filteredValues.forEach(reg => {
            innerTable = `${innerTable} 
            <tr>
                <td class=""><input type="checkbox" class="_checkbox" id="${reg.id}" ${reg.checkboxSelected === 1 ? 'checked' : ''}></td>
                <td class="">${reg.acrdPaj}</td>
                <td class="">${reg.NR_UNCO_CTR_OPR}</td>
                <td class="">${reg.MCI}</td>
                <td class="">${reg.NR_UNCO_CTR_VCLD}</td>
                <td class="">${reg.SG_SIS_RSP_CDU_VCLD}</td>
                <td class="">${reg.CD_PRF_DEPE_CDU_VCLD}</td>
                <td class="">${reg.NR_PRC}</td>
                <td class="">${reg.TX_NR_PRC_VCLD}</td>
                <td class="">${reg.quarentenaAte.split('T')[0]}</td>
                <td class="">${reg.fluxoEstoque}</td>
            </tr>
            `
        });
        document.getElementById(this.table.tbody).innerHTML = innerTable
    }
    appCtrl.loadCheckboxInputEventListeners(dataCtrl,this)
    this.showHideSpinner2('hide')
    }
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//SHOW HIDE SPINNER
    showHideSpinner(show_hide){
        if(show_hide==='show'){
            document.getElementById(this.spinner).style.display = 'block'
            document.getElementById(this.mainContent).style.display = 'none'
        }else if (show_hide==='hide'){
            document.getElementById(this.spinner).style.display = 'none'
            document.getElementById(this.mainContent).style.display = 'block'
        }
    }
    showHideSpinner2(show_hide){
        if(show_hide==='show'){
            document.getElementById(this.spinner2).style.display = 'block'
        }else if (show_hide==='hide'){
            document.getElementById(this.spinner2).style.display = 'none'
        }
    }
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//ADD REMOVE CLASSES
    addRemoveActiveClassFromPrefixos(btn){
        if(document.getElementsByClassName('_prefixos active').length > 0){
            for(const btnOld of document.getElementsByClassName('_prefixos active')){
                btnOld.classList.remove('active')
            }
        }
        btn.classList.add('active')
    }
//UPDATE BUTTON TEXT VALUE
    updateButtonTextValue(value){
        if(value==0){
            document.getElementById(this.btns.registrarAnalise).innerText = `Registrar Análise`
            document.getElementById(this.btns.registrarAnalise).disabled = true
            document.getElementById(this.btns.limparSelecionados).innerText = `Limpar Selecionados`
            document.getElementById(this.btns.limparSelecionados).disabled = true
            return 
        }
        document.getElementById(this.btns.registrarAnalise).innerText = `Registrar Análise (${value})`
        document.getElementById(this.btns.registrarAnalise).disabled = false
        document.getElementById(this.btns.limparSelecionados).innerText = `Limpar Selecionados (${value})`
        document.getElementById(this.btns.limparSelecionados).disabled = false
    }
//CLEAR ALL CHECKED CHECKBOXES
    clearCheckedCheckboxes(){
        for(const i of document.getElementsByClassName('_checkbox')){
            if(i.checked){
                i.checked = false
            }
        }
        return
    }
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//RETURN IDs
    returnIds(){
        return this
    }
}