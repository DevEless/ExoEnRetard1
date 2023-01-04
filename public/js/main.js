const personnage1 = {
    nom: 'Dupont',
    prenom: 'Jean',
    age: 35,
    taille: 1.80
};

console.log(personnage1.age);

const personnage2 = {
    nom: 'Durand',
    prenom: 'Marie',
    age: 28,
    taille: 1.70
};

const personnage3 = {};

personnage3.nom = personnage1.nom;
personnage3.age = personnage2.age;
personnage3.taille = 1.75;

const personnage4 = {
    nom: 'Dupont',
    prenom: 'Paul',
    age: 25,
    sePresenter: function () {
        console.log(`Bonjour, je m'appelle ${this.nom} ${this.prenom}`);
    },
    changerAge: function () {
        this.age = prompt('Quel âge avez-vous maintenant?');
        alert(`${this.nom} a ${this.age} ans`);
    }
};

personnage4.sePresenter();
personnage4.changerAge();