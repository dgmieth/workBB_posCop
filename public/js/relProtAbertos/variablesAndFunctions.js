//====================================================================================================
//                                         FUNÇÕES
//====================================================================================================
//----------------------------------------------------------------------------------------------------
//                     Trata objeto retornado da rota /getRelatorioProAbertos
//----------------------------------------------------------------------------------------------------
function tratarRelatorio(data){
    table = $('#relProtAbertoTable').DataTable({
        //configurando layout da tabela
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'excelHtml5', 
                className: 'btn-primary',
                text:'<b>Exportar Excel</b>',
                exportOptions: 
                {
                    columns: ([0,1,2,3,4,5,6,7,8])
                }
            }
        ],
        paging: false,
        deferRender: true,
        bScrollInfinite: true,
        bScrollCollapse: true,
        fixedHeader: true,
        
        data: data,
        
        //configurando filtros da tabela

        //customizando o tamanho das colunas 
       columnDefs: [
            {  "targets": 0, "width":"100px"},
            {  "targets": 1, "width":"100px"},
            {  "targets": 2, "width":"40px"},
            {  "targets": 3, "width":"40px"},
            {  "targets": 4, "width":"190px"},
            {  "targets": 5, "width":"40px"},
            {  "targets": 6, "width":"40px"},
            {  "targets": 7, "width":"190px"},
            {  "targets": 8, "width":"190px"},
            {  "targets": 9, "width":"30px", visible: false},
            {  "targets": 10, "width":"30px"}
        ],
        order: [[10, 'desc']],
        columns: [
            {data: 'Nr_unico_anterior', class:"d-none d-sm-none d-md-table-cell d-lg-table-cell d-xl-table-cell"},
            {data: 'Nr_unico_novo', class:"d-none d-sm-table-cell d-md-table-cell d-lg-table-cell d-xl-table-cell"},
            {data: 'NPJ', class:"d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell"},
            {data: 'tipo_protocolo', class:""},
            {data: 'protocolo',class:""},
            {data: 'fluxo_estoque',class:"d-none d-sm-none d-md-none d-lg-none d-xl-table-cell"},
            {data: 'dt_inicio', class:"d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell"},
            {data: 'etapa', class:"d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell"},
            {data: 'prot_vinculado', class:"d-none d-sm-none d-md-none d-lg-none d-xl-table-cell"},
            {data: 't100_demanda_vinculada', class:"d-none"},
            {data: 'id',class: 'd-none'}
        ]
        
    })
}