var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  targetSum -= root.val

  if (!root.left && !root.right) {
    return targetSum === 0;
  }

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};