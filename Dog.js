function Dog() {
	function.stomach = [];
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};
