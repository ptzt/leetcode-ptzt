var isBalanced = function (root) {
  function height(node) {
    if (!node) return 0;

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }
  return height(root) !== -1;
};