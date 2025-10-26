class StudentClass {
    constructor (name, roll, address) {
        this.name = name;
        this.roll = roll;
        this.address = address;
    }

    studentInfo() {
        let output = "<h1>Student Info</h1>" + "<br>";
        output += "Name: " + this.name + "<br>"; 
        output += "Roll: " + this.roll + "<br>"; 
        output += "Address: " + this.address + "<br>"; 
        return display;
    }
}