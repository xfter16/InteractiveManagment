

function User(id, firstName, lastName, birthday, phone, address, role) {

    console.log('User created');
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.phone = phone;
    this.address = address;
    this.role = role;


    this.id = function(newid) {
        if (!arguments.length) return id;
        id = newid;
    }
    this.firstName = function(name) {
        if (!arguments.length) return firstName;
        firstName = name;
    }
    this.lastName = function(name) {
        if (!arguments.length) return lastName;
        lastName = name;
    }
    this.birthday = function(date) {
        if (!arguments.length) return birthday;
        birthday = date;
    }
    this.phone = function(number) {
        if (!arguments.length) return phone;
        phone = number;
    }
    this.address = function(adrs) {
        if (!arguments.length) return address;
        address = adrs;
    }
    this.role = function(val){
        if (!arguments.length) return role;
        role = val;
    }
}

// function CreateUser(user) {
//     $.ajax({
//         url: "api/users",
//         contentType: "application/json",
//         method: "POST",
//         data: JSON.stringify({
//             firstName: user.firstName(),
//             lastName: user.lastName(),
//             birthday: user.birthday(),
//             phone: user.phone(),
//             address: user.address()
//         }),
//         success: function(user) {
//             console.log(`Object ${user} has been posted`);
//         }
//     });
// }