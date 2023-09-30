 

(function (exports) {
  
  function SegmentTree(invalidValue, aggregate) {

    this._data = [];

    this._original = null;

    this._invalidValue = invalidValue;

    this._aggregate = aggregate;

  }

  SegmentTree.indexArray = function (array, placeholder, aggregate) {

    var segmentize = function (original, data, lo, hi, idx) {

      if (lo === hi) {

        data[idx] = original[lo];

      } else {

        var mid = Math.floor((lo + hi) / 2);

        var left = 2 * idx + 1;

        var right = 2 * idx + 2;

        segmentize(original, data, lo, mid, left);

        segmentize(original, data, mid + 1, hi, right);

        data[idx] = aggregate(data[left], data[right]);

      }

    };

    var result = [];

    if (array && array.length) {

      segmentize(array, result, 0, array.length - 1, 0);

    }

    var tree = new SegmentTree(placeholder, aggregate);

    tree._data = result;

    tree._original = array;

    return tree;

  };

  

  SegmentTree.prototype.query = function (start, end) {

    if (start > end) {

      throw new Error('The start index should be smaller by the end index');

    }

    var findEl = function (originalArrayStart, originalArrayEnd, current) {

      if (start > originalArrayEnd) {

        return this._invalidValue;

      }

      if (end < originalArrayStart) {

        return this._invalidValue;

      }

      if (start === originalArrayStart && end === originalArrayEnd ||

          originalArrayStart === originalArrayEnd) {

        return this._data[current];

      }

      var originalArrayMid =

        Math.floor((originalArrayStart + originalArrayEnd) / 2);

      return this._aggregate(

        findEl(originalArrayStart, originalArrayMid, 2 * current + 1),

        findEl(originalArrayMid + 1, originalArrayEnd, 2 * current + 2)

      );

    }.bind(this);

    return findEl(0, this._original.length - 1, 0, this._aggregate);

  };

  exports.SegmentTree = SegmentTree;

}(typeof window === 'undefined' ? module.exports : window));
