export default class TodoModel {
	constructor({id, text, checked = false}) {
		this.id = id;
		this.text = text;
		this.checked = checked;
	}

	markAsDone() {
		this.checked = true;
	}

	clone() {
		return new TodoModel(this);
	}
}
