const Student = require('../models/student');

exports.create = function(request, response){
    let student = new Student({
        name: request.body.name,
        age: request.body.age
    });

    student.save( () => {
        response.send('Saved!');
    });
}

exports.get = function (request, response){
    Student.find((error, students)=>{
        response.send(students);
    })
}