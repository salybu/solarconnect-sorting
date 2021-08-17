/**
 * @param {*} array : input 배열
 * @param {*} isAscending : 정렬 순서 조건. true면 오름차면, false면 내림차순.
 * @returns : 정렬된 배열
 */
function bubbleSort(array, isAscending) {
  for (let i = 0; i < array.length; i++) {
    let swap = false;
    for (let j = 0; j < array.length - i; j++) {
      const sortingCondition = isAscending ? array[j] > array[j + 1] : array[j] < array[j + 1];

      if (sortingCondition) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swap = true;
      }
    }
    if (swap == false) {
      break;
    }
  }
  return array;
}

/**
 * @param {*} array : input 배열
 * @param {*} isAscending : 정렬 순서 조건. true면 오름차면, false면 내림차순.
 * @returns : 정렬된 배열
 */
function selectionSort(arr, isAscending) {
  let Index;
  let answer = arr;

  // 제일 마지막 인덱스가 Index가 될 때는 더이상 비교할 요소들이 없기이 반복 조건을 배열 길이 - 1로 세팅.
  for (let i = 0; i < arr.length - 1; i++) {
    Index = i;

    for (let j = i + 1; j < arr.length; j++) {
      const sortingCondition = isAscending ? arr[Index] > arr[j] : arr[Index] < arr[j];
      if (sortingCondition) {
        Index = j;
      }
    }
    // console.log(`maxNumIndex : ${maxNumIndex}`);
    // 순회를 시작하는 인덱스의 값이 최소값이 아닌 경우, 그러니까 실제로 스왑이 필요한 경우에만 스왑 실행
    if (Index > i) {
      [arr[i], arr[Index]] = [arr[Index], arr[i]];
    }

    // console.log(arr);
  }

  return answer;
}

/**
 * @param {*} array : input 배열
 * @param {*} isAscending : 정렬 순서 조건. true면 오름차면, false면 내림차순.
 * @returns : 정렬된 배열
 */
function insertionSort(array, isAscending) {
  let answer = array;

  for (let i = 1; i < array.length; i++) {
    let insertValue = array[i];

    for (let j = i - 1; j > -1; j--) {
      // 내림차순으로 변경시 아래 조건문 부등호만 바꾸면 된다.
      const sortingCondition = isAscending ? insertValue < array[j] : insertValue > array[j];

      if (sortingCondition) {
        array[j + 1] = array[j];
      } else {
        array[j + 1] = insertValue;
        break;
      }

      // 첫번째 인덱스까지 비교했는데도 삽입할 곳이 없다면 첫번째 인덱스 값을 insertValue로 대체
      if (j === 0) {
        array[j] = insertValue;
      }
      // console.log(arr);
    }

    // console.log(array);
    // console.log(`패스스루 : ${i} 번째`);
  }

  return answer;
}

function quickSort(arr, compareFn) {
  if (!Array.isArray(arr)) {
    throw TypeError('The first parameter must be an array');
  }

  const compareFnType = typeof compareFn;

  if (compareFnType !== 'function' && compareFnType !== 'undefined') {
    throw TypeError('The comparison function must be either a function or undefined');
  }

  if (compareFnType === 'undefined') {
    compareFn = (a, b) => {
      if (a < b) return -1;
      if (a === b) return 0;
      if (a > b) return 1;
    };
  }

  if (arr.length < 2) return;

  sort(arr, 0, arr.length - 1, compareFn);
}

function sort(arr, left, right, compareFn) {
  if (left >= right) return;

  const pivot = left;
  let i = pivot + 1;
  let j = right;

  while (i <= j) {
    while (i <= right) {
      const result = compareFn(arr[i], arr[pivot]);

      if (isNaN(result) || typeof result !== 'number') return;
      if (result > 0) break;

      i++;
    }

    while (j > left) {
      const result = compareFn(arr[j], arr[pivot]);

      if (isNaN(result) || typeof result !== 'number') return;
      if (result <= 0) break;

      j--;
    }

    if (i >= j) break;

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  [arr[j], arr[pivot]] = [arr[pivot], arr[j]];

  sort(arr, left, j - 1, compareFn);
  sort(arr, j + 1, right, compareFn);
}

export { bubbleSort, insertionSort, selectionSort, quickSort };
