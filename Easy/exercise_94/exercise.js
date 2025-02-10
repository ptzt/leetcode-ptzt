class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1,
  null,
  new TreeNode(2, new TreeNode(3))
);

var inorderTraversal = function (root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
};

// const root = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
inorderTraversal(root);