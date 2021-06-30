
const Examen = (function(){
    
    let showone = function(){
        
        let htmlelement = '<ul>';
        $('#result_elements').empty();
        
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                htmlelement+='<li>id: '+json.id+'</li>';
                htmlelement+='<li>userId: '+json.userId+'</li>';
                htmlelement+='<li>title: '+json.title+'</li>';
                htmlelement+='<li>completed: '+json.completed+'</li></ul>';
                $('#result_elements').append(htmlelement);
            });
    }
    
    let showall = function(){
        
        let htmlelement = '<ul>';
        $('#result_elements').empty();
        
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                $.map(json, function( element, key ) {
                    htmlelement+='<li>id: '+element.id+'</li>';
                    htmlelement+='<li>userId: '+element.userId+'</li>';
                    htmlelement+='<li>title: '+element.title+'</li>';
                    htmlelement+='<li>completed: '+element.completed+'</li>';
                });
                
                htmlelement+= '</ul>';
                $('#result_elements').append(htmlelement);
            });
    }
    
    let editone = function(){

        let htmlelement = '<ul>';
        $('#result_elements').empty();
        let element = $('#edit_one').val();
        
        fetch('https://jsonplaceholder.typicode.com/posts/'+element, {
            method: 'PUT',
            body: JSON.stringify({
              id: element,
              title: 'Titulo-Carlos',
              body: 'Carlos-Gonzalez-Hernandez',
              completed: true, 
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then((response) => response.json())
        .then((json) => {
                htmlelement+='<li>id: '+json.id+'</li>';
                htmlelement+='<li>userId: '+json.userId+'</li>';
                htmlelement+='<li>title: '+json.title+'</li>';
                htmlelement+='<li>completed: '+json.completed+'</li></ul>';
                $('#result_elements').append(htmlelement);
                });
        
    }
    
    let deleteone = function(){
        
        $('#result_elements').empty();
        let element = $('#delete_one').val();
        
        fetch('https://jsonplaceholder.typicode.com/posts/'+element, {
            method: 'DELETE',
        });
    }
    
    let createone = function(){

        let htmlelement = '<ul>';
        $('#result_elements').empty();
        let createtitle = $('#createtitle').val();
        let createbody = $('#createbody').val();
        let createuserid = $('#createuserid').val();
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: createtitle,
            body: createbody,
            userId: createuserid,
            completed: true
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((json) => {
                htmlelement+='<li>id: '+json.id+'</li>';
                htmlelement+='<li>userId: '+json.userId+'</li>';
                htmlelement+='<li>title: '+json.title+'</li>';
                htmlelement+='<li>completed: '+json.completed+'</li></ul>';
                $('#result_elements').append(htmlelement);
                });
  
    }
    
    let init = function(){
        
        $('#showone-btn').click(showone);
        $('#showall-btn').click(showall);
        $('#editone-btn').click(editone);
        $('#deleteone-btn').click(deleteone);
        $('#createone-btn').click(createone);
    }
    
    return {
        init: init,
    };
})();

