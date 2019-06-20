tree = [1,null,2,3]
def inorder_traversal(root)
    results = []
    traverse_tree(root, results)
end

def traverse_tree(root, results)
        return [] if root == nil
        # puts "RES: #{results}, R: #{root.val}"
        traverse_tree(root.left, results)
        if root.val
            results << root.val
        end 
        traverse_tree(root.right, results)
        return results
end 
