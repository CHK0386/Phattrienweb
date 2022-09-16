function Validator(options) {
    var formElement = document.querySelector(options.form) ;
    console.log(options.rules);
    if (formElement) {
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function() {
                    rule.test()
                    console.log(rule)
                }
            }
        })

    }
}

// dinh nghia cac rules
//Nguyen tac cua rules
//1.khi co loi => tra ra message loi
//2.khi hop le => khong tra ra gi ca (undefined)
Validator.isRequired = function(selector){
    return {
        selector: selector, 
        test: function(value) {
            return value.trim() ? undefined : 'vui lòng nhập trường này'

        }
    };
    
}
Validator.isEmail = function(selector){
    return {
        selector: selector, 
        test: function() {
            
        }
    };
    
}