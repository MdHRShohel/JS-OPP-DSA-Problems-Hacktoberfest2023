function evaluatePostfixExpression(expression) {
    const stack = [];
    
    for (const token of expression.split(' ')) {
      if (isNumeric(token)) {
        stack.push(parseFloat(token));
      } else if (isOperator(token)) {
        if (stack.length < 2) {
          throw new Error('Not enough operands for operator ' + token);
        }
        
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        switch (token) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            if (operand2 === 0) {
              throw new Error('Division by zero');
            }
            stack.push(operand1 / operand2);
            break;
          default:
            throw new Error('Invalid operator: ' + token);
        }
      }
    }
    
    if (stack.length === 1) {
      return stack[0];
    } else {
      throw new Error('Invalid expression');
    }
  }
  
  function isNumeric(token) {
    return !isNaN(parseFloat(token)) && isFinite(token);
  }
  
  function isOperator(token) {
    return token === '+' || token === '-' || token === '*' || token === '/';
  }
  
  
  const postfixExpression = "4 5 5 / +";
  const result = evaluatePostfixExpression(postfixExpression);
  console.log(`Result of postfix expression "${postfixExpression}" is: ${result}`);
  