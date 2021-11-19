class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length += 1;
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    let suma = 0;
    for (var i = 0; i < this.items.length; i++) {
      suma += this.items[i];
    }
    return suma;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let suma = 0;
    for (var i = 0; i < this.items.length; i++) {
      suma += this.items[i];
    }
    return suma / this.items.length;
  }
}

module.exports = SortedList;
