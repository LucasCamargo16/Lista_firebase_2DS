const ref = db.ref("Categorias");

$("#salvar").click( function (){
    let nome = $("#nome").val();
    let info = $("#info").val();

    if (nome==="" || info===""){
        alert("Preencha os campos");
        return;
    }

    ref.push({nome, info});
    limpar();
})


    ref.on("value", dados_tabela => {
        $("#lista").empty();

        $("#lista").append(`
            <tr>
                <th>NOME</th>
                <th>INFO</th>
                <th>ID</th>
                <th colspan = "2">Opções</th>
            </tr>
            
            `);

        dados_tabela.forEach(registro => {
            let  reg = registro.val();
            let id = registro.key;

            $("#lista").append(`
                <tr>
                    <td>${reg.nome}</td>
                    <td>${reg.info}</td>
                    <td>${id}</td>
                    <td>
                    <button class="btn btn-danger btn-sm">
                     <i class="bi bi-trash"></i>
                     </button>
                    </td>
                    <td>
                    <button class="btn btn-warning btn-sm">
                     <i class="bi bi-pencil"></i>
                     </button>
                    </td>
                </tr>
                `);
        }) // Loop para receber os dados
    });
    function limpar(){
        $("#nome").val("");
        $("#info").val("");
        $("#nome").focus();
    }