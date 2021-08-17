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

// 내림차순 선택정렬
function descendingSelectionSort(arr) {
  let answer = arr;
  let maxNumIndex;

  // 제일 마지막 인덱스가 minIndex가 될 때는 더이상 비교할 요소들이 없기이 반복 조건을 배열 길이 - 1로 세팅.
  for (let i = 0; i < arr.length - 1; i++) {
    maxNumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[maxNumIndex] < arr[j]) {
        maxNumIndex = j;
      }
    }
    // console.log(`maxNumIndex : ${maxNumIndex}`);
    // 순회를 시작하는 인덱스의 값이 최소값이 아닌 경우, 그러니까 실제로 스왑이 필요한 경우에만 스왑 실행
    if (maxNumIndex > i) {
      [arr[i], arr[maxNumIndex]] = [arr[maxNumIndex], arr[i]];
    }

    console.log(arr);
  }

  return answer;
}

// 오름차순 선택정렬
function ascendingSelectionSort(arr) {
  let answer = arr;
  let minNumIndex;

  // 제일 마지막 인덱스가 minIndex가 될 때는 더이상 비교할 요소들이 없기이 반복 조건을 배열 길이 - 1로 세팅.
  for (let i = 0; i < arr.length - 1; i++) {
    minNumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minNumIndex] > arr[j]) {
        minNumIndex = j;
      }
    }
    // console.log(`minNumIndex : ${minNumIndex}`);
    // 순회를 시작하는 인덱스의 값이 최소값이 아닌 경우, 그러니까 실제로 스왑이 필요한 경우에만 스왑 실행
    if (minNumIndex > i) {
      [arr[i], arr[minNumIndex]] = [arr[minNumIndex], arr[i]];
    }

    console.log(arr);
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

      if (insertValue < array[j]) {
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

    console.log(array);
    console.log(`패스스루 : ${i} 번째`);
  }

  return answer;
}

export { bubbleSort, descendingSelectionSort, ascendingSelectionSort, insertionSort };
