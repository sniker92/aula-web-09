$("#btnlogin").click(
    function(){
        $.ajax({
            type: 'GET',
            url: 'http://jsonplaceholder.typicode.com/users',
            success:function(data){
                console.log(data)
            },
            error:function(data){
                console.log(data)
            }
        })
    
        //login = 
            //{
                //'usuario' : document.getElementById('inputEmail').value,
                //'senha' : document.getElementById('inputpass').value,
                //'tipo_login' : 'site'
            //}   

            // nome
            // professor
            // semestre
            // dia
            // ativa
            // aluno = []
            
        //if (login.senha == '1234') {
            //alert("bem Vindo!");
            //document.getElementById('resultado').innerHTML = '<b>Bem Vindo!</b>'
        //} else {
            //alert("Usuário ou Senha errada!")
            //document.getElementById('resultado').innerHTML = '<b>Usuário ou Senha errada!</b>'
       // }
        //console.log("Esta é a mensagem de log");
        //console.log("Ovalor do campo e-mail é");
        //console.log(
            //document.getElementById('inputEmail').value
       // );
        //console.log(login);
       //console.log(login.usuario);
        //console.log(login.senha);
       
        
    }
)