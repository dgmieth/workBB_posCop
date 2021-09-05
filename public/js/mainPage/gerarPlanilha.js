// gerarPlanilha.addEventListener('click',(e)=>{
//     const listPref = []
//     const lista = document.getElementsByClassName('pref-selected')
//     for(let ele of lista){
//         const eleP = ele.parentElement.parentElement.getElementsByTagName('p')
//         for (let pref of eleP){
//             listPref.push(parseInt(pref.textContent))
//         }
//     }
//     const obj = {
//         'publicoAlvoSim': changeBoolToInt(publicoAlvoSim.checked),
//         'publicoAlvoNao': changeBoolToInt(publicoAlvoNao.checked),
//         'publicoAlvoALVA': changeBoolToInt(publicoAlvoALVA.checked),
//         'XER': changeBoolToInt(XER.checked),
//         'COP': changeBoolToInt(COP.checked),
//         'listaPrefixos': listPref,
//         'operacaoNaoVinculada': changeBoolToInt(operacaoNaoVinculada.checked),
//         'operacaoVinculada': changeBoolToInt(operacaoVinculada.checked),
//         'operacaoVinculadaEmOutroNPJ': changeBoolToInt(operacaoVinculadaEmOutroNPJ.checked),
//         'acordoRegPortalSim': changeBoolToInt(acordoRegPortalSim.checked),
//         'acordoRegPortalNao': changeBoolToInt(acordoRegPortalNao.checked),
//         'acordoRegPortalDuplicados': changeBoolToInt(acordoRegPortalDuplicados.checked),
//         'estoqueNumber': changeStringToInt(estoqueNumber.value),
//         'fluxoNumber': changeStringToInt(fluxoNumber.value)
//     }
//     fetch(`/geraExcelComRegistros?dados=${JSON.stringify(obj)}`)
//     .then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         console.log(data)
//     })
//     .catch(err => console.log(err))
//     e.preventDefault()
// })