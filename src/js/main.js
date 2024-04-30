import base from "./base.js";
import { MyHtmlFactory } from "./factory/MyHtmlFactory.js";
import { Hero } from "./models/Hero.js";

class MainContainer {
  constructor() {
    this.createUI();
    this.createHercule();
    this.createCesar();
    this.displayWork();
  }

  createUI() {
    this.peopleBar = document.getElementsByClassName("people__bar");
    this.peoplePop = document.getElementsByClassName("people__popularity");
    console.log(this.peoplePop);
    this.menuToggler = document.getElementById("menu-toggler");
    this.headerBanner = document.getElementById("header-banner");
    this.contactForm = document.getElementById("contact");

    this.menuToggler.onclick = () => {
      this.headerBanner.classList.toggle("banner--open");
    };

    this.contactForm.onsubmit = (e) => {
      e.preventDefault();
      window.alert("Hercule ne souhaite pas être dérangé.");
    };
    this.createH();
    this.tasks = document.getElementsByClassName("tasks")[0];

    const activities = document.getElementById("activities");
    activities.classList.remove("hidden");
  }

  createHercule() {
    const hercule = new Hero("Hercule", "Demi-dieu", 35, 75, 60.5, "oui");
    base.fillProfil(hercule);
    const herculeFriends = ["Jupiter", "Junon", `Alcumène`, "Déjanire"];
    base.printFriends(herculeFriends);
    base.setBestFriend(herculeFriends[0]);
    const nicknameH3 = document.getElementById("profil-name");
    nicknameH3.innerText = this.createNickname(
      hercule.name,
      hercule.department
    );

    const herculeResult = this.calculePercentage(
      base.vote.hercule,
      base.vote.cesar + base.vote.hercule
    );

    this.peoplePop[1].innerText = herculeResult + "%";
    this.peopleBar[1].style.width = herculeResult + "%";
    const lamdbaBooleanAnswer = (el) => {
      return el.author === "Hercule" && el.finished === true;
    };

    const herculeFinishedTasks = base.activities.filter(lamdbaBooleanAnswer);
    console.log(herculeFinishedTasks);

    herculeFinishedTasks.forEach((el) => {
      MyHtmlFactory.createLi({
        parent: this.tasks,
        className: "",
        id: "",
        textContent: el.title,
      });
    });
  }

  createCesar() {
    const cesarResult = this.calculePercentage(
      base.vote.cesar,
      base.vote.cesar + base.vote.hercule
    );

    this.peoplePop[0].innerText = cesarResult + "%";
    this.peopleBar[0].style.width = cesarResult + "%";
  }

  createNickname(firstname, depNumber) {
    return `${firstname}-du-${depNumber}`;
  }

  createH() {
    MyHtmlFactory.createH({
      parent: document.getElementById("header-banner"),
      className: "banner__title",
      id: "",
      hType: "h1",
      textContent: "Vous consultez le profil de Hercule",
    });
  }

  displayWork() {
    for (let onzeTravaux = 0; onzeTravaux < 12; onzeTravaux++) {
      base.displayWork(onzeTravaux);
    }
  }

  calculePercentage(relativeValue, totalValue) {
    return Math.floor((relativeValue / totalValue) * 100);
  }
}

const mainContainer = new MainContainer();
