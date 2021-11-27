let previousNums = '';
let currentNums = '';
let operation;


$('.number').on('click', function(e) {
    if (e.currentTarget.innerHTML !== '.') {
        currentNums += e.currentTarget.innerHTML;
    } else if (!currentNums.includes('.')) {
        currentNums += e.currentTarget.innerHTML;
    }
    $('.display-current').html(currentNums);
});


$('.operation, .equal').on('click', function(e) {
    if (!!previousNums) {
        switch (previousNums.slice(-1)) {
            case '÷':
                operation = function(a, b) {return a / b};
                break;
            case '×':
                operation = function(a, b) {return a * b};
                break;
            case '−':
                operation = function(a, b) {return a - b};
                break;
            case '+':
                operation = function(a, b) {return a + b};
                break;
        }

        if (e.currentTarget.innerHTML === '=') {
            currentNums = String(operation(Number(previousNums.slice(0, -1)), Number(currentNums)));
            previousNums = '';
        } else {
            previousNums = String(operation(Number(previousNums.slice(0, -1)), Number(currentNums)));
            previousNums += e.currentTarget.innerHTML;
            currentNums = ''
        }
        $('.display-previous').html(previousNums);
        $('.display-current').html(currentNums);
    } else if (e.currentTarget.innerHTML !== '=') {
        previousNums = currentNums + e.currentTarget.innerHTML;
        currentNums = ''
        $('.display-previous').html(previousNums);
        $('.display-current').html(currentNums);
    }
});


$('.all-clear').on('click', function() {
    previousNums = '';
    currentNums = '';
    $('.display-previous').html(previousNums);
    $('.display-current').html(currentNums);
});


$('.delete').on('click', function() {
    if (!!currentNums) {
        currentNums = currentNums.slice(0, -1);
    }
    $('.display-current').html(currentNums);
});