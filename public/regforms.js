// для тега <div class="reg-form"></div>
// Отрисовка форм для регистрации
//printForm(tag, new Map([label_val, for_val]))

var printFormMap = function(tag, map) {
    map.forEach((value, key, map) => {$(tag).append(getForm(key, value))}); 
}
var printForm = function(tag, getForm){
	$(tag).append(getForm);
}
var getForm = function(label_val, for_val) {
    return  `<div class="form-group">
                    <label for="${for_val}">${label_val}: </label> 
                    <input class="form-control" name="${for_val}"/>
                   </div>`;
}
var getReadonlyForm = function(label_val, for_val, value) {
    return `<div class="form-group">
                    <label for="${for_val}">${label_val}: </label> 
                    <input readonly class="form-control" name="${for_val}" value="${value}"/>
                   </div>`;
}	
	/**
	 * getCheckBox(tag, name, id, value, content, position, status)
	 * 
	 * @param  {tag} 		$(tag).append(checkBox)
	 * @param  {name}		name="${name}"
	 * @param  {id}			id="${id}"
	 * @param  {value}		value="${value}"
	 * @param  {content}	> ${content} <
	 * @param  {status}		'checked' / 'disabled' / ''
	 * @return none
	 */
var getCheckBox = function(tag, name, id, value, content, status) {

	var checkBox = `<div class="form-check form-check-inline">
  						<label class="form-check-label">
    						<input class="form-check-input" type="radio" name="${name}" id="${id}" value="${value}" ${status}> ${content}
  						</label>
					</div>`;
	$(tag).append(checkBox);
}
