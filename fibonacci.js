function fibs(n) {
    // Iterative approach
    if (n <= 0) {
        throw new Error("n must be a positive integer.");
    }

    // Base cases
    switch (n) {
        case 1:
            return [0];
        case 2:
            return [0, 1];
    }

    const nums = [0, 1];
    for (let i = 2; i < n; i++) {
        nums.push(nums[i - 1] + nums[i - 2]);
    }
    return nums;
}

function fibsRec(n) {
    // Recursive approach
    if (n <= 0) {
        throw new Error("n must be a positive integer.");
    }

    // Base cases
    switch (n) {
        case 1:
            return [0];
        case 2:
            return [0, 1];
    }

    const nums = fibsRec(n - 1);
    nums.push(nums[n - 2] + nums[n - 3]);
    return nums;
}

function testFibonacci(n) {
    console.log(`Testing iterative fibonacci with ${n} terms.`);
    console.log(fibs(n).toString() + "\n");
    console.log(`Testing recursive fiboncaci with ${n} terms.`);
    console.log(fibsRec(n).toString() + "\n");
}

function init() {
    const FIBONACCI_TERMS = 8;

    testFibonacci(FIBONACCI_TERMS);
}

init();
