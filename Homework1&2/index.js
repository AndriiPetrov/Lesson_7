var MathFrameWork = {
    Math: function(a, b, oper) {
        if (typeof (a) == 'number' && typeof (b) == 'number') {
            a = parseFloat(a);
            b = parseFloat(b);
            var Result = 0;
            switch (oper) {
                case '+': return Result = a + b; break;
                case '-': return Result = a - b; break;
                case '*': return Result = a * b; break;
                case '/': if (b == 0) {
                    return 'Делить на ноль нельзя';
                } else {
                    return Result = a / b;
                }; break;
                default: alert('Вы ввели не вернный арифметичский знак!'); break;
            }
            
        }
        else if (a instanceof Array && b instanceof Array) {//instanceof используется для проверки, принадлежит ли объект данному типу
            // временный контейнер для результата
            var tempResArray = [];
            var length = 0;
            if (a.length >= b.length) {
                length = a.length;
            }
            else {
                length = b.length;
            }
            for (var i = 0; i < length; i++) {
                var operand1 = parseFloat(a[i]);
                var operand2 = parseFloat(b[i]);
                if (isNaN(operand1)) {
                    operand1 = 0;
                } else if (isNaN(operand2)) {
                    operand1 = 0;
                }
                switch (oper) {
                    case '+': tempResArray[i] = operand1 + operand2; break;
                    case '-': tempResArray[i] = operand1 - operand2; break;
                    case '*': tempResArray[i] = operand1 * operand2; break;
                    case '/': if (operand2 == 0) {
                        return alert('Делить на ноль нельзя');
                    } else {
                        tempResArray[i] = operand1 / operand2;
                    }; break;
                    default: alert('Вы ввели не вернный арифметичский знак!'); break;
                }
            }
            return MathFrameWork.Result = tempResArray;
        }
        else if (a instanceof Object && b instanceof Object) {
            // временный контейнер для результата
            var tempResObject = {};

            switch (oper) {
                case '+': tempResObject.resultA = a['a'] + b['a'];
                    tempResObject.resultB = a['b'] + b['b']; break;
                case '-': tempResObject.resultA = a['a'] - b['a'];
                    tempResObject.resultB = a['b'] - b['b']; break;
                case '*': tempResObject.resultA = a['a'] * b['a'];
                    tempResObject.resultB = a['b'] * b['b']; break;
                case '/': if (b['a'] == 0 || b['b'] == 0) {
                    return alert('Делить на ноль нельзя');
                } else {
                    tempResObject.resultA = a['a'] / b['a'];
                    tempResObject.resultB = a['b'] / b['b'];
                }; break;
                default: alert('Вы ввели не вернный арифметичский знак!'); break;
            }
            return MathFrameWork.Result = tempResObject;
        }
    },

    A: [ 1, 3, 4],
    B: [5, 6 ,7],
    
}
MathFrameWork.Result = 0;
MathFrameWork.Math(MathFrameWork.A, MathFrameWork.B, "*");
alert(MathFrameWork.Result);



   