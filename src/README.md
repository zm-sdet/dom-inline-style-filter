## Optimizations

1.  **When traversing DOM tree of `node`, group nodes by descending node depth.**

    CSS inheritance is computed on the DOM tree via preorder traversal and is additive-cumulative (increases styling data).
	
  	For the filter op which is subtractive, we want to traverse the tree in the opposite direction to avoid more recomputation.
    
    The algorithm sorts elements in the `node` tree by descending node depth. (This is known as reverse level order traversal.)

    This gives us a 30% to 40% speed boost. This also ensures declarations are only removed when they really can be inherited.

2.  **When filtering each inline style declaration by computed effect, go for the most hyphenated properties first.**

    In CSS, shorthands consistently have less hyphens than their longhand.

	We want to filter out scenarios where a CSS property matches their shorthand, e.g. `block-size` -> `height` or `border-color` -> `border`.

    The algorithm does a bucket sort for standard, custom and vendored proprties, then subsorts by descending hyphen count.

    In tests this filtered another 7.7% of inline styling. We also get a 20-40% speed boost because we're not setting as many properties back.
