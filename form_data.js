class MyFormData {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    DataDisplay() {
        let display = "<h1>The Data Is:</h1>";
        display += "Name: " + this.name + "<br>";
        display += "Address: " + this.address + "<br>";
        display += "Phone: " + this.phone + "<br>";
        return display;
    }
}