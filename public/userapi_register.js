 // Получение всех пользователей
        function GetUsers() {
            $.ajax({
                url: "/api/users",
                type: "GET",
                contentType: "application/json",
                success: function(users) {
                    var rows = "";
                    $.each(users, function(index, user) {
                        console.log(user);  

                        // добавляем полученные элементы в таблицу
                        rows += row(user);
                    })
                    $("table tbody").append(rows);
                }
            });
        }
        // Получение одного пользователя
        function GetUser(id) {
            $.ajax({
                url: "/api/users/" + id,
                type: "GET",
                contentType: "application/json",
                success: function(user) {
                    var form = document.forms["userForm"];
                    form.elements["id"].value = user._id;
                    form.elements["firstName"].value = user.firstName;
                    form.elements["lastName"].value = user.lastName;
                    form.elements["birthday"].value = user.birthday;
                    form.elements["phone"].value = user.phone;  
                    form.elements["address"].value = user.address;
                    // form.elements["role"].value = user.role;
                }
            });
        }
        // Добавление пользователя
        function CreateUser(user, callback) {
            $.ajax({
                url: "api/users",
                contentType: "application/json",
                method: "POST",
                data: JSON.stringify({
                    firstName: user.FirstName(),
                    lastName: user.LastName(),
                    birthday: user.Birthday(),
                    phone: user.Phone(),
                    address: user.Address(),
                    role: user.Role()
                }),
                success: function(user) {
                    console.log(`Object ${user} has been posted`);
                }
            });
        }
        // Изменение пользователя
        function EditUser(userId, user) {
            $.ajax({
                url: "api/users",
                contentType: "application/json",
                method: "PUT",
                data: JSON.stringify({
                    id: userId,
                    firstName: user.FirstName(),
                    lastName: user.LastName(),
                    birthday: user.Birthday(),
                    phone: user.Phone(),
                    address: user.Address(),
                    role: user.Role()
                }),
                success: function(user) {
                    reset();
                    console.log(user);
                    $("tr[data-rowid='" + user._id + "']").replaceWith(row(user));
                }
            })
        }
        // Удаление пользователя
        function DeleteUser(id) {
            $.ajax({
                url: "api/users/" + id,
                contentType: "application/json",
                method: "DELETE",
                success: function(user) {
                    console.log(user);
                    $("tr[data-rowid='" + user._id + "']").remove();
                }
            })
        }