// tree.js
// (c) tearflake, 2025.
// MIT License

"use strict";

var Tree = (
    function (obj) {
        return {
            getTree: obj.getTree,
        };
    }
) (
    (function () {

        function getTree (arr) {
            let x = makeTree (arr);
            return renderTree (x);
        }
        
        // ------------------------------------------
        // 1. Definicija strukture podataka
        // ------------------------------------------
        function makeTree (arr) {
            let node;
            if (arr[0] === 'TREE') {
                node = {parent: {}, children: []};
                for (let i = 1; i < arr[1].length; i++) {
                    node.parent[arr[1][i][0]] = []
                    for (let j = 1; j < arr[1][i].length; j++) {
                        node.parent[arr[1][i][0]].push (arr[1][i][j]);
                    }
                }
                
                for (let i = 1; i < arr[2].length; i++) {
                    node.children.push (makeTree (arr[2][i]))
                }
            }
            else if (arr[0] === 'LEAF') {
                node = {leaf: {}};
                for (let i = 1; i < arr.length; i++) {
                    node.leaf[arr[i][0]] = [];
                    for (let j = 1; j < arr[i].length; j++) {
                        node.leaf[arr[i][0]].push (arr[i][j]);
                    }
                }
            }
            
            return node;
        }

        // ------------------------------------------
        // 2. Funkcija za generiranje sadrzaja boxa
        // ------------------------------------------
        function renderNode(node) {
            let contents = [];
            let keyLen = 0;
            for(let key in node) {
                keyLen = Math.max(key.length, keyLen);
            }
            for(let key in node) {
                contents.push(key.padStart(keyLen) + ": " + node[key][0]);
                for(let line = 1; line < node[key].length; line++) {
                    contents.push(" ".repeat(keyLen + 2) + node[key][line]);
                }
                if(key !== Object.keys(node)[Object.keys(node).length - 1]) {
                    contents.push("");
                }
            }
            
            return contents;
        }

        // ------------------------------------------
        // 3. Funkcija za crtanje boxa
        // ------------------------------------------
        function drawBox(lines, firstIndent, restIndent, firstBox, hasChildren) {
          const width = 47;//Math.max(...lines.map(l => l.length));
          let top
          if (firstBox) {
              top = firstIndent + "┌" + "─".repeat(width + 2) + "┐";
          }
          else {
              top = firstIndent + "┬" + "─".repeat(width + 2) + "┐";
          }
          let mid = lines.map(l => (restIndent + "│ " + l.padEnd(width, " ").substring(0, width) + " │"));
          let bottom
          if (hasChildren) {
              bottom = restIndent + "└" + "─".repeat(3) + "┬" + "─".repeat(width + 2 - 4) + "┘";
          }
          else {
              bottom = restIndent + "└" + "─".repeat(width + 2) + "┘";
          }
          return [top, ...mid, bottom];
        }

        // ------------------------------------------
        // 4. Rekurzivno generiranje stabla
        // ------------------------------------------
        function renderTree(node, firstIndent="", restIndent = "", isNotFirst=false) {
          let output = "";

          if (node.parent) {
            const box = drawBox(renderNode(node.parent), firstIndent, restIndent, !isNotFirst, true);
            output = box.join("\n") + "\n";
            if (node.children?.length) {
              node.children.forEach((child, i) => {
                output += restIndent + "    │\n";
                let fi = restIndent + (i === node.children.length - 1 ? "    └───" : "    ├───");
                let ri = restIndent + (i === node.children.length - 1 ? "        " : "    │   " );
                output += renderTree(child, fi, ri, true);
              });
            }
          } else if (node.leaf) {
            const box = drawBox(renderNode(node.leaf), firstIndent, restIndent, !isNotFirst, false);
            output = box.join("\n") + "\n";
          }

          return output;
        }

        return {
            getTree: getTree
        }
    }) ()
);

