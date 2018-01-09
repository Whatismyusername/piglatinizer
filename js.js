$('document').ready(function(){
    function piglatinizer (string){
        var split = string.split('');
        var text = "";
        if( split[0] === 'a' || split[0] === 'e'|| split[0] === 'i' || split[0] === 'o' || split [0] === 'u'){
            for( let i = 0; i < split.length; i++){
                text = text + split[i];
            }
            text = text + 'yay';
        } else {
            for( let i = 1; i <split.length; i++){
                text = text + split[i];
            }
            text = text + split[0];
            text = text + 'ay';
        }
        $('p').text(text);
    }
    $('#button').click(function(){
        var originalText = $('#input').val();
        piglatinizer(originalText);
    })
})