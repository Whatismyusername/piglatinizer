$('document').ready(function(){
    
    //Encoding Function
    function encodingWords(word){
        var encodedWord = '';
        function beginsWithAVowel(word){
        return (word[0] === 'a' || word[0] === 'e' || 
                word[0] === 'i' || word[0] === 'o' ||
                word[0] === 'u');
        }
        if(beginsWithAVowel(word)){
            encodedWord = word + 'yay';
            return encodedWord;
        } else{
            encodedWord = word + word[0] + 'ay';
            encodedWord = encodedWord.slice(1, encodedWord.length);
            return encodedWord;
        }
    }
    $('#encodeButton').click(function(){
        var encodeMessage = $('#encodeInput').val();
        var encodeW = encodeMessage.split(' ');
        var result = '';
        for(var i = 0; i < encodeW.length; i++){
            var encodedWord = encodingWords(encodeW[i]);
            result = result + ' ' + encodedWord;
        }
        $('#encodedMessage').html(result);
    })
    
    //Decoding Function
    function decodingWords(word){
        var decodedWord = '';
        function beginsWithAVowel(word){
        return (word[0] === 'a' || word[0] === 'e' || 
                word[0] === 'i' || word[0] === 'o' ||
                word[0] === 'u');
        }
        
        if(word[word.length - 2] === 'a' && word[word.length - 1] === 'y'){
            word = word.slice(0, word.length - 2);
            if (word[word.length - 1] === 'y' && beginsWithAVowel(word)){
                decodedWord = word.slice(0, word.length - 1);
                return decodedWord;
            } else{
                decodedWord = word[word.length - 1] + word;
                decodedWord = decodedWord.slice(0, word.length);
                return decodedWord;
            }
        } else {
            alert("This is not PIG LATIN!!! Please try again!")
        }
    }
    $('#decodeButton').click(function(){
        var decodeMessage = $('#decodeInput').val();
        var decodeW = decodeMessage.split(' ');
        var result = '';
        for(var i = 0; i < decodeW.length; i++){
            var decodedWord = decodingWords(decodeW[i]);
            result = result + ' ' + decodedWord;
         }
         $('#decodedMessage').html(result)
    })
})