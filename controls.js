class Controls {
    constructor(forward, left, right, backward) {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.backward = false;

        this.#addKeyboardsListeners()
    }

    #addKeyboardsListeners() {
        document.onkeydown = (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.backward = true;
                    break;

            }
          
        }

        document.onkeyup = (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowDown":
                    this.backward = false;
                    break;
            }
        }
    }
 
    
}
