$('form').on('submit', function(e) {
    e.preventDefault();
    
    const nomeTarefa = $('#nome-tarefa').val();
    const novoItem = 
    $('<li style="display: none"><li>');

    $(`
    <li>
        ${nomeTarefa}
    </li>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#nome-tarefa').val("")
});

$('ul').on('click', 'li', function() {
    $(this).addClass('finalizada');
});