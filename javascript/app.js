export default class App {
  constructor() {
    this.output = "";
    this.numberOfClicks = 0;
    this.createTextBox();
    console.log("App");
    this.createOutputText();
    this.createAndBindEventListeners();
    this.createClickMeButton();
  }

  createTextBox() {
    let textBox = document.createElement("INPUT");
    textBox.setAttribute("type", "textarea");
    textBox.setAttribute("rows", 4);
    textBox.setAttribute("cols", 20);
    textBox.setAttribute("id", "input");
    document.body.appendChild(textBox);
  }

  createOutputText() {
    let label = document.createElement("label");
    label.setAttribute("id", "output");
    label.setAttribute("for", "input");

    document.body.appendChild(label);
    label.innerHTML = this.output;
  }

  createAndBindEventListeners() {
    let input = document.getElementById("input");
    input.addEventListener("input", this.handleChange);
  }

  handleChange = (e) => {
    let label = document.getElementById("output");
    this.output = e.target.value;
    label.innerHTML = this.output;
    let length = e.target.value.length;
    if (length > 20) {
      e.target.setAttribute("style", "border: 5px solid red;");
      e.target.blur();
      e.target.focus();
    } else {
      e.target.setAttribute("style", "");
    }
  };

  createClickMeButton() {
    let button = document.createElement("button");
    button.innerHTML = "Click Me";
    document.getElementById("button-cont").appendChild(button);
    let counter = document.createElement("div");
    counter.innerHTML = this.numberOfClicks;
    counter.setAttribute("id", "counter");
    document.getElementById("button-cont").appendChild(counter);
    button.addEventListener("click", this.handleClick);
  }

  handleClick = () => {
    this.numberOfClicks++;
    document.getElementById("counter").innerHTML = this.numberOfClicks;
    console.log(this.numberOfClicks);
  };
}
