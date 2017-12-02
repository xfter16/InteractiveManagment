var printFormMap = function(id, map) {
    map.forEach((value, key, map) => {
    	var getForm = function(label_val, for_val) {
    		return  `<div class="form-group">
                    <label for="${for_val}">${label_val}: </label> 
                    <input class="form-control" name="${for_val}"/>
                   </div>`;
		}
		createChild(id, getForm(key, value));
    }); 

}
function createChild(id, elem){
	var div = document.createElement('div');
	div.innerHTML = elem;
	gebId(id).appendChild(div);
}	
var getCheckBox = function(elemId, name, id, value, content, status) {
	var checkBox = `<div class="form-check form-check-inline">
  						<label class="form-check-label">
    						<input class="form-check-input" type="radio" name="${name}" id="${id}" value="${value}" ${status}> ${content}
  						</label>
					</div>`;
	createChild(elemId, checkBox);
}
//  create row for user`s table
        function row(user) {
            return  `<tr data-rowid='${user._id}'>`+
                        `<td>${user._id}</td>`+
                        `<td>${user.firstName}</td>`+ 
                        `<td>${user.lastName}</td>` +
                        `<td>${user.birthday}</td>` +
                        `<td>${user.phone}</td>` +
                        `<td>${user.address}</td>` +
                        `<td>${user.role}</td>` +
                        `<td>` +
                            `<a class='editLink' data='${user._id}'>Изменить</a> |`  +
                            `<a class='removeLink' data='${user._id}'>Удалить</a>` +
                        `</td>`+
                    `</tr>`;
        }
        function printTrNewUser(user){
            gebId('userTable').insertAdjacentHTML('beforeEnd', row(user));
        }
