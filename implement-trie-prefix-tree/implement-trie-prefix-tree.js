const ALPHA_SIZE = 26;

function TriedNode() {
    this.isEndOfWord = false;
    this.children = new Array(ALPHA_SIZE);
    for (let i = 0; i < ALPHA_SIZE; i++) {
        this.children[i] = null;
    }
}

function Trie () {
    this.root = new TriedNode();

};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let tempNode = this.root;
    for (let i = 0; i < word.length; i++) {
        let temp = word.charCodeAt(i) - 97;
        if (tempNode.children[temp] == null) {
            tempNode.children[temp] = new TriedNode();
        }
        tempNode = tempNode.children[temp];
    }
    tempNode.isEndOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let tempNode = this.root;
    for (let i = 0; i < word.length; i++) {
        let temp = word.charCodeAt(i) - 97;
        if (tempNode.children[temp] == null) {
            return  false;
        }
        tempNode = tempNode.children[temp];
    }
    return tempNode.isEndOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let tempNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
        let temp = prefix.charCodeAt(i) - 97;
        if (tempNode.children[temp] == null) {
            return  false;
        }
        tempNode = tempNode.children[temp];
    }
    return true;
};
