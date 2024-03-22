$(document).ready(function(){
    $('#adicionar').click(function(event){
       
        // remove comportamento padrão do formulário

        event.preventDefault();        

        //obtem valores form

        var tarefa = $('#tarefa').val();
        var data = $('#data').val();
        var hora = $('#hora').val();

        //Cria um item de lista com valores

        var novoItem = $('<li id="trf">').text('Tarefa: ' 
        + tarefa + ' - Data: '
        + data + ' - Hora: ' 
        + hora );

        //adiciona item a lista

        $('#listaTarefas').append(novoItem);

        // Limpa o formulario apos a adição
        
        $('#tarefa').val('');
        $('#data').val('');
        $('#hora').val('');

    });
    $('#listaTarefas').on('click', 'li', function() {
        $(this).toggleClass('riscado'); 
    });
    
});
