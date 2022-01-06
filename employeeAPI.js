var express = require('express');
var app = express();

class employee{
    ID;
    name;
    department;
    salary
}

var employees =[];

app.use(express.urlencoded());

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/employees', (req, res)=>{
    res.send(employees);
})

app.post('/employee/add', (req, res) => {
    let employee = {
        ID: parseInt(req, body, id),
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
    };
    employees.push(employee);
    if (employee) {
        return res.status(200).send(employee);
    }

    return res.status(500).send('employee could not be created');
});

app.patch('/employee/update/:id', (req, res) => {

    let employee = employees.find((element) => {
        if (element.ID === parseInt(req.params.id)){
            return true;
        }
    });
    if (employee) {
        for (let i in req.body){
            employee[i] = req.body[i];
        }
        return res.status(200).send(employee);
    }

    return res.status(404).send('Wrong ID, No Employee Found.');
});

app.delete('/employee/delete/:id', (req, res) => {
    let employee =employees.find((element) => {
        if (element.ID === parseInt(req, params, id)){
            return true; 
        }
    });
    if (employee) {
        let index = employees.indexOf(employee);
        employees.splice(index, 1);
        return res.status(200).send(employee);
    }

    return res.status(404).send('Wrong ID, No Employee Found');
});

var server = app.listen(8000, function(){
    console.log("Server is runnning");
});
