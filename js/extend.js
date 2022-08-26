class TemaMember{
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`)
    }
}

class Instructor extends TemaMember{
    
    designation = 'Web Course Instructor'
    team = 'web team'
    
    constructor(name, location){
        super(name, location)
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
   
}

class Developer extends TemaMember{
    designation = 'Web Course Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech){
        
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`please develop the  ${feature}`);
    }
    release(version){
        console.log(`please release the ${version}`)
    }
    
}


class JobPlacement extends TemaMember{
    designation = 'Job placement comandos'
    team = 'Job placement'
    region;
    constructor(name, location, region){
        super(name, location)
        this.region = region;
    }
    provideResume(feature) {
        console.log(`please develop the  ${feature}`);
    }
    prepareStudent(version){
        console.log(`please release the ${version}`)
    }
    
}

const sadik = new Developer('sadik', 'Gazipur, Bangladesh', 'JavaScript and React');
console.log(sadik);
sadik.provideFeedback();
