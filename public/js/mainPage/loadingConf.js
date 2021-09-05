//====================================================================================================
//           BUSCA QTDE DE REGISTROS PARA CONFIGURAÇCOES ATUAIS NA LOAD DA PAGE SOMENTE
//====================================================================================================
//----------------------------------------------------------------------------------------------------
//                     Busca filtros Setados na rota /retornaFiltrosSetados
//----------------------------------------------------------------------------------------------------
// fetch('/retornaFiltrosSetados').then((response)=>{

    
//     response.json().then((data) => {
//         uploadConfiguration(data)
//         if(hasSavedValues){
//             UICtrl.changeInnerHTMLWithID(UICtrl.idList.openingPageModalTitle, '<strong>Configuração existente</strong>')
//             UICtrl.changeInnerHTMLWithID(UICtrl.idList.openingPageModalP1, 'Já existe uma configuração salva no banco de dados e que foi carregada na página.')
//             UICtrl.changeInnerHTMLWithID(UICtrl.idList.openingPageModalP2, 'Se desejar alterá-la, clique no botão <strong>Criar Nova</strong>. Após terminada a seleção dos filtros para a nova configuração, clique no botão <strong>Salvar</strong>')
//             UICtrl.changeInnerHTMLWithID(UICtrl.idList.openingPageModalP3, 'Se desejar retornar para a configuração atual, clique em <strong>Voltar configuração atual</strong>.')
//             UICtrl.changeInnerHTMLWithID(UICtrl.idList.openingPageModalP4, '<strong>Atenção!!!!!</strong> </br>O botão Voltar configuração atual traz as informações da última configuração salva. Se você clicou em salvar, ele trará essa última configuração salva.')
//             $('document').ready(function(){
//                 $('#openingPageModal').modal('show')
//             })
//         }else{
//             UICtrl.changeInnerHTMLWithID(UICtrl.idList.openingPageModalTitle,'<strong>Nenhuma</strong> configuração ativa')
//             UICtrl.changeInnerHTMLWithID(UICtrl.idList.openingPageModalP1, 'Escolha os filtros desejados, informe um número para a quantidade de protocolos a serem gerados como fluxo e estoque e clique em salvar.')
//             $('document').ready(function(){
//                 $('#openingPageModal').modal('show')
//             })
//         }
//     })
// })