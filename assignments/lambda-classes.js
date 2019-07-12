// CODE here for your Lambda Classes


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name} and I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(sub) {
        return `Today we are learning about ${sub}`;
    }
    grade(student, sub) {
        return `${student.name} receives a perfect score on ${sub}`;
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground  = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listSubjects() {
        return this.favSubjects;
    }
    PRAssignment(sub) {
        return `${this.name} has submitted a PR for ${sub}`;
    }
    sprintChallenge(sub) {
        return `${this.name} has begun a sprint challenge on ${sub}`;
    }
    graduate() {
        return this.grade > 70 ? `Graduate!` : `Not ready to graduate yet`;
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(sub, student) {
        return `${this.name} debugs ${student.name}'s code on ${sub}`;
    }
}

const joe = new Person({
    name: 'Joe',
    location: 'Indiana',
    age: 40
})

const james = new Person({
    name: 'James',
    location: 'Ohio',
    age: 35
})

const dan = new Instructor({
    name: 'Dan',
    location: 'Virginia',
    age: 23,
    specialty: 'React',
    favLanguage: 'Java',
    catchPhrase: 'Legends never die'
})

const john = new Instructor({
    name: 'John',
    location: 'Georgia',
    age: 34,
    specialty: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: `Let's get this bread`
})

const jordan = new Student({
    name: 'Jordan',
    location: 'Alabama',
    age: 20,
    previousBackground: 'HTML',
    className: 'WebPT8',
    favSubjects: 'CSS',
    grade: 80
})

const jamie = new Student({
    name: 'Jamie',
    location: 'California',
    age: 38,
    previousBackground: 'None',
    className: 'Web16',
    favSubjects: 'JavaScript',
    grade: 99
})

const daniel = new ProjectManager({
    name: 'Daniel',
    location: 'Wisconsin',
    age: 22,
    gradClassName: 'Web19',
    favInstructor: 'John'
})

