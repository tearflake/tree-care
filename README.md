# Tree Care

This project started as my personal family tree making application. Along the way, it turned into a minimalistic universal tree visualizer, supporting rich nodes with multiple multi-line fields.

## use instructions

Data is entered (or copy-pasted) in a text editor as an S-Expression of the following format:

```
<start> := (DATA (TITLE <value>) <tree>)

<tree> := (TREE (PARENT (<key> <value>+)+) (CHILDREN <tree>+))
        | (LEAF (<key> <value>+)+)
```

Comments are contained in parenthesis that begin with the atom `**`.

Button in the top right corner is used to switch between data editing and tree browsing modes. Tree browsing mode is available only when the tree data does not contain errors. Possible errors are displayed live in the bottom left corner, while the cursor reference position for finding errors is shown in the bottom right corner of the editor.

Online working version is [here](tearflake.github.io/tree-care).

And that's it. Have fun!

