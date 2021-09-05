// const clearConfBtn = document.getElementById('clearConfBtn')
// const createNewConfBtn = document.getElementById('createNewConfBtn')
// const saveNewConfBtn = document.getElementById('saveNewConfBtn')
// const gerarPlanilha = document.getElementById('generateExcel')

// const publicoAlvo = document.getElementById('ff-options-content-wrapper')
// const sisResponsavel = document.getElementById('sf-options-content-wrapper')
// const somenteGecor = document.getElementById('tf-options-content-wrapper')
// const situacaoVinc = document.getElementById('4f-options-content-wrapper')
// const acordoRegistradoPortal = document.getElementById('5f-options-content-wrapper')

// const publicoAlvoSim = document.getElementById('ff-option1-checkbox')
// const publicoAlvoNao = document.getElementById('ff-option2-checkbox')
// const publicoAlvoALVA = document.getElementById('ff-option3-checkbox')

// const XER = document.getElementById('sf-option1-checkbox')
// const COP = document.getElementById('sf-option2-checkbox')

// // const gecorSomenteSim = document.getElementById('tf-option1-checkbox')
// const prefCheckboxes = document.getElementsByClassName('pref-checkboxes')
// var listPrefixos = new Array()

// const operacaoNaoVinculada = document.getElementById('4f-option1-checkbox')
// const operacaoVinculada = document.getElementById('4f-option2-checkbox')
// const operacaoVinculadaEmOutroNPJ = document.getElementById('4f-option3-checkbox')

// const acordoRegPortalSim = document.getElementById('5f-option1-checkbox')
// const acordoRegPortalNao = document.getElementById('5f-option2-checkbox')
// const acordoRegPortalDuplicados = document.getElementById('5f-option3-checkbox')

// const registrosFluxo = document.getElementById('registrosFluxo')
// const registrosEstoque = document.getElementById('registrosEstoque')
// const estoqueNumber = document.getElementById('estoqueNumber')
// const fluxoNumber = document.getElementById('fluxoNumber')

// const openingPageModal = document.getElementById('openingPageModal')
// const openingPageModalTitle = document.getElementById('openingPageModal-title')
// const openingPageModalP1 = document.getElementById('openingPageModal-p1')
// const openingPageModalP2 = document.getElementById('openingPageModal-p2')
// const openingPageModalP3 = document.getElementById('openingPageModal-p3')
// const openingPageModalP4 = document.getElementById('openingPageModal-p4')
// var hasSavedValues = false;
//====================================================================================================
//                                         FUNÇÕES
//====================================================================================================
//----------------------------------------------------------------------------------------------------
//                     Trata objeto retornado da rota /retornaFiltrosSetados
//----------------------------------------------------------------------------------------------------
// function uploadConfiguration(data){
//     //checkboxes do publico alvo
//     if(data.publicoAlvoSim === 1){
//         publicoAlvoSim.checked = true
//         hasSavedValues = true
//     } else {
//         publicoAlvoSim.checked = false
//     }
//     if(data.publicoAlvoNao === 1){
//         publicoAlvoNao.checked = true
//         hasSavedValues = true
//     } else {
//         publicoAlvoNao.checked = false
//     }
//     if(data.publicoAlvoALVA === 1){
//         publicoAlvoALVA.checked = true
//         hasSavedValues = true
//     } else {
//         publicoAlvoALVA.checked = false
//     }
//     //checkboxes do sistema responsavel
//     if(data.XER === 1){
//         XER.checked = true
//         hasSavedValues = true
//     } else {
//         XER.checked = false
//     }
//     if(data.COP === 1){
//         COP.checked = true
//         hasSavedValues = true
//     } else {
//         COP.checked = false
//     }
//     //checkboxes do somente prefixos GECOR
//     for(let e of data.listaPrefixos){
//         var pref = document.getElementById(`${e}`)
//         pref.classList.add('pref-selected')
//         pref.checked = true
//         hasSavedValues = true
//     }
//     // if(data.gecorSomenteSim === 1){
//     //     gecorSomenteSim.checked = true
//     //     hasSavedValues = true
//     // } else {
//     //     gecorSomenteSim.checked = false
//     // }
//     //checkboxes da sitaucao vinculo da operacao
//     if(data.operacaoNaoVinculada === 1){
//         operacaoNaoVinculada.checked = true
//         hasSavedValues = true
//     } else {
//         operacaoNaoVinculada.checked = false
//     }
//     if(data.operacaoVinculada === 1){
//         operacaoVinculada.checked = true
//         hasSavedValues = true
//     } else {
//         operacaoVinculada.checked = false
//     }
//     if(data.operacaoVinculadaEmOutroNPJ === 1){
//         operacaoVinculadaEmOutroNPJ.checked = true
//         hasSavedValues = true
//     } else {
//         operacaoVinculadaEmOutroNPJ.checked = false
//     }
//     //checkboxes do Acordo Registrado no portal
//     if(data.acordoRegPortalSim === 1){
//         acordoRegPortalSim.checked = true
//         hasSavedValues = true
//     } else {
//         acordoRegPortalSim.checked = false
//     }
//     if(data.acordoRegPortalNao === 1){
//         acordoRegPortalNao.checked = true
//         hasSavedValues = true
//     } else {
//         acordoRegPortalNao.checked = false
//     }
//     if(data.acordoRegPortalDuplicados === 1){
//         acordoRegPortalDuplicados.checked = true
//         hasSavedValues = true
//     } else {
//         acordoRegPortalDuplicados.checked = false
//     }
//     //total de protocolos na base
//     registrosEstoque.innerHTML = `<strong>${data.est}</strong>`
//     registrosFluxo.innerHTML = `<strong>${data.flu}</strong>`
//     //quantidade de registros a gerar
//     if(data.estoqueNumber > 0 || data.fluxoNumber > 0){
//         hasSavedValues = true
//     }
//     if(!data.estoqueNumber ){
//         estoqueNumber.value = ''
//     }else{
//         estoqueNumber.value = `${data.estoqueNumber}`
//     }
//     if(!data.fluxoNumber){
//         fluxoNumber.value = ''
//     }else{
//         fluxoNumber.value =  `${data.fluxoNumber}`
//     }
//     if(hasSavedValues){
//         buttonEnableDisable(1)
//     }else{
//         buttonEnableDisable(3)
//     }
// }
//----------------------------------------------------------------------------------------------------
//       Envia valores de todas as opções para filtrar a base e retornar qtde de registros
//----------------------------------------------------------------------------------------------------
// const returnValuesObj = function(){
//     var valuesObj = {
//         'publicoAlvoSim': changeBoolToInt(publicoAlvoSim.checked),
//         'publicoAlvoNao': changeBoolToInt(publicoAlvoNao.checked),
//         'publicoAlvoALVA': changeBoolToInt(publicoAlvoALVA.checked),
//         'XER': changeBoolToInt(XER.checked),
//         'COP': changeBoolToInt(COP.checked),
//         //'gecorSomenteSim': changeBoolToInt(gecorSomenteSim.checked),
//         'listaPrefixos': listPrefixos,
//         'operacaoNaoVinculada': changeBoolToInt(operacaoNaoVinculada.checked),
//         'operacaoVinculada': changeBoolToInt(operacaoVinculada.checked),
//         'operacaoVinculadaEmOutroNPJ': changeBoolToInt(operacaoVinculadaEmOutroNPJ.checked),
//         'acordoRegPortalSim': changeBoolToInt(acordoRegPortalSim.checked),
//         'acordoRegPortalNao': changeBoolToInt(acordoRegPortalNao.checked),
//         'acordoRegPortalDuplicados': changeBoolToInt(acordoRegPortalDuplicados.checked)
//     }
//     var objStr =JSON.stringify(valuesObj)
//     fetch(`/contaRegistrosComFiltros?dados=${objStr}`).then((response)=>{
//         response.json().then((data) => {
//             if(data.error){
//             }else{
//                 registrosEstoque.innerHTML = `<strong>${data.est}</strong>`
//                 registrosFluxo.innerHTML = `<strong>${data.flu}</strong>`
//             }
//         })
//     })
// }
//----------------------------------------------------------------------------------------------------
//                             Trocar Valores BOOL para INT
//----------------------------------------------------------------------------------------------------
// function changeBoolToInt(e){
//     if(e===true){
//         return 1
//     } else {
//         return 0
//     }
// }
//----------------------------------------------------------------------------------------------------
//                             Trocar Valores STRING para INT
//----------------------------------------------------------------------------------------------------
// function changeStringToInt(e){
//     if(e.length === 0){
//         return 0
//     } else {
//         return parseInt(e)
//     }
// }
//----------------------------------------------------------------------------------------------------
//                         Valida informações da interface do usuário
//----------------------------------------------------------------------------------------------------
// function validateObjToSave(e, callback){
//     var hasValues = false
//     for(var prop in e){
//         if(prop === 'estoqueNumber' || prop === 'fluxoNumber'){
//             if(e[prop] > 0){
//                 hasValues = true
//             }
//             continue
//         }
//         if(prop === 'listaPrefixos'){
//             if(listPrefixos.length>0){
//                 hasValues = true
//             }
//         }
//         if (e[prop] === 1){
//             hasValues = true
//         }
//     }
//     callback(hasValues)
// }
//----------------------------------------------------------------------------------------------------
//                                Atualiza Interface do usuário
//----------------------------------------------------------------------------------------------------
// function buttonEnableDisable(type){
//     if(type===1){
//         createNewConfBtn.classList.remove('disabled')
//         createNewConfBtn.disabled = false
//         saveNewConfBtn.classList.add('disabled')
//         saveNewConfBtn.disabled = true
//         clearConfBtn.classList.add('disabled')
//         clearConfBtn.disabled = true
//         enableDisableCheckBokes(true)
//     } else if(type===2){
//         createNewConfBtn.classList.add('disabled')
//         createNewConfBtn.disabled = true
//         saveNewConfBtn.classList.remove('disabled')
//         saveNewConfBtn.disabled = false
//         clearConfBtn.classList.remove('disabled')
//         clearConfBtn.disabled = false
//         enableDisableCheckBokes(false)
//     } else if(type===3){
//         createNewConfBtn.classList.add('disabled')
//         createNewConfBtn.disabled = true
//         saveNewConfBtn.classList.remove('disabled')
//         saveNewConfBtn.disabled = false
//         clearConfBtn.classList.add('disabled')
//         clearConfBtn.disabled = true
//         enableDisableCheckBokes(false)
//     } 
// }
//atualiza checkboxes enabled/disabled
// function enableDisableCheckBokes(trueOrFalse){
//         publicoAlvoSim.disabled = trueOrFalse
//         publicoAlvoNao.disabled = trueOrFalse
//         publicoAlvoALVA.disabled = trueOrFalse
//         XER.disabled = trueOrFalse
//         COP.disabled = trueOrFalse
//         //gecorSomenteSim.disabled = trueOrFalse
//         prefCheckboxes.disabled = trueOrFalse
//         for (let index = 0; index < prefCheckboxes.length; index++) {
//             prefCheckboxes[index].disabled = trueOrFalse
//         }
//         operacaoNaoVinculada.disabled = trueOrFalse
//         operacaoVinculada.disabled = trueOrFalse
//         operacaoVinculadaEmOutroNPJ.disabled = trueOrFalse
//         acordoRegPortalSim.disabled = trueOrFalse
//         acordoRegPortalNao.disabled = trueOrFalse
//         acordoRegPortalDuplicados.disabled = trueOrFalse
//         estoqueNumber.disabled = trueOrFalse
//         fluxoNumber.disabled = trueOrFalse
//         if(!trueOrFalse){
//             estoqueNumber.classList.add('disabled')
//             fluxoNumber.classList.add('disabled')
//         }else{
//             estoqueNumber.classList.remove('disabled')
//             fluxoNumber.classList.remove('disabled')
//         }

// }
//----------------------------------------------------------------------------------------------------
//                                    Zera lista de prefixos 
//----------------------------------------------------------------------------------------------------
// function zeraListaPrefixos(){

//     listPrefixos = []
// }
//----------------------------------------------------------------------------------------------------
//                                           Alert fading 
//----------------------------------------------------------------------------------------------------
// function alertTimeOut(){
//     setTimeout(()=>{
//         $('#successAlert').hide('fade')
//         $('#dangerAlert').hide('fade')
//     },10000)
// }
//----------------------------------------------------------------------------------------------------
//                                      Clear Class pref-selected
//----------------------------------------------------------------------------------------------------
// function limparPrefSelectedFromClass(){
//     const prefSelected = document.getElementsByClassName('pref-selected')
//     for(let pref of prefSelected){
//         pref.classList.remove('pref-selected')
//     }
//     for (let index = 0; index < prefCheckboxes.length; index++) {
//         prefCheckboxes[index].checked = false;
//     }
// }
