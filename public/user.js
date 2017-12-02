

function User(id, firstName, lastName, birthday, phone, address, role) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.phone = phone;
    this.address = address;
    this.role = role;

    this.Id = function(val){
        if (!arguments.length) return id;
        id = val;
    }
    this.FirstName = function(name) {
        if (!arguments.length) return firstName;
        firstName = name;
    }
    this.LastName = function(name) {
        if (!arguments.length) return lastName;
        lastName = name;
    }
    this.Birthday = function(date) {
        if (!arguments.length) return birthday;
        birthday = date;
    }
    this.Phone = function(number) {
        if (!arguments.length) return phone;
        phone = number;
    }
    this.Address = function(adrs) {
        if (!arguments.length) return address;
        address = adrs;
    }
    this.Role = function(val){
        if (!arguments.length) return role;
        role = val;
    }
    this.getInfo = function() {
            return `
            id: ${id} \n
            firstName: ${firstName} \n    
            lastName: ${lastName} \n    
            birthday: ${birthday} \n    
            phone: ${phone} \n 
            address: ${address} \n 
            role: ${role}`
        }
}