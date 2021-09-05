const successMsg = document.getElementById('successMsg')
const warningMsg = document.getElementById('warningMsg')
const dangerMsg = document.getElementById('dangerMsg')

const regerarProtBtn = document.getElementById('regerarProtBtn')
const limparSelecaoBtn = document.getElementById('limparSelecaoBtn')

//====================================================================================================
//                                         FUNÇÕES
//====================================================================================================
//----------------------------------------------------------------------------------------------------
//                     Trata objeto retornado da rota /getRelatorioProAbertos
//----------------------------------------------------------------------------------------------------
function tratarRelatorio(data){
    table = $('#relRegerar').DataTable({
        //configurando layout da tabela
        paging: false,
        deferRender: true,
        dom: 'Bfrtip',
        bScrollInfinite: true,
        bScrollCollapse: true,
        fixedHeader: true,
        data: data,
        
        //configurando filtros da tabela

        //customizando o tamanho das colunas 
        fixedColumns:   {
            leftColumns: 2
        },
        columnDefs: [
            {  "targets": 0, className:"select-checkbox ", orderable: false, width:"5px"},
            {  "targets": 1, "width":"100px"},
            {  "targets": 2, "width":"100px"},
            {  "targets": 3, "width":"40px"},
            {  "targets": 4, "width":"30px"},
            {  "targets": 5, "width":"190px"}, 
            {  "targets": 6, "width":"40px"},
            {  "targets": 7, "width":"40px"},
            {  "targets": 8, "width":"190px"},
            {  "targets": 9, "width":"30px"},
            {  "targets": 10, "width":"30px"}
        ],
        order: [[7,'desc'], [5, 'asc']],
        columns: [
            {data: null, className: 'text-center',
            searchable: false,
            orderable: false,
            render: function (data, type, full, meta) {
                return '<input type="checkbox" id="check_' + data.id + '" class="check" name="check" value="'+ false +'" style="pointer-events:none">';
            },},
            {data: 'Nr_unico_anterior', class:"d-none d-sm-none d-md-table-cell d-lg-table-cell d-xl-table-cell"},
            {data: 'Nr_unico_novo', class:"d-none d-sm-table-cell d-md-table-cell d-lg-table-cell d-xl-table-cell"},
            {data: 'NPJ', class:"d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell"},
            {data: 'tipo_protocolo', class:""},
            {data: 'protocolo',class:""},
            {data: 'fluxo_estoque',class:"d-none d-sm-none d-md-none d-lg-none d-xl-table-cell"},
            {data: 'dt_inicio', class:"d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell"},
            {data: 'etapa', class:"d-none d-sm-none d-md-none d-lg-table-cell d-xl-table-cell"},
            {data: 't100_demanda_vinculada', class:"d-none"},
            {data: 'id', class:"d-none"}
        ]
        }),
    $('#relRegerar tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected')
        var inp = document.getElementById(`${$(this).find('td input')[0].id}`)
        var vl = inp.checked
        inp.checked = !vl
        enablingButton()
    } )
    $('#button').click( function () {
        alert( table.rows('.selected').data().length +' row(s) selected' );
    } )
}
//----------------------------------------------------------------------------------------------------
//                                         Enable/disable buttons
//----------------------------------------------------------------------------------------------------
function enablingButton(){
    var contador = $('#relRegerar').DataTable().rows('.selected').count()
    if(contador>0){
        enableButtons(true)
        regerarProtBtn.innerText = `Regerar (${contador})`
        limparSelecaoBtn.innerText = `Limpar Seleção (${contador})`
    }else{
        regerarProtBtn.innerText = `Regerar`
        limparSelecaoBtn.innerText = `Limpar Seleção`
        enableButtons(false)
    }
}
function enableButtons(value){
    if(value){
        regerarProtBtn.classList.remove('disabled')
        limparSelecaoBtn.classList.remove('disabled')
    }else{
        regerarProtBtn.classList.add('disabled')
        limparSelecaoBtn.classList.add('disabled')
    }
    regerarProtBtn.disabled = !value
    limparSelecaoBtn.disabled = !value
}
//----------------------------------------------------------------------------------------------------
//                                          Time out para alerts
//----------------------------------------------------------------------------------------------------
function alertTimeOut(){
    setTimeout(()=>{
        $('#successAlert').hide('fade')
        $('#dangerAlert').hide('fade')
        $('#warningAlert').hide('fade')
    },5000)
}