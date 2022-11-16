var nameError=document.getElementById('name-error');
var messageError=document.getElementById('message-error');
var mailError=document.getElementById('mail-error');
var submitError=document.getElementById('submit-error');


function ValidName(){
    var name=document.getElementById('c-name').value;
    
    if(name.length==0){
         nameError.innerHTML= 'name is required';
         return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))    
    {
        nameError.innerHTML= 'please enter full name';
         return false;
    }
    nameError.innerHTML= '';
    return true;

}
    function ValidEmail(){
        var mail=document.getElementById('c-mail').value;

            if(mail.length==0){
                mailError.innerHTML= 'Email is required';
                return false;

        }
        if(!mail.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
        {
            mailError.innerHTML= 'please enter valid Email';
            return false;
        }
        mailError.innerHTML='';
        return true;

    }

    function ValidMessage(){
        var message=document.getElementById('c-message').value;
        var total=30;
        var left=total-message.length;

        if(message.length==0){
            messageError.innerHTML= 'required';
            return false;
        }

        if(left>0){

            messageError.innerHTML= 'atleast 30 characters';
            return false;
             
        }
        messageError.innerHTML='';
        return true;

    }
    function ValidSubmit(){

        var submit=document.getElementById('c-submit')
        if(!ValidName() || !ValidEmail() || !ValidMessage())
        {
            submitError.innerHTML= 'fill up the form';
            return false;
        }
    }

