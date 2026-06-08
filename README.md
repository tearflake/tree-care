# DataTree

DataTree is a parser-driven system that converts a text data into visual trees. This project started as my personal family tree making application. Along the way, it turned into a minimalistic universal tree visualizer, supporting rich nodes with multi-line key-value pairs, making it suitable for creating family trees, organizational charts, taxonomies, and hierarchies using a simple S-expression based input format.

## use instructions

Data is entered in embedded text editor as an S-Expression of the following format:

```
<start> := (DATA (TITLE <value>) <tree>)

<tree> := (TREE (PARENT (<key> <value>+)+) (CHILDREN <tree>+))
        | (LEAF (<key> <value>+)+)
```

Comments have no meaning to the system, and can be used to annotate the code or temporary disable parts of code. They are indicated by parenthesis that begin with the atom `**`.

Button at the top right corner is used to switch between data editing and tree browsing modes. Tree browsing mode is available only when the tree data does not contain errors. Possible errors are displayed live at the bottom left corner, while the cursor reference position for finding errors is shown at the bottom right corner of the editor. Open/save buttons trigger file dialogs that may require modern browser support, otherwise the user is expected to copy data form and paste data to the application. Open/save buttons are automatically visible when these operations are supported by the browser.

Online working version with a live example is [here](https://tearflake.github.io/datatree).

And that's it. Have fun!

