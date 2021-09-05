class DataCtrl {
    constructor(){
        this.registers = []
        this.filteredRegisters= []
        this.fluxoStartDate = null
        this.listaPrefixos = []
        this.selectedPrefixo = null
        this.searchValues = {
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
        this.selectedRow = []
    }
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//ADD DATA
    addRegisters(arrayResults){
        this.registers = []
        this.fluxoStartDate = null
        var id = 1
        if(arrayResults==null){return}
        this.fluxoStartDate= arrayResults[1]
        arrayResults[0].forEach(reg => {
            this.registers.push({
                VLDC_REG_ACR: reg.VLDC_REG_ACRD,
                NR_UNCO_CTR_OPR: reg.NR_UNCO_CTR_OPR,
                MCI: reg.MCI,
                NR_UNCO_CTR_VCLD: reg.NR_UNCO_CTR_VCLD,
                SG_SIS_RSP_CDU_VCLD: reg.SG_SIS_RSP_CDU_VCLD,
                CD_PRF_DEPE_CDU_VCLD: reg.CD_PRF_DEPE_CDU_VCLD,
                NR_PRC: reg.NR_PRC,
                TX_NR_PRC_VCLD: reg.TX_NR_PRC_VCLD,
                quarentenaAte: reg.quarentenaAte,
                regAnalisado: reg.regAnalisado,
                regExcluido:  reg.regExcluido,
                checkboxSelected: 0,
                fluxoEstoque: (new Date(reg.quarentenaAte.split('T')[0]) >= new Date(this.fluxoStartDate[0].dataInicioEstoque.split('T')[0]) ? 'Fluxo' : 'Estoque'),
                acrdPaj: reg.VLDC_REG_ACRD === 0 ? 'Sim': (reg.VLDC_REG_ACRD === 9 ? 'Duplicado' : 'Não'),
                id: id
            })
            id += 1
        })
        this.listaPrefixos = arrayResults[2]
        // this.registers = arrayResults[0]
    }
    addSelectedValues(OBJ_acrdPaj_unicoOld_mci_unicoNew_sistema_prefixo_npj_vinculo_entradaBase_fluxoEsoque){
        this.searchValues.acrdPaj = OBJ_acrdPaj_unicoOld_mci_unicoNew_sistema_prefixo_npj_vinculo_entradaBase_fluxoEsoque.acrdPaj
        this.searchValues.unicoOld = OBJ_acrdPaj_unicoOld_mci_unicoNew_sistema_prefixo_npj_vinculo_entradaBase_fluxoEsoque.unicoOld
        this.searchValues.mci = OBJ_acrdPaj_unicoOld_mci_unicoNew_sistema_prefixo_npj_vinculo_entradaBase_fluxoEsoque.mci
        this.searchValues.unicoNew = OBJ_acrdPaj_unicoOld_mci_unicoNew_sistema_prefixo_npj_vinculo_entradaBase_fluxoEsoque.unicoNew
        this.searchValues.sistema = OBJ_acrdPaj_unicoOld_mci_unicoNew_sistema_prefixo_npj_vinculo_entradaBase_fluxoEsoque.sistema
        this.searchValues.prefixo = OBJ_acrdPaj_unicoOld_mci_unicoNew_sistema_prefixo_npj_vinculo_entradaBase_fluxoEsoque.prefixo
        this.searchValues.npj = OBJ_acrdPaj_unicoOld_mci_unicoNew_sistema_prefixo_npj_vinculo_entradaBase_fluxoEsoque.npj
        this.searchValues.vinculo = OBJ_acrdPaj_unicoOld_mci_unicoNew_sistema_prefixo_npj_vinculo_entradaBase_fluxoEsoque.vinculo
        this.searchValues.entradaBase = OBJ_acrdPaj_unicoOld_mci_unicoNew_sistema_prefixo_npj_vinculo_entradaBase_fluxoEsoque.entradaBase
        this.searchValues.fluxoEstoque = OBJ_acrdPaj_unicoOld_mci_unicoNew_sistema_prefixo_npj_vinculo_entradaBase_fluxoEsoque.fluxoEstoque
    }
    addSelectedPrefixo(prefixo){
        this.selectedPrefixo = null
        this.filteredRegisters = []
        if(prefixo==null){return}
        this.selectedPrefixo = prefixo
        this.filteredRegisters = this.registers.filter(reg => { 
            if(reg.regAnalisado===0&&reg.CD_PRF_DEPE_CDU_VCLD===parseInt(dataCtrl.returnData('selectedPrefixo'))){ return true }
            return false
        })
    }
    addSelectedRow(id, adiconarTrue_retirarFalse){
        if(adiconarTrue_retirarFalse){
            this.selectedRow.push(id)
        }else{
            this.selectedRow = this.selectedRow.filter(row => {
                if(row===id){
                    return false
                }
                return true
            })
        }
    }
    clearSelectedRow(){
        
        this.filteredRegisters.forEach(reg => {
            this.selectedRow.some(row => {
                if(reg.id === parseInt(row)){
                    reg.checkboxSelected = 0
                }
            })
        })
        this.selectedRow = []
    }
    clearSelectedPrefixo(){
        this.selectedPrefixo = null
        this.filteredRegisters = []
    }
    updateRegAnalisado(){
        this.registers.forEach(reg => {
            this.selectedRow.some(id => {
                if(id===reg.id){
                    reg.regAnalisado = 1
                }
            })
        })
    }
    updateRegChecked(regId){
        this.filteredRegisters.forEach(reg => {
            if(reg.id === parseInt(regId)){
                reg.checkboxSelected = 1
            }
        })
    }
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//RETURN DATA
    returnData(registers_fluxoStartDate_searchValues_listaPrefixos_selectedPrefixo_selectedRow){
        if(registers_fluxoStartDate_searchValues_listaPrefixos_selectedPrefixo_selectedRow==='registers'){
            return this.registers
        }
        if(registers_fluxoStartDate_searchValues_listaPrefixos_selectedPrefixo_selectedRow==='filteredRegisters'){
            return this.filteredRegisters
        }
        if(registers_fluxoStartDate_searchValues_listaPrefixos_selectedPrefixo_selectedRow==='fluxoStartDate'){
            return this.fluxoStartDate
        }
        if(registers_fluxoStartDate_searchValues_listaPrefixos_selectedPrefixo_selectedRow==='searchValues'){
            return this.searchValues
        }
        if(registers_fluxoStartDate_searchValues_listaPrefixos_selectedPrefixo_selectedRow==='listaPrefixos'){
            return this.listaPrefixos
        }
        if(registers_fluxoStartDate_searchValues_listaPrefixos_selectedPrefixo_selectedRow==='selectedPrefixo'){
            return this.selectedPrefixo
        }
        if(registers_fluxoStartDate_searchValues_listaPrefixos_selectedPrefixo_selectedRow==='selectedRow'){
            return this.selectedRow
        }
        if(registers_fluxoStartDate_searchValues_listaPrefixos_selectedPrefixo_selectedRow==='selectedRegisters'){
            return this.filteredRegisters.filter(reg=>{
                    return this.selectedRow.some(id => {
                        return id === reg.id
                    })
                })
        }
    }
}