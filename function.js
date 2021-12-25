


function Result(){

    // GPA calculator
    this.GpaGradeCal = function(marks){
          let gpa;
          let grade;
          if( marks >= 0 && marks <33 ){
              gpa = 0.0;
              grade = 'F'
          }else if( marks >= 33 && marks <40 ){
              gpa = 1.0;
              grade = 'D';
          }else if( marks >= 40 && marks <50 ){
            gpa = 2.0;
            grade = 'C';
        }else if( marks >= 50 && marks <60 ){
            gpa = 3.0;
            grade = 'B';
        }else if( marks >= 60 && marks <70 ){
            gpa = 3.5;
            grade = 'A-';
        }else if( marks >= 70 && marks <80 ){
            gpa = 4.0;
            grade = 'A';
        }else if( marks >= 80 && marks <100 ){
            gpa = 5.0;
            grade = 'A+';
        }


        return {
            gpa : gpa,
            grade : grade,
        }
    }

    // Fainal Result
    this.fainalResult = function( bn, en, math, rel, ss ){
        let cgpa;
        let fainalGrade;

        let totalCgpa = this.GpaGradeCal(bn).gpa + this.GpaGradeCal(en).gpa + this.GpaGradeCal(math).gpa + this.GpaGradeCal(rel).gpa + this.GpaGradeCal(ss).gpa;
          
        cgpa = totalCgpa / 5;

        if( bn <33 || en <33 || math <33 || rel <33 || ss <33){
            fainalGrade = 'F';
        }else if( cgpa >= 0 && cgpa < 1 ){
            fainalGrade = 'F'
        }else if( cgpa >= 1 && cgpa < 2 ){
            fainalGrade = 'D'
        }else if( cgpa >= 2 && cgpa < 3 ){
            fainalGrade = 'C'
        }else if( cgpa >= 3 && cgpa < 3.5 ){
            fainalGrade = 'B'
        }else if( cgpa >= 3.5 && cgpa < 4 ){
            fainalGrade = 'A-'
        }else if( cgpa >= 4 && cgpa < 5 ){
            fainalGrade = 'A'
        }else if( cgpa == 5){
            fainalGrade = 'A+'
        }

        return {
            fainalCgpa : fainalGrade == 'F' ? 'Faidel' : cgpa,
            fainalGrade : fainalGrade,
        }

    }
}

let abdusSamad = new Result();