//====================================================================================================
//                          BUSCA LOG DE CONFIGURACOES PARA CONSULTA
//====================================================================================================
//----------------------------------------------------------------------------------------------------
//                     Busca log de configuracao na rota /getLogConf
//----------------------------------------------------------------------------------------------------
fetch('/getLogConf').then((response)=>{
    response.json().then((data)=>{
        tratarLog(data)
    })
})