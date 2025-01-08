function mergeSort(nums) {
    if (nums.length <= 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);
    const lHalf = mergeSort(nums.slice(0, mid));
    const rHalf = mergeSort(nums.slice(mid, nums.length));

    const sorted = [];

    let l = 0;
    let r = 0;
    while (l < lHalf.length || r < rHalf.length) {
        if (r >= rHalf.length || (l < lHalf.length && lHalf[l] <= rHalf[r])) {
            sorted.push(lHalf[l]);
            l++;
        } else if (
            l >= lHalf.length ||
            (r < rHalf.length && rHalf[r] <= lHalf[l])
        ) {
            sorted.push(rHalf[r]);
            r++;
        }
    }

    return sorted;
}

function randomArray(nums) {
    return Array.from({ length: nums }, () => Math.floor(Math.random() * nums));
}

function init() {
    const UNSORTED_NUMS = 50;
    const unsorted = randomArray(UNSORTED_NUMS);
    const sorted = mergeSort(unsorted);

    console.log(`Unsorted: ${unsorted.toString()}`);
    console.log(`Sorted: ${sorted.toString()}`);
}

init();
