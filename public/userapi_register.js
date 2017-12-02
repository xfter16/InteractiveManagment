 // get all users
 function GetUsers() {
     fetch('api/users', {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json'
         }
     }).then(response => response.json()).then(function(users) {
         var rows = "";
         users.forEach(function(user) {
             printTrNewUser(user);
         })
     })
 }
 // get one user
 function GetUser(id) {
     fetch('api/users/' + id, {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json'
         }
     }).then(response => response.json()).then(function(user) {
         var form = document.forms["userForm"];
         form.elements["id"].value = user._id;
         form.elements["firstName"].value = user.firstName;
         form.elements["lastName"].value = user.lastName;
         form.elements["birthday"].value = user.birthday;
         form.elements["phone"].value = user.phone;
         form.elements["address"].value = user.address;
     });
 }
 // edit user
 function EditUser(userId, user) {
     fetch('api/users', {
         method: 'PUT',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             id: userId,
             firstName: user.FirstName(),
             lastName: user.LastName(),
             birthday: user.Birthday(),
             phone: user.Phone(),
             address: user.Address(),
             role: user.Role()
         }),
     }).then(response => response.json()).then(function(user) {
         reset();
         var tr = gebTag('tr');

         for (var i = 1; isUserId = tr[i].attributes[0].value != user._id;)
             i++;
         if (!isUserId) {
             var elem = document.createElement('tr');
             elem.setAttribute('data-rowid', user._id);
             elem.innerHTML = `<td>${user._id}</td>` +
                 `<td>${user.firstName}</td>` +
                 `<td>${user.lastName}</td>` +
                 `<td>${user.birthday}</td>` +
                 `<td>${user.phone}</td>` +
                 `<td>${user.address}</td>` +
                 `<td>${user.role}</td>` +
                 `<td>` +
                 `<a class='editLink' data='${user._id}'>Изменить</a> |` +
                 `<a class='removeLink' data='${user._id}'>Удалить</a>` +
                 `</td>`;
             gebId('userTable').replaceChild(elem, tr[i]);
         }
     })
 }
 // delete user
 function DeleteUser(id) {
     fetch('api/users/' + id, {
         method: 'DELETE',
         headers: {
             'Content-Type': 'application/json'
         }
     }).then(response => response.json()).then(function(user) {
         var tr = gebTag('tr');
         for (var q = 1; isUserId = (tr[q].attributes[0].value != user._id);)
             q++;
         if (!isUserId) gebId('userTable').removeChild(tr[q]);
     });
 }
 //create new User
 function sendCreateUser(user) {
     return fetch('api/users', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             firstName: user.FirstName(),
             lastName: user.LastName(),
             birthday: user.Birthday(),
             phone: user.Phone(),
             address: user.Address(),
             role: user.Role()
         }),
     }).then(response => response.json())
 }