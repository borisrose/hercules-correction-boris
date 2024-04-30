

/* classe mère */
class MyHtmlElement {
    constructor(parent, className, id){
        this.parent = parent 
        this.className = className
        this.id = id
    }
}

class MyH  extends MyHtmlElement {
    constructor(parent, className, id, hType, textContent){
        super(parent, className, id)
        this.element = document.createElement(hType)
        this.element.textContent = textContent
        this.parent.appendChild(this.element)
    }
}

class MyLi extends MyHtmlElement {
    constructor(parent, className, id,textContent){
        super(parent, className, id)
        this.element = document.createElement("li")
        this.element.textContent = textContent
        this.parent.appendChild(this.element)
    }
}

export class MyHtmlFactory {

    // méthode de classe
    static createH(data){
        return new MyH(data.parent, data.className, data.id, data.hType, data.textContent)
    }

    static createLi(data){
        return new MyLi(data.parent, data.className, data.id,data.textContent)
    }

}