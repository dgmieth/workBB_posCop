class DataCtrl {
    //=======================================================================================================================
    //data instance properties
    constructor(){
        this.hasSavedValues = false
        this.publicoAlvoSim= 0,
        this.publicoAlvoNao= 0,
        this.publicoAlvoALVA= 0,
        this.XER= 0,
        this.COP= 0,
        this.listaPrefixos= [],
        this.operacaoNaoVinculada= 0,
        this.operacaoVinculada= 0,
        this.operacaoVinculadaEmOutroNPJ= 0,
        this.acordoRegPortalSim= 0,
        this.acordoRegPortalNao= 0,
        //this.acordoRegPortalDuplicados= 0,
        this.totaisEstoque = 0,
        this.totaisFluxo = 0,
        this.estoqueNumber= 0,
        this.fluxoNumber= 0,
        this.duplicadoSimNao = 0,
        this.analisadoSimNao = 0
    }
    //=======================================================================================================================
    // CRUD ELEMENTS
    // update values (initial update only)
    setInitialValues(data) {
            //publicoAlvo
            if(data.publicoAlvoSim === 1){
                this.publicoAlvoSim = 1
                this.hasSavedValues = true
            } else {
                this.publicoAlvoSim= 0
            }
            if(data.publicoAlvoNao === 1){
                this.publicoAlvoNao= 1
                this.hasSavedValues = true
            } else {
                this.publicoAlvoNao= 0
            }
            if(data.publicoAlvoALVA === 1){
                this.publicoAlvoALVA= 1
                this.hasSavedValues = true
            } else {
                this.publicoAlvoALVA= 0
            }          
            //sistemaResponsavel
            if(data.XER === 1){
                this.XER= 1
                this.hasSavedValues = true
            } else {
                this.XER= 0
            }
            if(data.COP === 1){
                this.COP= 1
                this.hasSavedValues = true
            } else {
                this.COP= 0
            }
            //listaPrefixosGecor
            for(let e of data.listaPrefixos){
               this.listaPrefixos.push(e)
                this.hasSavedValues = true
            }
            //situacaoVinculoDaOperacao
            if(data.operacaoNaoVinculada === 1){
                this.operacaoNaoVinculada= 1
                this.hasSavedValues = true
            } else {
                this.operacaoNaoVinculada= 0
            }
            if(data.operacaoVinculada === 1){
                this.operacaoVinculada= 1
                this.hasSavedValues = true
            } else {
                this.operacaoVinculada= 0
            }
            if(data.operacaoVinculadaEmOutroNPJ === 1){
                this.operacaoVinculadaEmOutroNPJ= 1
                this.hasSavedValues = true
            } else {
                this.operacaoVinculadaEmOutroNPJ= 0
            }
            //acordoRegistradoNoPortal
            if(data.acordoRegPortalSim === 1){
                this.acordoRegPortalSim= 1
                this.hasSavedValues = true
            } else {
                this.acordoRegPortalSim= 0
            }
            if(data.acordoRegPortalNao === 1){
                this.acordoRegPortalNao= 1
                this.hasSavedValues = true
            } else {
                this.acordoRegPortalNao= 0
            }
            // if(data.acordoRegPortalDuplicados === 1){
            //     this.acordoRegPortalDuplicados= 1
            //     this.hasSavedValues = true
            // } else {
            //     this.acordoRegPortalDuplicados= 0
            // }
            if(data.duplicadoSimNao===1){
                this.duplicadoSimNao =1 
                this.hasSavedValues = true
            }
            if(data.analisadoSimNao===1){
                this.analisadoSimNao = 1
                this.hasSavedValues = true
            }
            //totalRegistrosComFiltro
            this.totaisEstoque = data.est
            this.totaisFluxo = data.flu
            //quantidade de registros a gerar
            if(data.estoqueNumber > 0){
                this.estoqueNumber = data.estoqueNumber
                this.hasSavedValues = true
            }
            if(data.fluxoNumber > 0){
                this.fluxoNumber = data.fluxoNumber
                this.hasSavedValues = true
            }
    }
    // delete all data in instance
    clearData(){
        this.publicoAlvoSim= 0,
        this.publicoAlvoNao= 0,
        this.publicoAlvoALVA= 0,
        this.XER= 0,
        this.COP= 0,
        this.listaPrefixos= [],
        this.operacaoNaoVinculada= 0,
        this.operacaoVinculada= 0,
        this.operacaoVinculadaEmOutroNPJ= 0,
        this.acordoRegPortalSim= 0,
        this.acordoRegPortalNao= 0,
        //this.acordoRegPortalDuplicados= 0,
        this.totaisEstoque = 0,
        this.totaisFluxo = 0,
        this.estoqueNumber= 0,
        this.fluxoNumber= 0,
        this.duplicadoSimNao = 0,
        this.analisadoSimNao = 0
    }
    // update data (not initial update)
    setData(data){
        this.hasSavedValues = false,
        this.publicoAlvoSim= data.publicoAlvoSim,
        this.publicoAlvoNao= data.publicoAlvoNao,
        this.publicoAlvoALVA= data.publicoAlvoNao,
        this.XER= data.XER,
        this.COP= data.COP,
        this.listaPrefixos= data.listaPrefixos,
        this.operacaoNaoVinculada= data.operacaoNaoVinculada,
        this.operacaoVinculada= data.operacaoVinculada,
        this.operacaoVinculadaEmOutroNPJ= data.operacaoVinculadaEmOutroNPJ,
        this.acordoRegPortalSim= data.acordoRegPortalSim,
        this.acordoRegPortalNao= data.acordoRegPortalNao,
        //this.acordoRegPortalDuplicados= data.acordoRegPortalDuplicados,
        this.totaisEstoque = data.totaisEstoque,
        this.totaisFluxo = data.totaisFluxo,
        this.estoqueNumber= data.estoqueNumber,
        this.fluxoNumber= data.fluxoNumber,
        this.duplicadoSimNao = data.duplicadoSimNao,
        this.analisadoSimNao = data.analisadoSimNao
    }
    //=======================================================================================================================
    // VALIDATION
    // data validation
    validateData(){
        this.hasSavedValues = false

        this.publicoAlvoSim > 0 ? this.hasSavedValues = true : null
        this.publicoAlvoALVA > 0 ? this.hasSavedValues = true : null
        this.publicoAlvoALVA > 0 ? this.hasSavedValues = true : null

        this.XER > 0 ? this.hasSavedValues = true : null
        this.COP > 0 ? this.hasSavedValues = true : null

        this.listaPrefixos.length > 0 ? this.hasSavedValues = true : null

        this.operacaoNaoVinculada > 0 ? this.hasSavedValues = true : null
        this.operacaoVinculada > 0 ? this.hasSavedValues = true : null
        this.operacaoVinculadaEmOutroNPJ > 0 ? this.hasSavedValues = true : null

        this.acordoRegPortalSim > 0 ? this.hasSavedValues = true : null
        this.acordoRegPortalNao > 0 ? this.hasSavedValues = true : null
        //this.acordoRegPortalDuplicados > 0 ? this.hasSavedValues = true : null

        this.estoqueNumber > 0 ? this.hasSavedValues = true : null
        this.fluxoNumber > 0 ? this.hasSavedValues = true : null
        
        this.duplicadoSimNao > 0 ? this.hasSavedValues = true : null
        this.analisadoSimNao > 0 ? this.hasSavedValues = true : null
    }
    // =====================================================================================================================================================================
    // manipulation of this instance
    // returns instace's properties
    getData(){
        return this
    }
}