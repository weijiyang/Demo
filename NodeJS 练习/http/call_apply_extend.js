function pet(words){
	this.words = words

	this.speak = function(){
		console.log(this.words);
	}
}


function Dog(words){
	pet.call(this,words) //继承pet方法
	//pet.apply(this,arguments)
}

var dog = new Dog('wang')

dog.speak();
