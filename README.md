# DataTree

DataTree is a parser-driven system that converts a text DSL into visual trees. This project started as my personal family tree making application. Along the way, it turned into a minimalistic universal tree visualizer, supporting rich nodes with multi-line key-value pairs, making it suitable for family trees, organizational charts, taxonomies, and hierarchies using a simple S-expression language.

## use instructions

Data is entered (or copy-pasted) in a text editor as an S-Expression of the following format:

```
<start> := (DATA (TITLE <value>) <tree>)

<tree> := (TREE (PARENT (<key> <value>+)+) (CHILDREN <tree>+))
        | (LEAF (<key> <value>+)+)
```

Comments have no meaning to the system, and can be used to annotate the code or temporary disable parts of code. They are indicated by parenthesis that begin with the atom `**`.

Button in the top right corner is used to switch between data editing and tree browsing modes. Tree browsing mode is available only when the tree data does not contain errors. Possible errors are displayed live in the bottom left corner, while the cursor reference position for finding errors is shown in the bottom right corner of the editor.

Online working version with a live example is [here](https://tearflake.github.io/datatree).

And that's it. Have fun!

