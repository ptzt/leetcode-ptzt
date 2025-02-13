var minOperations = function (nums, k) {
  const minHeap = new MinPriorityQueue({ priority: x => x });
  for (const num of nums) {
    minHeap.enqueue(num);
  }
  let operations = 0;
  while (minHeap.front().element < k) {
    let x = minHeap.dequeue().element;
    let y = minHeap.dequeue().element;
    let newElement = x * 2 + y;
    minHeap.enqueue(newElement);
    operations++;
  }
  return operations;
};