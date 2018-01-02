var pet = {
	words:'...',
	speak:function(say){
		console.log(say + '  ' + this.words)
	}
}
// pet.speak('lala');

var dog = {
	words : 'wang'
}

pet.speak.call(dog , 'Speak')//call来改变this指向