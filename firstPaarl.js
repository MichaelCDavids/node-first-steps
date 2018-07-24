module.exports =function(string){
	var newString = string.split(", ");
  	for(var i = 0 ; i < newString.length ; i++){
      var loopString = newString[i];
      if(loopString.startsWith('CJ')){
        return loopString;
      }
    }
  return '';
}